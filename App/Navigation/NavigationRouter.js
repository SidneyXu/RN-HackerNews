// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'

// I18n
import I18n from 'react-native-i18n'

import { Actions as NavigationActions } from 'react-native-router-flux'


// screens identified by the router
import StoryList from '../Containers/StoryList'
import UserScreen from '../Containers/UserScreen'
import CommentScreen from '../Containers/CommentScreen'
import ArticleScreen from '../Containers/ArticleScreen'
import ApiTest from '../Containers/ApiTest'

import Header from '../Components/Header'
import TabHeader from '../Components/TabHeader'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  pressLogo() {
    NavigationActions.pop()
  }

  getStoryScene = (displayType) => {
    const self = this
    return {
      key: displayType,
      title: displayType,
      component: () =>
        <StoryList
          displayType={displayType} />,
      navBar: () =>
        <TabHeader
          selected={displayType}
          pressLogo={this.pressLogo}
          switchTab={(displayType) => self.switchTab(displayType)} />
    }
  }

  getHeader(title) {
    return () => (
      <Header
        title={I18n.t(title)}
        onBackPress={() => NavigationActions.pop()} />
    )
  }

  switchTab(displayType) {
    NavigationActions[displayType]({ type: 'replace' })
  }

  render() {
    const self = this
    return (
      <Router>
        <Scene
          key="root"
          navigationBarStyle={Styles.navBar}
          navBar={self.getHeader("author")}
          hideTabBar
          titleStyle={Styles.title}
          leftButtonIconStyle={Styles.leftButton}
          rightButtonTextStyle={Styles.rightButton}>
          <Scene initial {...self.getStoryScene('top') } />
          <Scene {...self.getStoryScene('new') } />
          <Scene {...self.getStoryScene('show') } />
          <Scene {...self.getStoryScene('ask') } />
          <Scene {...self.getStoryScene('job') } />
          <Scene key="user" navBar={self.getHeader("author")} component={UserScreen} title='User Screen' />
          <Scene key="comment" component={CommentScreen} title='Comment Screen' />
          <Scene key="article" navBar={self.getHeader("article")} component={ArticleScreen} title='Article Screen' />
          <Scene key="api" component={ApiTest} title="ApiTest" />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
