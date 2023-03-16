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
      <_Path d="M221.06,110.63,208,106.27V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.27l-13.06,4.36A16,16,0,0,0,24,125.82V160.1a7.73,7.73,0,0,0,.31,2.19c15.72,55.09,86.12,74.06,100.07,77.3a16.19,16.19,0,0,0,7.24,0c13.95-3.24,84.35-22.21,100.07-77.3a7.73,7.73,0,0,0,.31-2.19V125.82A16,16,0,0,0,221.06,110.63ZM136,168a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm56-67.07L130.53,80.41a8,8,0,0,0-5.06,0L64,100.93V56H192Z" />
    </_Svg>
  )
}

Icon.displayName = 'BoatFill'

export const BoatFill = memo<IconProps>(themed(Icon))
