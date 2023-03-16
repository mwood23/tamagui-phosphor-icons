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
      <_Path d="M240,112H211.31L168,68.69A15.86,15.86,0,0,0,156.69,64H44.28A16,16,0,0,0,31,71.12L1.34,115.56A8.07,8.07,0,0,0,0,120v48a16,16,0,0,0,16,16H33a32,32,0,0,0,62,0h66a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V128A16,16,0,0,0,240,112ZM44.28,80H156.69l32,32H23ZM64,192a16,16,0,1,1,16-16A16,16,0,0,1,64,192Zm128,0a16,16,0,1,1,16-16A16,16,0,0,1,192,192Z" />
    </_Svg>
  )
}

Icon.displayName = 'CarProfileFill'

export const CarProfileFill = memo<IconProps>(themed(Icon))
