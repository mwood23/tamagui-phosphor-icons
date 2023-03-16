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
      <_Path d="M182.07,210.79A8,8,0,0,1,176,224H80a8,8,0,0,1-6.07-13.21l48-56a8,8,0,0,1,12.15,0ZM208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H60.26a4,4,0,0,0,3-1.4l46.48-54.22a24,24,0,0,1,36.44,0L192.7,198.6a4,4,0,0,0,3,1.4H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'AirplayFill'

export const AirplayFill = memo<IconProps>(themed(Icon))
