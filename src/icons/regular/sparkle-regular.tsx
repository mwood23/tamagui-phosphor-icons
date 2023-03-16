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
        d="M80.84,170.47l-51.66-19a7.92,7.92,0,0,1,0-14.86l51.66-19a7.88,7.88,0,0,0,4.69-4.69l19-51.66a7.92,7.92,0,0,1,14.86,0l19,51.66a7.88,7.88,0,0,0,4.69,4.69l51.66,19a7.92,7.92,0,0,1,0,14.86l-51.66,19a7.88,7.88,0,0,0-4.69,4.69l-19,51.66a7.92,7.92,0,0,1-14.86,0l-19-51.66A7.88,7.88,0,0,0,80.84,170.47Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="176"
        y1="16"
        x2="176"
        y2="64"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="224"
        y1="72"
        x2="224"
        y2="104"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="152"
        y1="40"
        x2="200"
        y2="40"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="208"
        y1="88"
        x2="240"
        y2="88"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SparkleRegular'

export const SparkleRegular = memo<IconProps>(themed(Icon))
