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
      <_Path d="M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm72,24H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm32-48h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16ZM72,120H24a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V128A8,8,0,0,0,72,120ZM232,88H184a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V96A8,8,0,0,0,232,88Zm-80,64H104a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,152,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'EqualizerFill'

export const EqualizerFill = memo<IconProps>(themed(Icon))
