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
        d="M188,96a20,20,0,0,0-20,20V100a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V152L69.32,122a20,20,0,0,0-34.64,20c37.51,66,49.14,90,93.32,90a80,80,0,0,0,80-80V116A20,20,0,0,0,188,96Z"
        opacity="0.2"
      />
      <_Path
        d="M34.68,142a20,20,0,0,1,34.64-20L88,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C83.82,232,72.19,208,34.68,142Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'HandPointingDuotone'

export const HandPointingDuotone = memo<IconProps>(themed(Icon))
