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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM134.86,46.86a8,8,0,0,1,11.32,0l45.25,45.26a8,8,0,0,1-11.31,11.31L134.86,58.18A8,8,0,0,1,134.86,46.86ZM100.18,98.77a8,8,0,0,1,10.45-4.33l59.13,24.49a8,8,0,0,1-3.06,15.4,7.89,7.89,0,0,1-3.06-.62l-59.13-24.49A8,8,0,0,1,100.18,98.77ZM96,152h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm104,40a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v40H184V144a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'StackOverflowLogoFill'

export const StackOverflowLogoFill = memo<IconProps>(themed(Icon))
