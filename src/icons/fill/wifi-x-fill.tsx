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
      <_Path d="M229.51,98.13a8.21,8.21,0,0,1,.61,11.1,8,8,0,0,1-11.72.43L200.05,91.31l-18.34,18.35a8,8,0,0,1-11.72-.43,8.21,8.21,0,0,1,.61-11.1L188.74,80,170.63,61.89a8.21,8.21,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18l18.34,18.35L218.4,50.34a8,8,0,0,1,11.49.18,8.21,8.21,0,0,1-.41,11.37L211.37,80ZM212,124.71a23.89,23.89,0,0,1-4.86-3.74l-4.21-4.2a4,4,0,0,0-5.65,0L193,121a24,24,0,0,1-34.21-.26c-9.19-9.48-8.69-24.73.65-34.06l3.81-3.82a4,4,0,0,0,0-5.66L159.06,73a24,24,0,0,1,.06-34h0a2.78,2.78,0,0,0-1.52-4.71A191.86,191.86,0,0,0,128,32,186.77,186.77,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8L115.72,218.23A15.93,15.93,0,0,0,128,224h0a16,16,0,0,0,12.31-5.77l72.6-87.5A4,4,0,0,0,212,124.71Z" />
    </_Svg>
  )
}

Icon.displayName = 'WifiXFill'

export const WifiXFill = memo<IconProps>(themed(Icon))
