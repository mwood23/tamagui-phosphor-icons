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
      <_Path d="M80,120v16a16,16,0,0,1-16,16V104A16,16,0,0,1,80,120ZM248,72V184a16,16,0,0,1-16,16H24A16,16,0,0,1,8,184V72A16,16,0,0,1,24,56H232A16,16,0,0,1,248,72ZM96,120A32,32,0,0,0,64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32Zm32,0V104h16a8,8,0,0,0,0-16H120a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h24a8,8,0,0,0,0-16H128V136h8a8,8,0,0,0,0-16Zm82.17-31.7a8,8,0,0,0-9.87,5.53L190,130.45,179.7,93.83a8,8,0,0,0-15.4,4.34l18,64a8,8,0,0,0,15.4,0l18-64A8,8,0,0,0,210.17,88.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'DevToLogoFill'

export const DevToLogoFill = memo<IconProps>(themed(Icon))
