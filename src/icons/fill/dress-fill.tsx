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
      <_Path d="M66.26,80.23a15.26,15.26,0,0,1-1.65-12.17,15.54,15.54,0,0,1,2-4.76L88,32.7V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,104,8.27V32.42L109.25,39a23.91,23.91,0,0,0,19.13,9,24.67,24.67,0,0,0,18.71-9.43L152,32.42V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,168,8.27V32.7l21.42,30.6a15.54,15.54,0,0,1,2,4.76,15.26,15.26,0,0,1-1.65,12.17,1.74,1.74,0,0,0-.11.18l-13.85,21.74A4,4,0,0,1,172.4,104H83.6a4,4,0,0,1-3.38-1.85L66.37,80.41A1.74,1.74,0,0,0,66.26,80.23Zm148.5,129.56a2.52,2.52,0,0,0-.15-.34L173.69,122.3a4,4,0,0,0-3.63-2.3H85.94a4,4,0,0,0-3.63,2.3L41.39,209.45a2.52,2.52,0,0,0-.15.34A16.19,16.19,0,0,0,41.6,223,16,16,0,0,0,56,232H200a16,16,0,0,0,14.39-9A16.19,16.19,0,0,0,214.76,209.79Z" />
    </_Svg>
  )
}

Icon.displayName = 'DressFill'

export const DressFill = memo<IconProps>(themed(Icon))
