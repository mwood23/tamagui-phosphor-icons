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
        d="M232,152c0,17.67-30.33,32-48,32a32,32,0,0,1,0-64C201.67,120,232,134.33,232,152Z"
        opacity="0.2"
      />
      <_Path
        d="M104,152a32,32,0,0,1-32,32c-17.67,0-48-14.33-48-32s30.33-32,48-32A32,32,0,0,1,104,152Z"
        opacity="0.2"
      />
      <_Line
        x1="104"
        y1="152"
        x2="152"
        y2="152"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M232,152c0,17.67-30.33,32-48,32a32,32,0,0,1,0-64C201.67,120,232,134.33,232,152Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M104,152a32,32,0,0,1-32,32c-17.67,0-48-14.33-48-32s30.33-32,48-32A32,32,0,0,1,104,152Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="165.73"
        y1="125.73"
        x2="214.63"
        y2="174.63"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="46.59"
        y1="126.59"
        x2="94.63"
        y2="174.63"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M232,152h0a16,16,0,0,0,16-16h0a64,64,0,0,0-64-64H72A64,64,0,0,0,8,136H8a16,16,0,0,0,16,16h0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GogglesDuotone'

export const GogglesDuotone = memo<IconProps>(themed(Icon))
