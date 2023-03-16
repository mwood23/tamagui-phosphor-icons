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
        d="M48,208H20a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M96.73,120C87,107.72,80,94.56,80,80c0-21.69,17.67-40,39.46-40A39.12,39.12,0,0,1,156,64a39.12,39.12,0,0,1,36.54-24C214.33,40,232,58.31,232,80c0,29.23-28.18,55.07-50.22,71.32"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'HandHeartBold'

export const HandHeartBold = memo<IconProps>(themed(Icon))
