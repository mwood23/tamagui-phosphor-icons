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
      <_Path
        d="M128,200s40-22,40-80.82c0-46-24.55-69.54-35.19-77.56a8,8,0,0,0-9.62,0C112.55,49.64,88,73.14,88,119.18,88,178,128,200,128,200Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M94.6,80.8C81.28,70,68.56,65.79,61,64.18a8.2,8.2,0,0,0-9.52,5.52c-3.88,12-8.78,39.66,11.11,74.27s53.07,53.4,65.37,56"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M161.4,80.8c13.32-10.82,26-15,33.56-16.62a8.2,8.2,0,0,1,9.52,5.52c3.88,12,8.78,39.66-11.11,74.27S140.3,197.37,128,200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M128,200c15.37,0,40.77-.18,70-17.64s38.69-39.34,41.72-50.54a7.94,7.94,0,0,0-5.46-9.78,69.59,69.59,0,0,0-30.82-.64"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M52.56,121.4a69.59,69.59,0,0,0-30.82.64,7.94,7.94,0,0,0-5.46,9.78c3,11.2,12.49,33.07,41.72,50.54S112.63,200,128,200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'FlowerLotusBold'

export const FlowerLotusBold = memo<IconProps>(themed(Icon))
