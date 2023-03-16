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
      <_Path d="M254.07,114.79,208.53,61.73A16,16,0,0,0,196.26,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8,8,0,0,0,254.07,114.79ZM32,112V72H88v40Zm48,96a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm80-96H104V72h56Zm32,96a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm-16-96V72h20.26l34.33,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'VanFill'

export const VanFill = memo<IconProps>(themed(Icon))
