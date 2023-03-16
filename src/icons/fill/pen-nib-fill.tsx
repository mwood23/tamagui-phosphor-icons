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
      <_Path d="M235.31,89.36,166.63,20.68a16,16,0,0,0-22.63,0L115.56,49.12l-58,21.76A16,16,0,0,0,47.36,83.23L26.59,207.83a4,4,0,0,0,6.77,3.49l57-57a23.85,23.85,0,0,1-2.29-12.08,24,24,0,1,1,13.6,23.4l-57,57a4,4,0,0,0,3.49,6.77l124.61-20.77a16,16,0,0,0,12.35-10.16l21.77-58.07L235.31,112a16,16,0,0,0,0-22.63ZM200,124.68,131.32,56l24-24L224,100.68Z" />
    </_Svg>
  )
}

Icon.displayName = 'PenNibFill'

export const PenNibFill = memo<IconProps>(themed(Icon))
