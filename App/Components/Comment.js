// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CommentStyle'

import { getTimeAgo, unescapte } from '../Lib/Utilities'

// I18n
import I18n from 'react-native-i18n'

export default class Comment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      depth: 1
    }
  }

  render() {
    let { comment, depth, allItems } = this.props
    depth = depth || 1
    const { collapsed } = this.state
    const collapsedText = collapsed ? '  (collapsed)' : ''
    const marginLeft = depth > 4 ? 0 : 25
    return (
      <View style={depth > 1 ? styles.deepCommentContainer : styles.commentContainer}>
        <View style={[styles.textGroup, { marginLeft: marginLeft }]}>
          {
            collapsed ?
              <Text style={styles.comment} onPress={() => this.setState({ collapsed: false })}> [+] </Text> :
              <Text style={styles.comment} onPress={() => this.setState({ collapsed: true })}> [-] </Text>
          }
          <Text style={styles.comment}>{I18n.t('by')}</Text>
          <Text style={[styles.comment, styles.textLink]}> {comment.by}</Text>
          <Text style={styles.comment}> | {getTimeAgo(comment.time)} {I18n.t('ago')}</Text>
          <Text style={styles.comment}>{collapsedText}</Text>
        </View>
        <View style={[styles.commentInner, { marginLeft: marginLeft }]}>
          <Text style={styles.commentTitle}>{unescapte(comment.text)}</Text>
          <View style={styles.commentList}>
            {
              !!comment.kids &&
              comment.kids.map((id) => {
                const it = allItems[id]
                if (it) {
                  return (
                    <Comment
                      key={id}
                      comment={it}
                      allItems={allItems}
                      depth={depth + 1} />
                  )
                }
              })
            }
          </View>
        </View>
      </View>
    )
  }
}

// // Prop type warnings
Comment.propTypes = {
  comment: React.PropTypes.string.isRequired,
  allItems: React.PropTypes.array
}
//
// // Defaults for props
// Comment.defaultProps = {
//   someSetting: false
// }
