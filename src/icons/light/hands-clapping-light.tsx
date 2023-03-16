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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Path
        d="M155,136,120,75.51a18,18,0,1,0-31.18,18"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="176"
        y1="8"
        x2="176"
        y2="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="216"
        y1="21.02"
        x2="208"
        y2="34.13"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="243.66"
        y1="56"
        x2="228.62"
        y2="60.85"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M170.77,94,140.16,41A18,18,0,1,0,109,59"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M201.55,185.73a72,72,0,0,0,12.79-88.25l-19-32.91a18,18,0,0,0-31.18,18"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M115.59,70.44l-7.4-12.82L101,45.15a18,18,0,1,0-31.18,18l6.61,11.44"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M85.59,160l-20-34.63a18,18,0,1,0-31.18,18l35,60.62a72,72,0,0,0,124.71-72l-19-32.91a18,18,0,1,0-31.17,18"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M113.33,136,88,92.12l-7.2-12.47a18,18,0,1,0-31.18,18l16,27.72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'HandsClappingLight'

export const HandsClappingLight = memo<IconProps>(themed(Icon))
