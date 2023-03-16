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
      <_Path d="M128,24a96.11,96.11,0,0,0-96,96v96a8,8,0,0,0,13.07,6.19l24.26-19.85L93.6,222.19a8,8,0,0,0,10.13,0L128,202.34l24.27,19.85a8,8,0,0,0,10.13,0l24.27-19.85,24.26,19.85A8,8,0,0,0,224,216V120A96.11,96.11,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'GhostFill'

export const GhostFill = memo<IconProps>(themed(Icon))
