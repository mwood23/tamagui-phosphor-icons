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
        d="M60.07,112a16.23,16.23,0,0,0,14.72-10A34.21,34.21,0,0,1,82.4,90.4c17.23-17.23,49.82-12.57,72.8,10.4s27.63,55.57,10.4,72.8a34.21,34.21,0,0,1-11.66,7.61,16.23,16.23,0,0,0-10,14.72C143.56,208,139.39,219,131.2,227.2,110,248.4,69.88,242.67,41.6,214.4S7.6,146,28.8,124.8C37,116.61,48,112.44,60.07,112Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="60"
        y1="172"
        x2="84"
        y2="196"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="112" cy="144" r="24" fill={`${color}`} />
      <_Line
        x1="204"
        y1="12"
        x2="244"
        y2="52"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="174"
        y1="54"
        x2="202"
        y2="82"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="139.39"
        y1="88.61"
        x2="210"
        y2="18"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="167.39"
        y1="116.61"
        x2="238"
        y2="46"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'GuitarBold'

export const GuitarBold = memo<IconProps>(themed(Icon))
