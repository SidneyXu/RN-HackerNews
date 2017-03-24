// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ApiTestStyle'

// I18n
import I18n from 'react-native-i18n'

import CommentActions from '../Redux/CommentRedux'


class ApiTest extends React.Component {

  componentDidMount() {
    setTimeout(()=>
    this.props.clear()
    , 1000)
  }

  onPress = ()=>{
    this.props.fetchComments("13854380")
  }

  render () {
    const {comments} = this.props
    console.log(comments)
    return (
        <Text 
          style={{marginTop: 100, fontSize: 32, marginLeft: 16}}
          onPress={this.onPress}>ApiTest Container</Text>
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
    fetchComments: (id) => dispatch(CommentActions.commentRequest(id)),
    clear: ()=>dispatch(CommentActions.clearComments())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApiTest)
