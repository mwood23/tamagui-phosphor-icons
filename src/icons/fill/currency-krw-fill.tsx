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
      <_Path d="M128,110.78,134.46,128H121.54ZM92,161.22,98.46,144H85.54ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,8a8,8,0,0,0-8-8H193.54l14-37.19a8,8,0,0,0-15-5.62l-16,42.81H151.54l-16-42.81a8,8,0,0,0-15,0L104.46,128H79.54L63.49,85.19a8,8,0,1,0-15,5.62l14,37.19H48a8,8,0,0,0,0,16H68.46l16.05,42.81a8,8,0,0,0,15,0L115.54,144h24.92l16,42.81a8,8,0,0,0,15,0l16-42.81H208A8,8,0,0,0,216,136Zm-52,25.22L170.46,144H157.54Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyKrwFill'

export const CurrencyKrwFill = memo<IconProps>(themed(Icon))
