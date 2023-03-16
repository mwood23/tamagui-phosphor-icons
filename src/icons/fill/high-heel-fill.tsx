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
      <_Path d="M88,172.18V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V156a4,4,0,0,1,4-4h4a95.27,95.27,0,0,1,54.26,16.88l0,0A3.93,3.93,0,0,1,88,172.18Zm143-8L180,152.7,69.66,42.34a8,8,0,0,0-8.45-1.85A8.37,8.37,0,0,0,58,42.73C36.06,66.75,24,97,24,128v4a4,4,0,0,0,4,4h4a111.06,111.06,0,0,1,56,15.06l0,0c2.48,1.45,4.91,3,7.3,4.62a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,216H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,164.19Z" />
    </_Svg>
  )
}

Icon.displayName = 'HighHeelFill'

export const HighHeelFill = memo<IconProps>(themed(Icon))
