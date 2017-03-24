// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  ListView,
  KeyboardAvoidingView,
  RefreshControl,
  View
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import StoryActions from '../Redux/StoryRedux'
import { Metrics, Colors } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/StoryListStyle'

// I18n
import I18n from 'react-native-i18n'

// Component
import Story from '../Components/Story'
import AlertMessage from '../Components/AlertMessage'

// Config 
import { pageSize } from '../Config/AppConfig'

class StoryList extends React.Component {

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({ rowHasChanged })
    this.state = {
      dataSource: ds.cloneWithRows(props.items),
    }
  }

  componentDidMount() {
    const { requestList, displayType } = this.props
    this.props.requestList(displayType, true)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.items)
      })
    }
  }

  componentWillUpdate(nextprops) {

  }

  componentDidUpdate(nextprops) {

  }

  renderRow = (rowData) => {
    return (
      <Story
        title={rowData.title}
        url={rowData.url}
        by={rowData.by}
        score={rowData.score}
        time={rowData.time}
        descendants={rowData.descendants}
        pressRow={() => this.pressRow(rowData)}
        viewComment={() => this.viewComment(rowData)}
        viewAuthor={() => this.viewAuthor(rowData)}
      />
    )
  }

  pressRow(rowData) {
    NavigationActions.article({
      data: rowData
    })
  }

  viewComment(rowData) {
    NavigationActions.comment({
      data: rowData
    })
  }

  viewAuthor(rowData) {
    NavigationActions.user({
      data: rowData
    })
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 * Metrics.horizontalLineHeight : Metrics.horizontalLineHeight,
          backgroundColor: adjacentRowHighlighted ? Colors.orange : Colors.steel,
        }}
      />
    )
  }

  renderFooter = () => {
    if (this.props.fetching) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>{I18n.t('loading')}</Text>
        </View>
      )
    }
  }

  onEndReached = () => {
    if (!this.props.fetching && this.reachEnd()) {
      const { loadMore, displayType } = this.props;
      loadMore(displayType)
    }
  }

  onRefresh = () => {
    const { requestList, displayType } = this.props
    this.props.requestList(displayType)
  }

  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  reachEnd() {
    return this.props.lists.length > 0 && this.props.lists.length > this.props.items.length
  }

  render() {
    const self = this
    return (
      <View style={styles.container}>
        <AlertMessage title={I18n.t('notFound')}
          show={!self.props.fetching && this.noRowData()} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          renderSeparator={this.renderSeparator}
          pageSize={pageSize}
          onEndReached={this.onEndReached.bind(self)}
          onEndReachedThreshold={16}
          enableEmptySections
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.onRefresh}
            />
          }
        />
      </View>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.stories.items,
    lists: state.stories.lists[ownProps.displayType],
    fetching: state.stories.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestList: (activeType, clearable = false) => {
      dispatch(StoryActions.listRequest(activeType, clearable))
    },
    loadMore: (activeType) => dispatch(StoryActions.loadMoreRequest(activeType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryList)
