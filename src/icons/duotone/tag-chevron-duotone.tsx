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
        d="M24,200l46.65-67.56a8,8,0,0,0,0-8.88L24,56H181.33A8,8,0,0,1,188,59.56l42.67,64a8,8,0,0,1,0,8.88l-42.67,64a8,8,0,0,1-6.66,3.56Z"
        opacity="0.2"
      />
      <_Path
        d="M24,200l46.65-67.56a8,8,0,0,0,0-8.88L24,56H181.33A8,8,0,0,1,188,59.56l42.67,64a8,8,0,0,1,0,8.88l-42.67,64a8,8,0,0,1-6.66,3.56Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'TagChevronDuotone'

export const TagChevronDuotone = memo<IconProps>(themed(Icon))
