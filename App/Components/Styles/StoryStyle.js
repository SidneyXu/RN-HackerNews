// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin
  },
  storyContainer:{
    flexDirection: 'row',
    flex: 1
  },
  storyTitle: {
    fontSize: Fonts.size.h6,
    color: Colors.eclipse,
    flexWrap: 'wrap',
    flex:1
  },
  storyUrl: {
    fontSize: Fonts.size.medium,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    color: Colors.manatee
  },
  storyScore: {
    width: 42,
    fontSize: Fonts.size.regular,
    fontWeight:'bold',
    color: Colors.orange,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: Metrics.smallMargin
  },
  textGroup:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Metrics.smallMargin
  },
  comment: {
    color: Colors.manatee
  },
  textLink: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.manatee
  }
})
