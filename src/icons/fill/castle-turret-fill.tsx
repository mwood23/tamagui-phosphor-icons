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
      <_Path d="M200,24h-8a16,16,0,0,0-16,16V56H148V40a16,16,0,0,0-16-16h-8a16,16,0,0,0-16,16V56H80V40A16,16,0,0,0,64,24H56A16,16,0,0,0,40,40V84.69A15.86,15.86,0,0,0,44.69,96L56,107.31V216a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V107.31L211.31,96A15.86,15.86,0,0,0,216,84.69V40A16,16,0,0,0,200,24ZM152,216H104V152a24,24,0,0,1,48,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'CastleTurretFill'

export const CastleTurretFill = memo<IconProps>(themed(Icon))
