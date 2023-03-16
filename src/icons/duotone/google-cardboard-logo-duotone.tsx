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
        d="M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H92.69a8,8,0,0,0,5.65-2.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,0,5.65,2.34H224a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z"
        opacity="0.2"
      />
      <_Path
        d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H163.31a8,8,0,0,1-5.65-2.34l-24-24a8,8,0,0,0-11.32,0l-24,24A8,8,0,0,1,92.69,200H32A8,8,0,0,1,24,192Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle
        cx="80"
        cy="128"
        r="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle
        cx="176"
        cy="128"
        r="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GoogleCardboardLogoDuotone'

export const GoogleCardboardLogoDuotone = memo<IconProps>(themed(Icon))
