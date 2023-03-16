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
      <_Rect
        x="97.16"
        y="33.16"
        width="61.68"
        height="61.68"
        rx="8.72"
        transform="translate(-7.76 109.25) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Rect
        x="161.16"
        y="97.16"
        width="61.68"
        height="61.68"
        rx="8.72"
        transform="translate(-34.27 173.25) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Rect
        x="33.16"
        y="97.16"
        width="61.68"
        height="61.68"
        rx="8.72"
        transform="translate(-71.76 82.75) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Rect
        x="97.16"
        y="161.16"
        width="61.68"
        height="61.68"
        rx="8.72"
        transform="translate(-98.27 146.75) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'DiamondsFourLight'

export const DiamondsFourLight = memo<IconProps>(themed(Icon))
