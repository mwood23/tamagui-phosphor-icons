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
        d="M135.34,28.9l23.23,55.36a8,8,0,0,0,6.67,4.88l59.46,5.14a8,8,0,0,1,4.54,14.07L184.13,147.7a8.08,8.08,0,0,0-2.54,7.89l13.52,58.54a8,8,0,0,1-11.89,8.69l-51.1-31a7.93,7.93,0,0,0-8.24,0l-51.1,31a8,8,0,0,1-11.89-8.69l13.52-58.54a8.08,8.08,0,0,0-2.54-7.89L26.76,108.35A8,8,0,0,1,31.3,94.28l59.46-5.14a8,8,0,0,0,6.67-4.88L120.66,28.9A8,8,0,0,1,135.34,28.9Z"
        opacity="0.2"
      />
      <_Path
        d="M135.34,28.9l23.23,55.36a8,8,0,0,0,6.67,4.88l59.46,5.14a8,8,0,0,1,4.54,14.07L184.13,147.7a8.08,8.08,0,0,0-2.54,7.89l13.52,58.54a8,8,0,0,1-11.89,8.69l-51.1-31a7.93,7.93,0,0,0-8.24,0l-51.1,31a8,8,0,0,1-11.89-8.69l13.52-58.54a8.08,8.08,0,0,0-2.54-7.89L26.76,108.35A8,8,0,0,1,31.3,94.28l59.46-5.14a8,8,0,0,0,6.67-4.88L120.66,28.9A8,8,0,0,1,135.34,28.9Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'StarDuotone'

export const StarDuotone = memo<IconProps>(themed(Icon))
