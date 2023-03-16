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
      <_Rect
        x="50.75"
        y="44.69"
        width="106.51"
        height="38.63"
        rx="8"
        transform="translate(-14.79 92.28) rotate(-45)"
        opacity="0.2"
      />
      <_Rect
        x="138.75"
        y="132.69"
        width="106.51"
        height="38.63"
        rx="8"
        transform="translate(-51.24 180.28) rotate(-45)"
        opacity="0.2"
      />
      <_Rect
        x="50.75"
        y="44.69"
        width="106.51"
        height="38.63"
        rx="8"
        transform="translate(-14.79 92.28) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Rect
        x="138.75"
        y="132.69"
        width="106.51"
        height="38.63"
        rx="8"
        transform="translate(-51.24 180.28) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="145.66"
        y1="49.66"
        x2="206.34"
        y2="110.34"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="89.66"
        y1="105.66"
        x2="150.34"
        y2="166.34"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M132,148,61,219a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l71-71"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GavelDuotone'

export const GavelDuotone = memo<IconProps>(themed(Icon))
