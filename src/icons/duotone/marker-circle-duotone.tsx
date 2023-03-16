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
        d="M176,211.16a96,96,0,1,0-96,0h0V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.16l12-57.63c1.77-8.49,13.89-8.49,15.66,0l12,57.63H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.16Z"
        opacity="0.2"
      />
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
        d="M176,211.16V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M147.84,136l-12-57.63c-1.77-8.49-13.89-8.49-15.66,0l-12,57.63"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'MarkerCircleDuotone'

export const MarkerCircleDuotone = memo<IconProps>(themed(Icon))
