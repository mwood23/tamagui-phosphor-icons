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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,56h32a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm101.66,5.66a8,8,0,0,1-11.32,0L188.69,200H152a8,8,0,0,1,0-16h20.69L72,83.31V104a8,8,0,0,1-16,0V67.31l-5.66-5.65A8,8,0,0,1,61.66,50.34l8,8h0l136,136A8,8,0,0,1,205.66,205.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'SelectionSlashFill'

export const SelectionSlashFill = memo<IconProps>(themed(Icon))
