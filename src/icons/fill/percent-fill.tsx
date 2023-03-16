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
      <_Path d="M176,172a12,12,0,1,1-12-12A12,12,0,0,1,176,172ZM92,96A12,12,0,1,0,80,84,12,12,0,0,0,92,96ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM64,84A28,28,0,1,0,92,56,28,28,0,0,0,64,84Zm128,88a28,28,0,1,0-28,28A28,28,0,0,0,192,172ZM189.66,66.34a8,8,0,0,0-11.32,0l-112,112a8,8,0,0,0,11.32,11.32l112-112A8,8,0,0,0,189.66,66.34Z" />
    </_Svg>
  )
}

Icon.displayName = 'PercentFill'

export const PercentFill = memo<IconProps>(themed(Icon))
