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
      <_Line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M114.45,113.09a83.51,83.51,0,0,0-14.18,3.6,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,158L35.29,175.42A8,8,0,0,1,26,173c-14.6-18.83-13.26-43.83,4-61.12A135.14,135.14,0,0,1,83.53,79.08"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M131.18,72c34.63.76,69,14,94.76,39.79,17.29,17.29,18.63,42.29,4,61.12a7.87,7.87,0,0,1-4.46,2.84"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'PhoneSlashBold'

export const PhoneSlashBold = memo<IconProps>(themed(Icon))
