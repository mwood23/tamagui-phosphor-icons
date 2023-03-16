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
      <_Path d="M208,89.37V88A80,80,0,0,0,48,88v1.37A24,24,0,0,0,56,136h3.36l61.69,108a8,8,0,0,0,13.9,0l61.69-108H200a24,24,0,0,0,8-46.63ZM128,223.88,77.79,136H97.07l40.57,71Zm18.86-33L115.5,136h19.29l21.71,38Zm18.85-33L153.21,136h25Z" />
    </_Svg>
  )
}

Icon.displayName = 'IceCreamFill'

export const IceCreamFill = memo<IconProps>(themed(Icon))
