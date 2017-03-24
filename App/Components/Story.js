// @flow

import React, { PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/StoryStyle'

import { Actions } from 'react-native-router-flux'

// I18n
import I18n from 'react-native-i18n'

import { getHost, getTimeAgo, pluralize } from '../Lib/Utilities'

export default class Story extends React.Component {

  render() {
    const { title, url, by, score, time, descendants, pressRow, viewComment, viewAuthor } = this.props;
    const host = getHost(url)
    const ago = getTimeAgo(time)
    return (
      <TouchableOpacity style={styles.container} onPress={pressRow}>
        <Text style={styles.storyScore}>{score}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.storyTitle} numberOfLines={2}>
            {title}
          </Text>
          {!!host &&
            <Text style={styles.storyUrl}>
              ({host})
            </Text>
          }
          <View style={styles.textGroup}>
            <Text style={styles.comment}>{I18n.t('by')}</Text>
            <Text
              onPress={viewAuthor}
              style={[styles.comment, styles.textLink]}> {by}</Text>
            <Text style={styles.comment}> | {ago} {I18n.t('ago')}</Text>
            {!!descendants &&
              <Text
                onPress={viewComment}
                style={[styles.comment, styles.textLink]}> | {descendants} {I18n.t('comments')}</Text>
            }
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    )
  }
}

// Prop type warnings
Story.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  by: PropTypes.string,
  score: PropTypes.number,
  time: PropTypes.number,
  descendants: PropTypes.number,
  pressRow: PropTypes.func,
  viewComment: PropTypes.func,
  viewAuthor: PropTypes.func
}

// Defaults for props
Story.defaultProps = {
  score: 0
}
