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
      <_Path d="M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,13.66-5.66L61.72,58.41C81.87,41.1,104.64,32,128,32c42.82,0,68.58,25.27,69.66,26.34a8,8,0,0,1-11.3,11.34C186.13,69.44,164,48,128,48c-23.17,0-41.92,10.85-54.92,21.76L93.66,90.34A8,8,0,0,1,88,104Zm128,48H168a8,8,0,0,0-5.66,13.66l20.58,20.58C169.92,197.15,151.17,208,128,208c-35.84,0-58-21.32-58.36-21.67a8,8,0,0,0-11.3,11.33C59.42,198.73,85.18,224,128,224c23.36,0,46.13-9.1,66.28-26.41l16.06,16.07A8,8,0,0,0,224,208V160A8,8,0,0,0,216,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsCounterClockwiseFill'

export const ArrowsCounterClockwiseFill = memo<IconProps>(themed(Icon))
