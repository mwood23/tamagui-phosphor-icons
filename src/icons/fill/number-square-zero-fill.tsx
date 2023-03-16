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
      <_Path d="M156,128c0,14.86-5.9,40-28,40s-28-25.14-28-40,5.9-40,28-40S156,113.14,156,128Zm68-80V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-52,80c0-14.25-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72s-26,6.44-34,18.61c-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.17,19.74,18.61,34,18.61s26-6.44,34-18.61C168.44,155.53,172,142.25,172,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'NumberSquareZeroFill'

export const NumberSquareZeroFill = memo<IconProps>(themed(Icon))
