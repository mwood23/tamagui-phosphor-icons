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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Path
        d="M112,24h32a8,8,0,0,1,8,8V72a8,8,0,0,0,8,8h40a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H160a8,8,0,0,0-8,8v88a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V136a8,8,0,0,0-8-8H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H96a8,8,0,0,0,8-8V32A8,8,0,0,1,112,24Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'CrossRegular'

export const CrossRegular = memo<IconProps>(themed(Icon))
