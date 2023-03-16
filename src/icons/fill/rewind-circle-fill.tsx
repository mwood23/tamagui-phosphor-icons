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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,132a8,8,0,0,1-12.59,6.55l-40-28A8,8,0,0,1,120,128v28a8,8,0,0,1-12.59,6.55l-40-28a8,8,0,0,1,0-13.1l40-28A8,8,0,0,1,120,100v28a8,8,0,0,1,3.41-6.55l40-28A8,8,0,0,1,176,100Z" />
    </_Svg>
  )
}

Icon.displayName = 'RewindCircleFill'

export const RewindCircleFill = memo<IconProps>(themed(Icon))
