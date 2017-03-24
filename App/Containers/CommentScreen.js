// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import CommentActions from '../Redux/CommentRedux'

import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/CommentScreenStyle'

// I18n
import I18n from 'react-native-i18n'

// Component
import Story from '../Components/Story'
import Comment from '../Components/Comment'

class CommentScreen extends React.Component {

  componentDidMount() {
    const { data } = this.props;
    if (data.kids) {
      this.props.fetchComments(data.id)
    }
  }

  render() {
    const { data, comments } = this.props;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Story
            title={data.title}
            url={data.url}
            by={data.by}
            score={data.score}
            time={data.time}
          />
          {!!data.kids &&
            <View>
              <View>
                {data.descendants ?
                  <Text style={styles.comment}>{data.descendants} {I18n.t('comments')}</Text>
                  : <Text style={styles.comment}>{I18n.t('noComments')}</Text>
                }
              </View>
              <View>
                {
                  data.kids.map((id) => {
                    const comment = comments[id]
                    if (comment) {
                      return (
                        <Comment
                          key={id}
                          comment={comment}
                          allItems={comments} />
                      )
                    }
                  })
                }
              </View>
            </View>
          }
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(CommentActions.commentRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen)
