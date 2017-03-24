// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, WebView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ArticleScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class ArticleScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  renderError = (msg) => {
    return (
      <Text style={styles.errorText}>{msg}</Text>
    )
  }

  onError = (e) => {
    this.state.error = e
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webview}
          source={{ uri: data.url }}
          renderError={this.renderError}
          onError={this.onError}
          scalesPageToFit />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
