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
      <_Path d="M197.66,197.66a8,8,0,0,1-11.32,0L116,127.31,69.66,173.66A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,5.66,13.66L127.31,116l70.35,70.34A8,8,0,0,1,197.66,197.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowUpLeftFill'

export const ArrowUpLeftFill = memo<IconProps>(themed(Icon))
