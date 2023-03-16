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
      <_Circle cx="92" cy="136" r="16" fill={`${color}`} />
      <_Circle cx="164" cy="136" r="16" fill={`${color}`} />
      <_Path
        d="M151.47,81.43l6.95-27.37a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37a8,8,0,0,1-4.55,9.24l-67,29.7a8.15,8.15,0,0,1-11-4.56L145.61,179.2"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M104.53,81.43l-7-27.37a8.1,8.1,0,0,0-9.21-6L52.31,54A8.08,8.08,0,0,0,45.77,60L16.24,176.35a8,8,0,0,0,4.55,9.24l67,29.7a8.15,8.15,0,0,0,11-4.56l11.64-31.53"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M84,85.24A181.44,181.44,0,0,1,128,80a181.44,181.44,0,0,1,44,5.24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M172,174.76A181.44,181.44,0,0,1,128,180a181.44,181.44,0,0,1-44-5.24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'DiscordLogoBold'

export const DiscordLogoBold = memo<IconProps>(themed(Icon))
