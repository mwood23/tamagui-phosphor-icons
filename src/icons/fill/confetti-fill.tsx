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
      <_Path d="M110.5,51.2a15.7,15.7,0,0,0-14.7-4.3A16,16,0,0,0,84.2,57.1L30.3,205.2h0a16.1,16.1,0,0,0,15,21.4,17.1,17.1,0,0,0,5.5-.9l148.1-53.9a16,16,0,0,0,10.2-11.6,15.7,15.7,0,0,0-4.3-14.7ZM63.8,159.8,83,107l66,66L96.2,192.2ZM160,72a38.2,38.2,0,0,1,3.8-15.6C169.1,45.8,179.1,40,192,40c6.7,0,11-2.3,13.7-7.2a22.3,22.3,0,0,0,2.3-8.9,7.9,7.9,0,0,1,8-7.9,8,8,0,0,1,8,8c0,12.9-8.5,32-32,32-6.7,0-11,2.3-13.7,7.2a22.3,22.3,0,0,0-2.3,8.9,7.9,7.9,0,0,1-8,7.9A8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.7,82.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-16-16a8.1,8.1,0,0,1,11.4-11.4Zm4.8-42.7-24,8a7.3,7.3,0,0,1-2.5.4,8,8,0,0,1-2.5-15.6l24-8a8,8,0,0,1,5,15.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'ConfettiFill'

export const ConfettiFill = memo<IconProps>(themed(Icon))
