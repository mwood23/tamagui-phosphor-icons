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
        d="M148.89,155.11A43.91,43.91,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.22c-13.9,18-23.41,44.16-24.31,81.65L8,175.87l56.07,16.06,16,56.07,24-56.07c37.51-.9,63.64-10.41,81.68-24.31A43.92,43.92,0,0,1,148.89,155.11Z"
        opacity="0.2"
      />
      <_Circle cx="156" cy="76" r="12" fill={`${color}`} />
      <_Path
        d="M8,175.87l56.07,16.06,16,56.07,24-56.07C242.67,188.64,225.91,67.85,220.27,41.85a8,8,0,0,0-6.13-6.13c-26-5.63-146.74-22.37-150.07,116.15Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'FishDuotone'

export const FishDuotone = memo<IconProps>(themed(Icon))
