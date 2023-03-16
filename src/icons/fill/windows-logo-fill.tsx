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
      <_Path d="M112,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,32,184V144a8,8,0,0,1,8-8h64A8,8,0,0,1,112,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86Z" />
    </_Svg>
  )
}

Icon.displayName = 'WindowsLogoFill'

export const WindowsLogoFill = memo<IconProps>(themed(Icon))
