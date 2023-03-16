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
        d="M106.33,195.88A8,8,0,0,0,99.47,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.53a8,8,0,0,0-6.86,3.88l-14.81,24.24a8,8,0,0,1-13.72,0Z"
        opacity="0.2"
      />
      <_Path
        d="M106.33,195.88A8,8,0,0,0,99.47,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.53a8,8,0,0,0-6.86,3.88l-14.81,24.24a8,8,0,0,1-13.72,0Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="120" r="12" fill={`${color}`} />
      <_Circle cx="84" cy="120" r="12" fill={`${color}`} />
      <_Circle cx="172" cy="120" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'ChatCenteredDotsDuotone'

export const ChatCenteredDotsDuotone = memo<IconProps>(themed(Icon))
