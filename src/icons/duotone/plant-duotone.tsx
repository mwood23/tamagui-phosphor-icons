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
        d="M138.54,141.46C106.62,88.25,149.18,35.05,239.63,40.37,245,130.82,191.75,173.38,138.54,141.46Z"
        opacity="0.2"
      />
      <_Path
        d="M88.47,152.47c22.8-38-7.6-76-72.21-72.21C12.46,144.87,50.47,175.27,88.47,152.47Z"
        opacity="0.2"
      />
      <_Path
        d="M138.54,141.46C106.62,88.25,149.18,35.05,239.63,40.37,245,130.82,191.75,173.38,138.54,141.46Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M88.47,152.47c22.8-38-7.6-76-72.21-72.21C12.46,144.87,50.47,175.27,88.47,152.47Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="56"
        y1="120"
        x2="120"
        y2="184"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M200,80l-61.25,61.25A64,64,0,0,0,120,186.51V216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'PlantDuotone'

export const PlantDuotone = memo<IconProps>(themed(Icon))
