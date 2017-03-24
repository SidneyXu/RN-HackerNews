// @flow

import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Metrics,
  Fonts
} from '../../Themes/'

// Due to RN Breaking Changes, flexGrow is used to fix a bug
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  webview: {},
  errorText: {
    textAlign: 'center',
    ...Fonts.style.h5
  }
})
