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
      <_Polygon
        points="216 216 136 201.46 136 201.46 136 144 216 144 216 216"
        opacity="0.2"
      />
      <_Polygon
        points="104 195.64 40 184 40 144 104 144 104 195.64"
        opacity="0.2"
      />
      <_Polygon
        points="216 40 136 54.55 136 54.55 136 112 216 112 216 40"
        opacity="0.2"
      />
      <_Polygon
        points="104 60.36 40 72 40 112 104 112 104 60.36"
        opacity="0.2"
      />
      <_Polygon
        points="216 216 136 201.46 136 201.46 136 144 216 144 216 216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polygon
        points="104 195.64 40 184 40 144 104 144 104 195.64"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polygon
        points="216 40 136 54.55 136 54.55 136 112 216 112 216 40"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polygon
        points="104 60.36 40 72 40 112 104 112 104 60.36"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'WindowsLogoDuotone'

export const WindowsLogoDuotone = memo<IconProps>(themed(Icon))
