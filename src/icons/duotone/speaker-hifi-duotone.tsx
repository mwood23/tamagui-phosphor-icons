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
        d="M192,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V40A8,8,0,0,0,192,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z"
        opacity="0.2"
      />
      <_Rect
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        transform="translate(256 0) rotate(90)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="76" r="12" fill={`${color}`} />
      <_Circle
        cx="128"
        cy="152"
        r="32"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SpeakerHifiDuotone'

export const SpeakerHifiDuotone = memo<IconProps>(themed(Icon))
