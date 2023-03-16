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
      <_Path d="M168,24V8a8,8,0,0,1,16,0V24a8,8,0,0,1-16,0Zm35.83,17a8,8,0,0,0,11-2.66l8-13.11a8,8,0,1,0-13.66-8.33l-8,13.1A8,8,0,0,0,203.82,41Zm47.44,12.59a8,8,0,0,0-10.06-5.16l-15,4.85a8,8,0,0,0,2.45,15.62,8.1,8.1,0,0,0,2.46-.39l15-4.85A8,8,0,0,0,251.26,53.55Zm-30,39.94A79.71,79.71,0,0,1,208.67,190,80,80,0,0,1,62.48,208l-35-60.63A26,26,0,0,1,46.66,108.6l-4-6.94A26,26,0,0,1,61,63,26,26,0,0,1,72.39,31.63a26,26,0,0,1,30.81,3.58A26,26,0,0,1,147.08,37l12,20.79a26,26,0,0,1,43.17,2.78Zm-27.68,91.08A63.65,63.65,0,0,0,187.19,136l-19-32.91a10,10,0,0,0-17.75,9.18L161.86,132A8,8,0,1,1,148,140L113,79.53A10,10,0,0,0,95.63,89.4L120.25,132a8,8,0,1,1-13.85,8L73.83,83.66a10,10,0,1,0-17.32,10l16,27.72,20,34.64a8,8,0,1,1-13.86,8l-20-34.64a10,10,0,0,0-17.32,10l35,60.63a64,64,0,0,0,117.25-15.44Z" />
    </_Svg>
  )
}

Icon.displayName = 'HandsClappingFill'

export const HandsClappingFill = memo<IconProps>(themed(Icon))
