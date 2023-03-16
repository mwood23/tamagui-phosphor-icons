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
      <_Path d="M239.81,99.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,220.67,16,164,16,94a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,62a8,8,0,0,0,0,11.31l32.53,32.53L111,127a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,67.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,32C214.73,32.23,242.59,63.29,239.81,99.5Z" />
    </_Svg>
  )
}

Icon.displayName = 'HeartBreakFill'

export const HeartBreakFill = memo<IconProps>(themed(Icon))
