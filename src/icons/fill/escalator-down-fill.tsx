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
      <_Path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM224,144H187.5L96.26,45.15A16.06,16.06,0,0,0,84.5,40H32A16,16,0,0,0,16,56V96a16,16,0,0,0,16,16H68.5l91.24,98.85A16.06,16.06,0,0,0,171.5,216H224a16,16,0,0,0,16-16V160A16,16,0,0,0,224,144Z" />
    </_Svg>
  )
}

Icon.displayName = 'EscalatorDownFill'

export const EscalatorDownFill = memo<IconProps>(themed(Icon))
