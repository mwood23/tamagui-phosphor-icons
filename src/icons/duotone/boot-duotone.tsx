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
        d="M240,168a48,48,0,0,0-48-48H152V56a8,8,0,0,0-8-8H32c12,31.35,9.22,87.94,0,120Z"
        opacity="0.2"
      />
      <_Line
        x1="152"
        y1="120"
        x2="112"
        y2="120"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="152"
        y1="88"
        x2="112"
        y2="88"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M240,168v32a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40A48,48,0,0,1,240,168Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="32"
        y1="168"
        x2="240"
        y2="168"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'BootDuotone'

export const BootDuotone = memo<IconProps>(themed(Icon))
