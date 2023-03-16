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
      <_Path d="M120,160v48a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H92.69L64.4,171.72A55.67,55.67,0,0,1,48,132.12V95a32,32,0,1,1,16,0v37.13A39.71,39.71,0,0,0,75.72,160.4L104,188.69V160a8,8,0,0,1,16,0Zm88,1V123.88a55.67,55.67,0,0,0-16.4-39.6L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L180.28,95.6A39.71,39.71,0,0,1,192,123.88V161a32,32,0,1,0,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'GitDiffFill'

export const GitDiffFill = memo<IconProps>(themed(Icon))
