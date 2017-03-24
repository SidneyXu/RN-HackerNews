// @flow

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// I18n
import I18n from 'react-native-i18n'

import styles from './Styles/TabHeaderStyle'

export default class TabHeader extends React.Component {

  constructor(props) {
    super(props)
    const { selected } = this.props
    this.state = {
      selected
    }
  }

  pressTab(item, switchTab) {
    this.setState({
      selected: item.title
    })
    switchTab(item.key)
  }

  render() {
    const selectTab = this.state.selected
    const self = this
    const { pressLogo, switchTab } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pressLogo}>
          <Image style={styles.logo} source={{ uri: 'https://news.ycombinator.com/favicon.ico' }} />
        </TouchableOpacity>
        <View style={styles.navbar}>
          {this.props.navItems.map(item => {
            const style = (selectTab === item.key ? styles.selectedTab : styles.tab)
            return (
              <TouchableOpacity
                style={style}
                onPress={() => self.pressTab(item, switchTab)}
                key={"headerkey-" + item.title}
              >
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}

// Prop type warnings
TabHeader.propTypes = {
  switchTab: React.PropTypes.func,
  pressLogo: React.PropTypes.func
}

// Defaults for props
TabHeader.defaultProps = {
  navItems: ['top', 'new', 'show', 'ask', 'job'].map(name => {
    return {
      title: I18n.t(name),
      key: name
    }
  })
}
