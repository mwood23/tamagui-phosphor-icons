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
      <_Path d="M51.18,145.51A95.5,95.5,0,0,1,32,88c0-1.41,0-2.81.09-4.21a4,4,0,0,1,4-3.79H107a4,4,0,0,1,2.83,6.83ZM120,183.66V99.31L61.83,157.49A95.68,95.68,0,0,0,120,183.66Zm84.82-38.15A95.5,95.5,0,0,0,224,88c0-1.41,0-2.81-.09-4.21a4,4,0,0,0-4-3.79H149a4,4,0,0,0-2.83,6.83ZM248,80h-4.08a4,4,0,0,0-4,4.14c0,1.28.07,2.57.07,3.86A112,112,0,0,1,16,88c0-1.29,0-2.58.07-3.86a4,4,0,0,0-4-4.14H8a8,8,0,0,0-8,8,128,128,0,1,0,256,0A8,8,0,0,0,248,80ZM136,99.31v84.35a95.68,95.68,0,0,0,58.17-26.17Z" />
    </_Svg>
  )
}

Icon.displayName = 'OrangeSliceFill'

export const OrangeSliceFill = memo<IconProps>(themed(Icon))
