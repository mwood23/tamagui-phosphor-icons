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
      <_Line
        x1="208"
        y1="16"
        x2="240"
        y2="48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="176"
        y1="56"
        x2="200"
        y2="80"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Path
        d="M60.07,112a16.23,16.23,0,0,0,14.72-10A34.21,34.21,0,0,1,82.4,90.4c17.23-17.23,49.82-12.57,72.8,10.4s27.63,55.57,10.4,72.8a34.21,34.21,0,0,1-11.66,7.61,16.23,16.23,0,0,0-10,14.72C143.56,208,139.39,219,131.2,227.2,110,248.4,69.88,242.67,41.6,214.4S7.6,146,28.8,124.8C37,116.61,48,112.44,60.07,112Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="56"
        y1="168"
        x2="88"
        y2="200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Circle
        cx="112"
        cy="144"
        r="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="112"
        y1="120"
        x2="212"
        y2="20"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="136"
        y1="144"
        x2="236"
        y2="44"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </_Svg>
  )
}

Icon.displayName = 'GuitarThin'

export const GuitarThin = memo<IconProps>(themed(Icon))
