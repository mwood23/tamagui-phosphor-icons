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
        d="M160,125.48c17.76,4.91,36.1,3.75,56-13.48V48c-19.89,17.23-38.24,18.39-56,13.48Z"
        opacity="0.2"
      />
      <_Path
        d="M96,154.52c21.62,6,42.38,21,64,27v-56c-21.63-6-42.38-21-64-27Z"
        opacity="0.2"
      />
      <_Path
        d="M40,112C59.89,94.77,78.24,93.61,96,98.52v-64C78.24,29.61,59.89,30.77,40,48Z"
        opacity="0.2"
      />
      <_Line
        x1="160"
        y1="61.48"
        x2="160"
        y2="181.48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M40,112c64-55.43,112,55.43,176,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="96"
        y1="34.52"
        x2="96"
        y2="154.52"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M40,168c64-55.43,112,55.43,176,0V48C152,103.43,104-7.43,40,48V216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'FlagCheckeredDuotone'

export const FlagCheckeredDuotone = memo<IconProps>(themed(Icon))
