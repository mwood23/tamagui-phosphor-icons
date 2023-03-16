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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm64.12,133.14a8,8,0,0,1-8.24,13.72L136,142.13V194a8,8,0,0,1-16,0V142.13L72.12,170.86a8,8,0,0,1-8.24-13.72L112.45,128,63.88,98.86a8,8,0,0,1,8.24-13.72L120,113.87V62a8,8,0,0,1,16,0v51.87l47.88-28.73a8,8,0,1,1,8.24,13.72L143.55,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'AsteriskFill'

export const AsteriskFill = memo<IconProps>(themed(Icon))
