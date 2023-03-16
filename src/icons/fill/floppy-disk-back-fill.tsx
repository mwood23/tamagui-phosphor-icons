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
      <_Path d="M208,32H188a4,4,0,0,0-4,4V80a16,16,0,0,1-16,16H88.27A8.17,8.17,0,0,1,80,88.53,8,8,0,0,1,88,80h76a4,4,0,0,0,4-4V36a4,4,0,0,0-4-4H91.31A15.86,15.86,0,0,0,80,36.69L36.69,80A15.86,15.86,0,0,0,32,91.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z" />
    </_Svg>
  )
}

Icon.displayName = 'FloppyDiskBackFill'

export const FloppyDiskBackFill = memo<IconProps>(themed(Icon))
