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
        d="M177,68.82h0A55.7,55.7,0,0,1,184,96v3.9a16,16,0,0,1-12.35,15.52A195.71,195.71,0,0,1,128,120a195.87,195.87,0,0,1-43.65-4.58A15.94,15.94,0,0,1,72,99.9V96.83a57.07,57.07,0,0,1,7.37-28.08h0C41.86,76.51,16,93,16,112c0,26.51,50.14,48,112,48s112-21.49,112-48C240,93,214.29,76.61,177,68.82Z"
        opacity="0.2"
      />
      <_Line
        x1="168"
        y1="192"
        x2="176"
        y2="216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="192"
        x2="128"
        y2="224"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="88"
        y1="192"
        x2="80"
        y2="216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M177,68.82C214.29,76.61,240,93,240,112c0,26.51-50.14,48-112,48S16,138.51,16,112c0-19,25.86-35.49,63.35-43.25"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M72,99.9a15.94,15.94,0,0,0,12.34,15.52A195.87,195.87,0,0,0,128,120a195.71,195.71,0,0,0,43.64-4.58A16,16,0,0,0,184,99.9V96a56,56,0,0,0-56.74-56C96.48,40.4,72,66.06,72,96.83Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'FlyingSaucerDuotone'

export const FlyingSaucerDuotone = memo<IconProps>(themed(Icon))
