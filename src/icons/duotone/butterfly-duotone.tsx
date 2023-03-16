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
      <_Path
        d="M208.93,48C177.64,48,128,95.8,128,127.67,128,95.8,78.36,48,47.07,48S22.79,87.84,30.88,119.71c7.86,30.94,29.31,32.71,37.36,32.23h1A36,36,0,1,0,128,180a36,36,0,1,0,58.72-28.06h1c8.05.48,29.5-1.29,37.36-32.23C233.21,87.84,240.22,48,208.93,48Z"
        opacity="0.2"
      />
      <_Line
        x1="128"
        y1="56"
        x2="128"
        y2="180"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M187.76,151.94c8.05.48,29.5-1.29,37.36-32.23C233.21,87.84,240.22,48,208.93,48S128,95.8,128,127.67C128,95.8,78.36,48,47.07,48S22.79,87.84,30.88,119.71c7.86,30.94,29.31,32.71,37.36,32.23"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M88,144a36.11,36.11,0,1,0,40,36,36,36,0,1,0,40-36"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'ButterflyDuotone'

export const ButterflyDuotone = memo<IconProps>(themed(Icon))
