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
      <_Path d="M232,132a103.63,103.63,0,0,1-27.36,70.23c-3.26,3.55-8.92-.59-6.43-4.71A95.41,95.41,0,0,0,212,148a80.1,80.1,0,0,0-80-80,64.07,64.07,0,0,0-64,64,48.05,48.05,0,0,0,48,48,32,32,0,0,0,32-32,7.38,7.38,0,0,0,0-.82A16,16,0,0,0,132.67,132,8.23,8.23,0,0,0,124,139.4a8,8,0,0,0,8,8.6,16,16,0,0,1-16,16,32,32,0,0,1-32-32,48.05,48.05,0,0,1,48-48,64.07,64.07,0,0,1,64,64,80.1,80.1,0,0,1-80,80c-74.16,0-92.77-68.55-92-98.81C25.5,73.73,70.94,28.84,126.41,28A104.12,104.12,0,0,1,232,132Z" />
    </_Svg>
  )
}

Icon.displayName = 'SpiralFill'

export const SpiralFill = memo<IconProps>(themed(Icon))
