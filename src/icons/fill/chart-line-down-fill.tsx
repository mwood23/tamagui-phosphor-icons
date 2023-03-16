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
      <_Path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V60.69l56,56,26.34-26.35a8,8,0,0,1,11.32,0L180,136.69l14.34-14.35A8,8,0,0,1,208,128v40a8,8,0,0,1-8,8H160a8,8,0,0,1-5.66-13.66L168.69,148,128,107.31l-26.34,26.35a8,8,0,0,1-11.32,0L40,83.31V200H224A8,8,0,0,1,232,208Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChartLineDownFill'

export const ChartLineDownFill = memo<IconProps>(themed(Icon))
