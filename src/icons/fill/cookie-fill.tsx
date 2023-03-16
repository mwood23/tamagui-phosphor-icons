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
      <_Path d="M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z" />
    </_Svg>
  )
}

Icon.displayName = 'CookieFill'

export const CookieFill = memo<IconProps>(themed(Icon))
