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
      <_Path d="M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z" />
    </_Svg>
  )
}

Icon.displayName = 'MagnetStraightFill'

export const MagnetStraightFill = memo<IconProps>(themed(Icon))
