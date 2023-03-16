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
        d="M224,160.1c-14.57,51.07-82.23,68.91-94.19,71.69a7.91,7.91,0,0,1-3.62,0C114.23,229,46.57,211.17,32,160.1V125.82a8,8,0,0,1,5.47-7.6L128,88l90.53,30.22a8,8,0,0,1,5.47,7.6Z"
        opacity="0.2"
      />
      <_Line
        x1="128"
        y1="48"
        x2="128"
        y2="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M224,160.1c-14.57,51.07-82.23,68.91-94.19,71.69a7.91,7.91,0,0,1-3.62,0C114.23,229,46.57,211.17,32,160.1V125.82a8,8,0,0,1,5.47-7.6L128,88l90.53,30.22a8,8,0,0,1,5.47,7.6Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="168"
        x2="128"
        y2="88"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'BoatDuotone'

export const BoatDuotone = memo<IconProps>(themed(Icon))
