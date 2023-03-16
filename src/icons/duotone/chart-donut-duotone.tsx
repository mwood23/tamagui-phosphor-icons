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
        d="M128,168a40,40,0,0,0,6.55-79.47A7.92,7.92,0,0,1,128,80.67V40a8,8,0,0,1,8.67-8c49.4,4.43,88,46.62,87.32,97.34-.72,51.7-42.92,93.9-94.62,94.62H128Z"
        opacity="0.2"
      />
      <_Line
        x1="128"
        y1="224"
        x2="128"
        y2="168"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="32"
        y1="128"
        x2="88"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M94.55,104.76c-5.06,7.08-7,15.86-6.5,25.32a40,40,0,1,0,46.5-41.55A7.92,7.92,0,0,1,128,80.67V40a8,8,0,0,1,8.67-8c49.4,4.43,88,46.62,87.32,97.34-.72,51.7-42.92,93.9-94.62,94.62A96,96,0,0,1,32,128,94.8,94.8,0,0,1,54.2,66.9,8,8,0,0,1,66,66.34l27.6,28.2A8,8,0,0,1,94.55,104.76Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'ChartDonutDuotone'

export const ChartDonutDuotone = memo<IconProps>(themed(Icon))
