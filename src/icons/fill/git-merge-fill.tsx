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
      <_Path d="M208,112a32.06,32.06,0,0,0-31,24H152a40.19,40.19,0,0,1-32-16L93.69,84.92A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V104l19.2,25.6A56.26,56.26,0,0,0,152,152h25a32,32,0,1,0,31-40ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,0,1-16-16V144a16,16,0,1,1,16,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'GitMergeFill'

export const GitMergeFill = memo<IconProps>(themed(Icon))
