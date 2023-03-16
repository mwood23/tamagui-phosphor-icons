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
      <_Path d="M256,112v64a8,8,0,0,1-16,0V152H224v16a16,16,0,0,1-16,16H195.31L160,219.31A15.86,15.86,0,0,1,148.69,224H83.31A15.86,15.86,0,0,1,72,219.31L36.69,184A15.86,15.86,0,0,1,32,172.69V152H16v24a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0v24H32V80A16,16,0,0,1,48,64h64V48H88a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16H128V64h20.69A15.86,15.86,0,0,1,160,68.69L195.31,104H208a16,16,0,0,1,16,16v16h16V112a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'EngineFill'

export const EngineFill = memo<IconProps>(themed(Icon))
