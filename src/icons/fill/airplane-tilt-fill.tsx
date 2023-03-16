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
      <_Path d="M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z" />
    </_Svg>
  )
}

Icon.displayName = 'AirplaneTiltFill'

export const AirplaneTiltFill = memo<IconProps>(themed(Icon))
