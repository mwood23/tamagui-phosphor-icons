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
      <_Path d="M213.38,221.92a8,8,0,0,1-11.3-.54L197.19,216H32a16,16,0,0,1-11.32-27.32l79.45-79.44L42.07,45.38A8,8,0,1,1,53.91,34.61l160,176A8,8,0,0,1,213.38,221.92ZM194.08,165A8,8,0,0,0,208,159.63V40A16,16,0,0,0,180.69,28.7L128.18,81.2a8,8,0,0,0-.26,11Z" />
    </_Svg>
  )
}

Icon.displayName = 'CellSignalSlashFill'

export const CellSignalSlashFill = memo<IconProps>(themed(Icon))
