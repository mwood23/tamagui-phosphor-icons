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
        d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="110.55"
        y1="152"
        x2="34.47"
        y2="205.74"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="221.53"
        y1="205.74"
        x2="145.45"
        y2="152"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="224 96 145.46 152 110.55 152 32 96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'EnvelopeOpenRegular'

export const EnvelopeOpenRegular = memo<IconProps>(themed(Icon))
