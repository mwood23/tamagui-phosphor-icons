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
      <_Path d="M95.89,48a32,32,0,1,1,32,32A32,32,0,0,1,95.89,48Zm132.23,73.14C226.4,120.11,185.55,96,128,96S29.6,120.11,27.88,121.14a8,8,0,0,0,8.24,13.72c.36-.22,34.91-20.6,83.88-22.68V149L58,218.69a8,8,0,1,0,12,10.62L128,164l58,65.27a8,8,0,0,0,12-10.62L136,149V112.19c48.77,2.08,83.53,22.46,83.88,22.67a8,8,0,1,0,8.24-13.72Z" />
    </_Svg>
  )
}

Icon.displayName = 'PersonSimpleFill'

export const PersonSimpleFill = memo<IconProps>(themed(Icon))
