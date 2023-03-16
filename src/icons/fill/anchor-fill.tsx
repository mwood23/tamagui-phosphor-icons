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
      <_Path d="M224,144a56.06,56.06,0,0,1-56,56,32,32,0,0,0-32,32,8,8,0,0,1-16,0,32,32,0,0,0-32-32,56.06,56.06,0,0,1-56-56,8,8,0,0,1,16,0,40,40,0,0,0,40,40,47.79,47.79,0,0,1,32,12.27V128H88a8,8,0,0,1,0-16h32V82.83a28,28,0,1,1,16,0V112h32a8,8,0,0,1,0,16H136v68.27A47.79,47.79,0,0,1,168,184a40,40,0,0,0,40-40,8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'AnchorFill'

export const AnchorFill = memo<IconProps>(themed(Icon))
