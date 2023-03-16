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
      <_Path d="M207,32H49A17,17,0,0,0,32,49V98.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,113.68a17,17,0,0,0,10-15.47V49A17,17,0,0,0,207,32ZM96,48h64v72.67l-32,14.54L96,120.67Zm32,168a32,32,0,1,1,32-32A32,32,0,0,1,128,216Z" />
    </_Svg>
  )
}

Icon.displayName = 'MedalMilitaryFill'

export const MedalMilitaryFill = memo<IconProps>(themed(Icon))
