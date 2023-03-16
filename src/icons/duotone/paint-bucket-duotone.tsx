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
        d="M116.52,16,20.69,111.83a16,16,0,0,0,0,22.63l84.85,84.85a16,16,0,0,0,22.63,0L224,123.48Zm-6.66,114.14a20,20,0,1,1,28.28,0A20,20,0,0,1,109.86,130.14Z"
        opacity="0.2"
      />
      <_Path
        d="M208,204c0-20,20-36,20-36s20,16,20,36a20,20,0,0,1-40,0Z"
        opacity="0.2"
      />
      <_Circle
        cx="124"
        cy="116"
        r="20"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M208,204c0-20,20-36,20-36s20,16,20,36a20,20,0,0,1-40,0Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M224,123.48l-95.83,95.83a16,16,0,0,1-22.63,0L20.69,134.46a16,16,0,0,1,0-22.63L116.52,16Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="109.86"
        y1="101.86"
        x2="39.99"
        y2="32"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'PaintBucketDuotone'

export const PaintBucketDuotone = memo<IconProps>(themed(Icon))
