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
      <_Path d="M147.91,113.72a28,28,0,1,1-25.63-25.63A28,28,0,0,1,147.91,113.72ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM188,56a8,8,0,0,0-8-8H152.27A8.17,8.17,0,0,0,144,55.47,8,8,0,0,0,152,64h8.69L144.92,79.77A44,44,0,1,0,112,159.26V176H92.27A8.17,8.17,0,0,0,84,183.47,8,8,0,0,0,92,192h20v15.73a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V192h19.73a8.17,8.17,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H128V159.26a44,44,0,0,0,28.24-68.18L172,75.31v8.42A8.18,8.18,0,0,0,179.47,92,8,8,0,0,0,188,84Z" />
    </_Svg>
  )
}

Icon.displayName = 'GenderIntersexFill'

export const GenderIntersexFill = memo<IconProps>(themed(Icon))
