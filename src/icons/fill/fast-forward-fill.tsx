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
      <_Path d="M248,128a15.76,15.76,0,0,1-7.33,13.34L152.48,197.5A15.91,15.91,0,0,1,128,184.16v-37.3L48.48,197.5A15.91,15.91,0,0,1,24,184.16V71.84A15.91,15.91,0,0,1,48.48,58.5L128,109.14V71.84A15.91,15.91,0,0,1,152.48,58.5l88.19,56.16A15.76,15.76,0,0,1,248,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'FastForwardFill'

export const FastForwardFill = memo<IconProps>(themed(Icon))
