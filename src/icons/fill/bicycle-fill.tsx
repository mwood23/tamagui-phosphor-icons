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
      <_Path d="M256,160a48,48,0,1,1-78.7-36.8L201.1,164a8,8,0,1,0,13.8-8l-23.8-40.9A47,47,0,0,1,208,112,48,48,0,0,1,256,160ZM48,168a8.2,8.2,0,0,1-4.7-1.5,8,8,0,0,1-1.8-11.2l27.9-38.2A46.6,46.6,0,0,0,48,112a48.1,48.1,0,1,0,34.3,14.5L54.5,164.7A7.9,7.9,0,0,1,48,168ZM165.9,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24.1,24.1,0,0,0-24-24H152a7.8,7.8,0,0,0-6.9,4,7.7,7.7,0,0,0,0,8l11.6,20H99.3L82.9,60A7.9,7.9,0,0,0,76,56H48a8,8,0,0,0,0,16H71.4L85.1,95.5,69.4,117.1a48.1,48.1,0,0,1,12.9,9.4l11.6-15.9L125.1,164a8,8,0,1,0,13.8-8l-30.3-52h57.5l11.2,19.2a46.5,46.5,0,0,1,13.8-8.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'BicycleFill'

export const BicycleFill = memo<IconProps>(themed(Icon))
