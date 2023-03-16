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
        d="M215.17,127.43,184,72H72L40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28A8,8,0,0,0,215.17,127.43ZM128,152a20,20,0,1,1,20-20A20,20,0,0,1,128,152Z"
        opacity="0.2"
      />
      <_Circle
        cx="128"
        cy="132"
        r="20"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="152"
        x2="128"
        y2="248"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28a8,8,0,0,0,.73-8.29L184,72Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'PenNibStraightDuotone'

export const PenNibStraightDuotone = memo<IconProps>(themed(Icon))
