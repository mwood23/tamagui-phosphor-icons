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
        d="M64,107.31V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V107.31a8,8,0,0,1,2.34-5.65l11.32-11.32A8,8,0,0,0,208,84.69V40a8,8,0,0,0-8-8H184a8,8,0,0,0-8,8V56a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V40a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8V56a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V40a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V84.69a8,8,0,0,0,2.34,5.65l11.32,11.32A8,8,0,0,1,64,107.31Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M104,224V152a24,24,0,0,1,48,0v72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'CastleTurretRegular'

export const CastleTurretRegular = memo<IconProps>(themed(Icon))
