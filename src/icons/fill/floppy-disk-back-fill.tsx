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
      <_Path d="M208,32H172a4,4,0,0,0-4,4V80a8,8,0,0,1-8,8H96.3A8.2,8.2,0,0,1,88,80.5,8,8,0,0,1,96,72h56V36a4,4,0,0,0-4-4H91.3A15.9,15.9,0,0,0,80,36.7L36.7,80A15.9,15.9,0,0,0,32,91.3V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,176a28,28,0,1,1,28-28A28.1,28.1,0,0,1,128,176Z" />
    </_Svg>
  )
}

Icon.displayName = 'FloppyDiskBackFill'

export const FloppyDiskBackFill = memo<IconProps>(themed(Icon))
