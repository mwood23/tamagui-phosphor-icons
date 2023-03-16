import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Circle as _Circle,
  Defs as _Defs,
  Ellipse as _Ellipse,
  G as _G,
  Line as _Line,
  LinearGradient as _LinearGradient,
  Path as _Path,
  Polygon as _Polygon,
  Polyline as _Polyline,
  RadialGradient as _RadialGradient,
  Rect as _Rect,
  Stop as _Stop,
  Svg as _Svg,
  Symbol as _Symbol,
  Text as _Text,
  Use as _Use,
} from 'react-native-svg'

import { themed } from '../../themed'
import { IconProps } from '../icons/IconProps'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg
      viewBox="0 0 256 256"
      {...otherProps}
      height={size}
      width={size}
      fill={`${color}`}
    >
      <_Rect width="256" height="256" fill="none" />
      <_Path d="M248,96v16a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h80A8,8,0,0,1,248,96Zm-8,40H160a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V144A8,8,0,0,0,240,136Zm0,48H72a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V192A8,8,0,0,0,240,184ZM80,168a56.06,56.06,0,0,1-56-56,55.49,55.49,0,0,1,4.11-21A28,28,0,0,1,44,40a8,8,0,0,1,3.89,1l69.93,38.85A12,12,0,0,0,116,56a8,8,0,0,1,0-16,28,28,0,0,1,0,56,8,8,0,0,1-3.89-1l-40-22.21A40,40,0,0,0,72,151.2V112a8,8,0,0,1,16,0v39.19a40.09,40.09,0,0,0,29.73-25.86,8,8,0,0,1,15.08,5.34A56.09,56.09,0,0,1,80,168ZM36.23,77.14a56.33,56.33,0,0,1,17.5-14.58L42.18,56.14a12,12,0,0,0-6,21Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArticleNyTimesFill'

export const ArticleNyTimesFill = memo<IconProps>(themed(Icon))
