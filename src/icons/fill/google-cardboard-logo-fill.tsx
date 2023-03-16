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
      <_Path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,203.31l21.17-21.17a4,4,0,0,1,5.66,0L152,203.32A15.89,15.89,0,0,0,163.31,208H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'GoogleCardboardLogoFill'

export const GoogleCardboardLogoFill = memo<IconProps>(themed(Icon))
