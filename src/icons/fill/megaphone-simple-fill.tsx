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
      <_Path d="M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM176,192H144V176.82L176,167Zm40-54-.11,0L144,160.08V79.91L215.89,102l.11,0v36Z" />
    </_Svg>
  )
}

Icon.displayName = 'MegaphoneSimpleFill'

export const MegaphoneSimpleFill = memo<IconProps>(themed(Icon))
