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
      <_Path d="M48,120H208a8,8,0,0,0,8-8V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM152,44l44,44H152ZM60,144H44a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H52V160h8a12,12,0,0,1,0,24Zm164,16.87a8,8,0,0,1-2.22,5.53A30.06,30.06,0,0,1,200,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.45,29.45,0,0,1,16.48,5.11,8,8,0,0,1-9,13.27A13.21,13.21,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.57,13.57,0,0,0,8-2.72V192a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8ZM156,152v56a8,8,0,0,1-5.56,7.62A7.91,7.91,0,0,1,148,216a8,8,0,0,1-6.51-3.35L116,177v31a8,8,0,0,1-16,0V152a8,8,0,0,1,14.51-4.65L140,183V152a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'FilePngFill'

export const FilePngFill = memo<IconProps>(themed(Icon))
