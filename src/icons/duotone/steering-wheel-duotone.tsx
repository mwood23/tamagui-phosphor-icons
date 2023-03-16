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
      <_Path
        d="M222.4,145.55a128,128,0,0,0-188.8,0A96.6,96.6,0,0,0,37.46,160h53a8,8,0,0,1,7.49,5.2l21.86,58.45c2.7.23,5.44.35,8.2.35s5.46-.12,8.15-.34l21.9-58.47a8,8,0,0,1,7.5-5.19h53A96.6,96.6,0,0,0,222.4,145.55Z"
        opacity="0.2"
      />
      <_Circle cx="128" cy="140" r="12" fill={`${color}`} />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M33.6,145.55a128,128,0,0,1,188.8,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SteeringWheelDuotone'

export const SteeringWheelDuotone = memo<IconProps>(themed(Icon))
