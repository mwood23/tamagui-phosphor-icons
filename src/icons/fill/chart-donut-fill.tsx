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
      <_Path d="M24.75,115.54A102.31,102.31,0,0,1,48.06,61.78a16,16,0,0,1,23.63-1.1L99.36,88.94a15.87,15.87,0,0,1,1.69,20.48h0a25.59,25.59,0,0,0-3.7,7.75A4,4,0,0,1,93.53,120H28.73A4,4,0,0,1,24.75,115.54ZM137.39,24.06A16,16,0,0,0,120,40V80.67a15.86,15.86,0,0,0,13.25,15.76,32,32,0,0,1,5.41,61.76A4.06,4.06,0,0,0,136,162v65.23a4,4,0,0,0,4.46,4A104.34,104.34,0,0,0,232,129.48C232.75,75.19,191.19,28.88,137.39,24.06Zm-20.14,134.1a32,32,0,0,1-19.4-19.42,4.06,4.06,0,0,0-3.8-2.74H28.72a4,4,0,0,0-4,4.45,104.1,104.1,0,0,0,90.82,90.82,4,4,0,0,0,4.45-4V162A4.05,4.05,0,0,0,117.25,158.16Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChartDonutFill'

export const ChartDonutFill = memo<IconProps>(themed(Icon))
