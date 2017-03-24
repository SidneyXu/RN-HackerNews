// @flow

import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Colors,
  Metrics,
  Fonts
} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight + Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin
  },
  storyContainer: {
    flexDirection: 'row',
    flex: 1
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
