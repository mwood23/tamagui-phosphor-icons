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
      <_Path d="M256,200.41A15.91,15.91,0,0,1,240,216H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54h0c1.13,22.83,16.91,38.26,41.19,40.26A16.13,16.13,0,0,1,184,95.7V108a4,4,0,0,1-4,4H152a8,8,0,0,0-8,8.53,8.18,8.18,0,0,0,8.25,7.47h28a4,4,0,0,1,4,3.55,31.31,31.31,0,0,0,1.64,7.14,4,4,0,0,1-3.77,5.3H160a8,8,0,0,0-8,8.53,8.17,8.17,0,0,0,8.25,7.47H216A40,40,0,0,1,256,200.41ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm24,24H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z" />
    </_Svg>
  )
}

Icon.displayName = 'SneakerMoveFill'

export const SneakerMoveFill = memo<IconProps>(themed(Icon))
