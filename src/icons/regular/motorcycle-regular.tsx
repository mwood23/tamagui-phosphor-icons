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
      <_Circle
        cx="40"
        cy="160"
        r="32"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle
        cx="216"
        cy="160"
        r="32"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="144 56 176 56 216 160"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M16,80s47.31,18.34,72.56,29.81a24,24,0,0,0,25.16-3.18C121.64,100.09,134.4,96,152,96h64a64,64,0,0,0-61.65,46.75,23.83,23.83,0,0,1-23,17.25H40"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'MotorcycleRegular'

export const MotorcycleRegular = memo<IconProps>(themed(Icon))
