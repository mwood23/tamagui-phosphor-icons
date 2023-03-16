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
      <_Path d="M56,144a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V72H24a8,8,0,0,1,0-16H40v0a8,8,0,0,1,6.78,3.74L80,112.91l33.22-53.15A8,8,0,0,1,120,56v0h16a8,8,0,0,1,0,16h-8v64h8a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16V91.89L86.78,132.24a8,8,0,0,1-13.56,0L48,91.89V136A8,8,0,0,1,56,144Zm184-24H168a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V128A8,8,0,0,0,240,120Zm0,48H72a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V176A8,8,0,0,0,240,168Zm0-96H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A8,8,0,0,0,240,72Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArticleMediumFill'

export const ArticleMediumFill = memo<IconProps>(themed(Icon))
