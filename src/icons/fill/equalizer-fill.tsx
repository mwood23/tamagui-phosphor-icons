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
      <_Path d="M84,96a8,8,0,0,1-8,8H36a8,8,0,0,1,0-16H76A8,8,0,0,1,84,96Zm-8,24H36a8,8,0,0,0,0,16H76a8,8,0,0,0,0-16Zm0,32H36a8,8,0,0,0,0,16H76a8,8,0,0,0,0-16Zm0,32H36a8,8,0,0,0,0,16H76a8,8,0,0,0,0-16Zm72-64H108a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm0,32H108a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm0,32H108a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm72-96H180a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16ZM180,72h40a8,8,0,0,0,0-16H180a8,8,0,0,0,0,16Zm40,48H180a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm0,32H180a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm0,32H180a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" />
    </_Svg>
  )
}

Icon.displayName = 'EqualizerFill'

export const EqualizerFill = memo<IconProps>(themed(Icon))
