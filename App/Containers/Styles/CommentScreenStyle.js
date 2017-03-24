// @flow

import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Metrics
} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight + Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin
  },
  comment: {
    marginLeft: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin
  }
})
