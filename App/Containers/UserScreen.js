// @flow

import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from '../Redux/UserRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/UserScreenStyle'

// I18n
import I18n from 'react-native-i18n'

import { getTimeAgo, unescapte } from '../Lib/Utilities'

class UserScreen extends React.Component {

  componentDidMount() {
    const { data } = this.props
    this.props.fetchUser(data.by)
  }

  render() {
    const { data, users } = this.props
    const user = users[data.by]
    return (
      <View style={styles.container}>
        <Text style={styles.username}>{data.by}</Text>
        {user ?
          <View>
            <Text style={styles.label}>{I18n.t('created')}: {getTimeAgo(user.created)} {I18n.t('ago')}</Text>
            <Text style={styles.label}>{I18n.t('karma')}: {user.karma}</Text>
            <Text style={styles.label}>{unescapte(user.about)}</Text>
          </View> :
          <View style={styles.loading}>
            <Text style={styles.loadingText}>{I18n.t('loading')}</Text>
          </View>
        }
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(UserActions.userRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
