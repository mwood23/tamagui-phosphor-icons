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
      <_Path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM195.06,96.61a8,8,0,0,0-8.72,1.73L144,140.69,85.66,82.34A8,8,0,0,0,74.34,93.66L132.69,152,90.34,194.34A8,8,0,0,0,96,208h96a8,8,0,0,0,8-8V104A8,8,0,0,0,195.06,96.61Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowLineDownRightFill'

export const ArrowLineDownRightFill = memo<IconProps>(themed(Icon))
