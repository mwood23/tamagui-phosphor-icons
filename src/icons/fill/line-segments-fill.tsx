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
      <_Path d="M238.64,78.62A31.9,31.9,0,0,1,216,88a32.33,32.33,0,0,1-7.64-.92l-26.63,49.46c.3.28.6.56.89.85a32,32,0,1,1-50.2,6.38l-20.18-20.18A32,32,0,0,1,96,128a32.4,32.4,0,0,1-7.65-.91L61.72,176.53c.3.28.61.56.9.85a32,32,0,1,1-45.26,0h0a32,32,0,0,1,30.27-8.44l26.63-49.46c-.3-.28-.6-.56-.89-.85a32,32,0,0,1,0-45.26h0a32,32,0,0,1,50.2,38.89l20.18,20.18a32.19,32.19,0,0,1,23.9-3.5l26.63-49.46c-.3-.28-.61-.56-.9-.85a32,32,0,0,1,0-45.26h0a32,32,0,0,1,45.26,45.26Z" />
    </_Svg>
  )
}

Icon.displayName = 'LineSegmentsFill'

export const LineSegmentsFill = memo<IconProps>(themed(Icon))
