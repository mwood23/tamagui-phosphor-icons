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
        d="M41.85,147.24a8,8,0,0,0-1.66,6.86l12.36,55.63a8,8,0,0,0,12.81,4.51L94.81,192C76.7,161.43,71,134.25,72.16,110.91Z"
        opacity="0.2"
      />
      <_Path
        d="M183.84,110.91c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63a8,8,0,0,0-1.66-6.86Z"
        opacity="0.2"
      />
      <_Line
        x1="144"
        y1="224"
        x2="112"
        y2="224"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="100" r="12" fill={`${color}`} />
      <_Path
        d="M94.81,192C37.52,95.32,103.87,32.53,123.09,17.68a8,8,0,0,1,9.82,0C152.13,32.53,218.48,95.32,161.19,192Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M183.84,110.88l30.31,36.36a8,8,0,0,1,1.66,6.86l-12.36,55.63a8,8,0,0,1-12.81,4.51L161.19,192"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M72.16,110.88,41.85,147.24a8,8,0,0,0-1.66,6.86l12.36,55.63a8,8,0,0,0,12.81,4.51L94.81,192"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'RocketDuotone'

export const RocketDuotone = memo<IconProps>(themed(Icon))
