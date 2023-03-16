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
      <_Path d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135ZM130.44,147.85a20,20,0,1,1,17.41-22.29A20,20,0,0,1,130.44,147.85Z" />
    </_Svg>
  )
}

Icon.displayName = 'FanFill'

export const FanFill = memo<IconProps>(themed(Icon))
