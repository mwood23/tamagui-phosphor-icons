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
      <_Path d="M144,48a32,32,0,1,1,32,32A32,32,0,0,1,144,48Zm16,112a8,8,0,0,0-8,8,48,48,0,1,1-48-48,8,8,0,0,0,0-16,64,64,0,1,0,64,64A8,8,0,0,0,160,160Zm40-32H141.82l17.12-29.78a8,8,0,0,0-2.57-10.69A96,96,0,0,0,42.91,94a8,8,0,1,0,10.18,12.33,80.09,80.09,0,0,1,88-9.17L121.06,132A8,8,0,0,0,128,144h62.24l-14.08,70.43a8,8,0,0,0,6.27,9.41A7.77,7.77,0,0,0,184,224a8,8,0,0,0,7.83-6.43l16-80A8,8,0,0,0,200,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'WheelchairMotionFill'

export const WheelchairMotionFill = memo<IconProps>(themed(Icon))
