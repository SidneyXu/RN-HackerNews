// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.orange,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.snow,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
})
