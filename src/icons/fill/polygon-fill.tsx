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
      <_Path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62ZM162.77,176.15a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Z" />
    </_Svg>
  )
}

Icon.displayName = 'PolygonFill'

export const PolygonFill = memo<IconProps>(themed(Icon))
