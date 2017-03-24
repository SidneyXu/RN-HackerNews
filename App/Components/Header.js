// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/HeaderStyle'

import { Colors, Metrics, ApplicationStyles, Fonts } from '../Themes/'

import Icon from 'react-native-vector-icons/FontAwesome'

// I18n
import I18n from 'react-native-i18n'

export default class Header extends React.Component {

  render() {
    const { onBackPress, title } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Icon name="angle-left"
            onPress={onBackPress}
            size={Metrics.icons.medium}
            color={Colors.snow} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    )
  }
}

// Prop type warnings
Header.propTypes = {
  onBackPress: React.PropTypes.func,
  title: React.PropTypes.string
}

// Defaults for props
Header.defaultProps = {
  title: I18n.t('author')
}
