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
      <_Path d="M32,80a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H40A8,8,0,0,1,32,80Zm184,88H192V152a8,8,0,0,0-8-8H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V184h24a8,8,0,0,0,0-16Zm-80,0H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm-32-56h16a8,8,0,0,0,8-8V88h88a8,8,0,0,0,0-16H128V56a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v48A8,8,0,0,0,104,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'FadersHorizontalFill'

export const FadersHorizontalFill = memo<IconProps>(themed(Icon))
