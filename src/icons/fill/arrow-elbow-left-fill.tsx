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
      <_Path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L60,127.31,29.66,157.66A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,5.66,13.66L71.31,116,136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowElbowLeftFill'

export const ArrowElbowLeftFill = memo<IconProps>(themed(Icon))
