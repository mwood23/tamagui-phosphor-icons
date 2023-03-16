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
        x1="12"
        y1="124"
        x2="12"
        y2="180"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="84"
        y1="44"
        x2="140"
        y2="44"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="244"
        y1="124"
        x2="244"
        y2="180"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M177.66,182.34l-35.32,35.32a8,8,0,0,1-5.65,2.34H95.31a8,8,0,0,1-5.65-2.34L54.34,182.34A8,8,0,0,1,52,176.69V92a8,8,0,0,1,8-8h76.69a8,8,0,0,1,5.65,2.34l35.32,35.32a8,8,0,0,0,5.65,2.34H196a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H183.31A8,8,0,0,0,177.66,182.34Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="12"
        y1="152"
        x2="52"
        y2="152"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="112"
        y1="44"
        x2="112"
        y2="84"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="204"
        y1="152"
        x2="244"
        y2="152"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'EngineBold'

export const EngineBold = memo<IconProps>(themed(Icon))
