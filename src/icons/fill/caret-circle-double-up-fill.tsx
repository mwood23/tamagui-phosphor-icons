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
      <_Path d="M201.58,201.57a104,104,0,1,0-147.15,0A104.17,104.17,0,0,0,201.58,201.57Zm-99.93-83.92a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,1,1-11.32,11.32L128,91.29Zm0,56a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,147.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'CaretCircleDoubleUpFill'

export const CaretCircleDoubleUpFill = memo<IconProps>(themed(Icon))
