// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: '#FF6600',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navbar: {
    flex:1,
    flexDirection: 'row',
    marginLeft: 8
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.snow,
    marginTop: Metrics.doubleBaseMargin,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  selectedTab: {
    flex: 1,
    borderBottomWidth: 3,
    borderStyle: 'solid',
    borderBottomColor: '#FFFFFF'
  },
  tab: {
    flex: 1
  },
  logo: {
    marginTop: Metrics.doubleBaseMargin,
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
    alignSelf: 'center',
    marginLeft: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  }
})
