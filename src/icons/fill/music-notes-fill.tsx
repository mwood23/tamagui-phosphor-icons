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
      <_Path d="M212.92,25.71a7.89,7.89,0,0,0-6.86-1.46l-128,32A8,8,0,0,0,72,64V174.1A36,36,0,1,0,88,204V110.25l112-28V142.1A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.71Z" />
    </_Svg>
  )
}

Icon.displayName = 'MusicNotesFill'

export const MusicNotesFill = memo<IconProps>(themed(Icon))
