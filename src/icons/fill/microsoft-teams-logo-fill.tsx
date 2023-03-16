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
      <_Path d="M219.26,80h-7.57A31.71,31.71,0,0,0,216,64a32,32,0,0,0-45.88-28.85A40,40,0,0,0,96.81,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H76.67a64,64,0,0,0,118.7-.15A40,40,0,0,0,232,152V92.74A12.76,12.76,0,0,0,219.26,80ZM136,32a24,24,0,0,1,15.07,42.68A16,16,0,0,0,136,64H113.38A24,24,0,0,1,136,32ZM88,160a8,8,0,0,1-8-8V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40A8,8,0,0,1,88,160Zm96,8a48,48,0,0,1-89.56,24H136a16,16,0,0,0,16-16V96h32Zm0-88H168a39.89,39.89,0,0,0,7.6-29.6A16,16,0,1,1,184,80Zm32,72a24,24,0,0,1-16.36,22.75A62.76,62.76,0,0,0,200,168V96h16Z" />
    </_Svg>
  )
}

Icon.displayName = 'MicrosoftTeamsLogoFill'

export const MicrosoftTeamsLogoFill = memo<IconProps>(themed(Icon))
