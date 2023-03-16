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
        d="M206.63,94.63a32,32,0,0,0-45.26-45.26L128,82.75,173.25,128Z"
        opacity="0.2"
      />
      <_Path
        d="M49.37,161.37a32,32,0,0,0,45.26,45.26L128,173.25,82.75,128Z"
        opacity="0.2"
      />
      <_Path
        d="M94.63,49.37A32,32,0,0,0,49.37,94.63L82.75,128,128,82.75Z"
        opacity="0.2"
      />
      <_Path
        d="M173.25,128,128,173.25l33.37,33.38a32,32,0,0,0,45.26-45.26Z"
        opacity="0.2"
      />
      <_Path
        d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        stroke={`${color}`}
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="128" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'BandaidsDuotone'

export const BandaidsDuotone = memo<IconProps>(themed(Icon))
