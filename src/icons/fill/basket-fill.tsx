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
      <_Path d="M236,85.46A16,16,0,0,0,224,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H32A16,16,0,0,0,16.14,98.11L30,202.12A16,16,0,0,0,45.87,216H210.13A16,16,0,0,0,226,202.12l13.87-104A16,16,0,0,0,236,85.46ZM81.6,184a7.44,7.44,0,0,1-.81,0,8,8,0,0,1-8-7.2l-5.6-56a8,8,0,0,1,15.92-1.6l5.6,56A8,8,0,0,1,81.6,184Zm54.4-8a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM89.63,80,128,36.15,166.37,80Zm99.13,40.8-5.6,56a8,8,0,0,1-7.95,7.2,7.44,7.44,0,0,1-.81,0,8,8,0,0,1-7.16-8.76l5.6-56a8,8,0,0,1,15.92,1.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'BasketFill'

export const BasketFill = memo<IconProps>(themed(Icon))
