// @flow

import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Metrics,
  Fonts,
  Colors
} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    flex: 1,
    alignItems: 'center'
  },
  username: {
    ...Fonts.style.h2,
    marginBottom: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h5,
    marginBottom: Metrics.smallMargin,
    color: Colors.gray
  },
  loading: {
    height: Metrics.singleItemHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    color: Colors.gray
  }
})
