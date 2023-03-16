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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-64,88a8,8,0,0,1,0,16h-8v24a16,16,0,0,0,16,16h8a8,8,0,0,1,0,16h-8a31.92,31.92,0,0,1-24-10.87A31.92,31.92,0,0,1,104,192H96a8,8,0,0,1,0-16h8a16,16,0,0,0,16-16V136h-8a8,8,0,0,1,0-16h8V96a16,16,0,0,0-16-16H96a8,8,0,0,1,0-16h8a31.92,31.92,0,0,1,24,10.87A31.92,31.92,0,0,1,152,64h8a8,8,0,0,1,0,16h-8a16,16,0,0,0-16,16v24Z" />
    </_Svg>
  )
}

Icon.displayName = 'CursorTextFill'

export const CursorTextFill = memo<IconProps>(themed(Icon))
