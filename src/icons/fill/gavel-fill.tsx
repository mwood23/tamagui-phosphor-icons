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
      <_Path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.62h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68ZM205.66,98.34l-48-48a8,8,0,0,0-11.31,0l-56,56a8,8,0,0,0,0,11.31L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l12.69,12.69a8,8,0,0,0,11.31,0l56-56A8,8,0,0,0,205.66,98.34Z" />
    </_Svg>
  )
}

Icon.displayName = 'GavelFill'

export const GavelFill = memo<IconProps>(themed(Icon))
