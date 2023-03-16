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
      <_Path d="M232,56a8,8,0,0,1-8,8H208V80a8,8,0,0,1-16,0V64H176a8,8,0,0,1,0-16h16V32a8,8,0,0,1,16,0V48h16A8,8,0,0,1,232,56Zm-24,56a8,8,0,0,0-8,8v22.08A36,36,0,1,0,216,172V120A8,8,0,0,0,208,112Zm-54.42-10.67a8,8,0,0,0,2.76-9.88,8.11,8.11,0,0,0-1.1-1.79,55.78,55.78,0,0,1-11-39A8,8,0,0,0,137,42a7.9,7.9,0,0,0-2.61.21L78.06,56.24A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V118.25l62.82-15.71A8.06,8.06,0,0,0,153.58,101.33Z" />
    </_Svg>
  )
}

Icon.displayName = 'MusicNotesPlusFill'

export const MusicNotesPlusFill = memo<IconProps>(themed(Icon))
