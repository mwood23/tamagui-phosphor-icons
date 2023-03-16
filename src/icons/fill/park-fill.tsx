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
      <_Path d="M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-128,0H64V176h40Zm0-32H64V144h40Zm12-64A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z" />
    </_Svg>
  )
}

Icon.displayName = 'ParkFill'

export const ParkFill = memo<IconProps>(themed(Icon))
