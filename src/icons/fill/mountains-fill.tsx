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
      <_Path d="M136,52a28,28,0,1,1,28,28A28,28,0,0,1,136,52ZM255,204a8,8,0,0,1-6.95,4H8a8,8,0,0,1-6.89-12.06L74.21,71.88a16,16,0,0,1,27.58,0L146.63,148l26.16-44.14A15.85,15.85,0,0,1,186.55,96h0a15.87,15.87,0,0,1,13.77,7.84l54.56,92.08A8,8,0,0,1,255,204ZM64.43,120h47.14L88,80Z" />
    </_Svg>
  )
}

Icon.displayName = 'MountainsFill'

export const MountainsFill = memo<IconProps>(themed(Icon))
