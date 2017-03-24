// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin
  },
  commentContainer: {
    paddingBottom: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gainsboro,
    marginBottom: Metrics.baseMargin
  },
  deepCommentContainer: {
    marginTop: Metrics.baseMargin
  },
  textGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  comment: {
    color: Colors.manatee
  },
  textLink: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.manatee
  },
  commentInner: {

  },
  commentTitle:{
    fontSize: Metrics.h5,
    color: Colors.eclipse
  }
})
