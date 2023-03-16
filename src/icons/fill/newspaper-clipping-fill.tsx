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
      <_Path d="M72,104h32v48H72ZM232,56V216a8,8,0,0,1-11.58,7.15L192,208.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,208.94,99.58,223.15a8,8,0,0,1-7.16,0L64,208.94,35.58,223.15A8,8,0,0,1,24,216V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Zm80,48a8,8,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8,8,0,0,0,200,144Zm0-32a8,8,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8,8,0,0,0,200,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'NewspaperClippingFill'

export const NewspaperClippingFill = memo<IconProps>(themed(Icon))
