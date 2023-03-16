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
      <_Path d="M224,48H168a32,32,0,0,0-32,32v88a8,8,0,0,1-16,0V80A32,32,0,0,0,88,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,168H168a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H168a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H168a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'BookOpenTextFill'

export const BookOpenTextFill = memo<IconProps>(themed(Icon))
