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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM80,72h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16ZM200,176a8,8,0,0,1-8,8H168a32,32,0,0,1-32-32V128H119.48a64.31,64.31,0,0,1-54.35,55.35,7.28,7.28,0,0,1-1.14.08,8,8,0,0,1-1.12-15.92A48.23,48.23,0,0,0,103.31,128H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16H152v24a16,16,0,0,0,16,16h16v-8a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyCnyFill'

export const CurrencyCnyFill = memo<IconProps>(themed(Icon))
