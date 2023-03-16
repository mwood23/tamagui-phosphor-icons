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
      <_Circle cx="184" cy="120" r="16" fill={`${color}`} />
      <_Line
        x1="116"
        y1="76"
        x2="156"
        y2="76"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="220"
        y1="40"
        x2="148"
        y2="40"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M12,144a24,24,0,0,1,24-24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M224.34,96H228a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16h-8l-18.1,50.69a8,8,0,0,1-7.54,5.31H181.64a8,8,0,0,1-7.54-5.31L170.29,200H101.71L97.9,210.69A8,8,0,0,1,90.36,216H77.64a8,8,0,0,1-7.54-5.31L57,174a79.7,79.7,0,0,1-21-54h0a80,80,0,0,1,80-80h32a80,80,0,0,1,73.44,48.22,82.22,82.22,0,0,1,2.9,7.78"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'PiggyBankBold'

export const PiggyBankBold = memo<IconProps>(themed(Icon))
