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
      <_Path d="M256,120a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H35.92l47.5-65.41a16,16,0,0,1,25.31-.72l12.85,14.9.2.23a7.95,7.95,0,0,0,12.44,0l.2-.23,12.85-14.9a16,16,0,0,1,25.31.72L220.08,112H248A8,8,0,0,1,256,120Zm-76,24a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144Z" />
    </_Svg>
  )
}

Icon.displayName = 'DetectiveFill'

export const DetectiveFill = memo<IconProps>(themed(Icon))
