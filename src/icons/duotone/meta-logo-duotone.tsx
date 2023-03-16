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
        d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M74,56C27.7,56-3.16,200,58.56,200c19,0,35.32-24.14,51.22-52.65l18.71-32.75C111.56,83.58,94.25,56,74,56Z"
        opacity="0.2"
      />
      <_Path
        d="M182,56c-12.62,0-24.1,10.7-35,26.27L128.49,114.6c21.76,39.86,42.91,85.4,68.95,85.4C259.16,200,228.3,56,182,56Z"
        opacity="0.2"
      />
    </_Svg>
  )
}

Icon.displayName = 'MetaLogoDuotone'

export const MetaLogoDuotone = memo<IconProps>(themed(Icon))
