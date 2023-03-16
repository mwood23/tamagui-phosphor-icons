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
      <_Line
        x1="224"
        y1="56"
        x2="176"
        y2="104"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="224"
        y1="104"
        x2="176"
        y2="56"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M224,104,165.23,45.23A7.94,7.94,0,0,0,161.06,43,181.82,181.82,0,0,0,128,40,179.58,179.58,0,0,0,19.11,76.48,7.79,7.79,0,0,0,17.8,87.69L121.85,213.12a8,8,0,0,0,12.3,0l90.24-108.78Z"
        opacity="0.2"
      />
      <_Path
        d="M144,40.7q-7.91-.69-16-.7A179.58,179.58,0,0,0,19.11,76.48,7.79,7.79,0,0,0,17.8,87.69L121.85,213.12a8,8,0,0,0,12.3,0l64-77.12"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'WifiXDuotone'

export const WifiXDuotone = memo<IconProps>(themed(Icon))
