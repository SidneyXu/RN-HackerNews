// @flow

// Utility functions
import { Platform } from 'react-native'
import R from 'ramda'

import I18n from 'react-native-i18n'

// useful cleaning functions
const nullToEmpty = R.defaultTo('')
const replaceEscapedCRLF = R.replace(/\\n/g)
const nullifyNewlines = R.compose(replaceEscapedCRLF(' '), nullToEmpty)

export const getHost = (url) => {
  if (!url) return ''
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export const getTimeAgo = (time) => {
  const day = I18n.t('day')
  const minute = I18n.t('minute')
  const hour = I18n.t('hour')
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' ' + minute)
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' ' + hour)
  } else {
    return pluralize(~~(between / 86400), ' ' + day)
  }
}

export const pluralize = (time, label) => {
  if (time === 1) {
    return time + label
  }
  const plur = I18n.t('plur')
  return time + label + plur
}

export const unescapte = (text) => {
  let res = text || ''

    ;[
      ['<p>', '\n'],
      ['&amp;', '&'],
      ['&amp;', '&'],
      ['&apos;', '\''],
      ['&#x27;', '\''],
      ['&#x2F;', '/'],
      ['&#39;', '\''],
      ['&#47;', '/'],
      ['&lt;', '<'],
      ['&gt;', '>'],
      ['&nbsp;', ' '],
      ['&quot;', '"']
    ].forEach(pair => {
      res = res.replace(new RegExp(pair[0], 'ig'), pair[1])
    })

  return res
}