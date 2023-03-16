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
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M88,128c0,37.46,13.33,70.92,34.28,93.49a7.77,7.77,0,0,0,11.44,0C154.67,198.92,168,165.46,168,128s-13.33-70.92-34.28-93.49a7.77,7.77,0,0,0-11.44,0C101.33,57.08,88,90.54,88,128Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="37.46"
        y1="96"
        x2="218.54"
        y2="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="37.46"
        y1="160"
        x2="218.54"
        y2="160"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'GlobeLight'

export const GlobeLight = memo<IconProps>(themed(Icon))
