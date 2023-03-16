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
      <_Polyline
        points="176 80 200 104 224 80"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="200"
        y1="48"
        x2="200"
        y2="104"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M32,48H84.5a8,8,0,0,1,5.88,2.57l91.24,98.86A8,8,0,0,0,187.5,152H224a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H171.5a8,8,0,0,1-5.88-2.57L74.38,106.57A8,8,0,0,0,68.5,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'EscalatorDownLight'

export const EscalatorDownLight = memo<IconProps>(themed(Icon))
