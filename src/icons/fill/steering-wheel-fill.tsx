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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'SteeringWheelFill'

export const SteeringWheelFill = memo<IconProps>(themed(Icon))
