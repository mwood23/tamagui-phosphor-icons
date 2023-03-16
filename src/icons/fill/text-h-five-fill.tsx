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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm40-40a32,32,0,1,1-21.34,55.85,8,8,0,0,1,10.67-11.92,16,16,0,1,0,0-24,8,8,0,0,1-13.17-7.61l8-38A8,8,0,0,1,160,88h32a8,8,0,0,1,0,16H166.49L163,120.37A34.08,34.08,0,0,1,168,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextHFiveFill'

export const TextHFiveFill = memo<IconProps>(themed(Icon))
