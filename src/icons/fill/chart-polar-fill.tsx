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
      <_Path d="M120,199.54v27.74a4,4,0,0,1-4.46,4,104.22,104.22,0,0,1-90.8-90.8,4,4,0,0,1,4-4.46H56.46A72.11,72.11,0,0,0,120,199.54ZM183.42,136H136v47.42A56.11,56.11,0,0,0,183.42,136ZM136,72.58V120h47.42A56.11,56.11,0,0,0,136,72.58ZM227.28,136H199.54A72.11,72.11,0,0,1,136,199.54v27.74a4,4,0,0,0,4.46,4,104.22,104.22,0,0,0,90.8-90.8A4,4,0,0,0,227.28,136Zm-27.74-16h27.74a4,4,0,0,0,4-4.46,104.22,104.22,0,0,0-90.8-90.8,4,4,0,0,0-4.46,4V56.46A72.11,72.11,0,0,1,199.54,120Zm-84-95.26a104.22,104.22,0,0,0-90.8,90.8,4,4,0,0,0,4,4.46H56.46A72.11,72.11,0,0,1,120,56.46V28.72A4,4,0,0,0,115.54,24.74ZM72.58,120H120V72.58A56.11,56.11,0,0,0,72.58,120ZM120,183.42V136H72.58A56.11,56.11,0,0,0,120,183.42Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChartPolarFill'

export const ChartPolarFill = memo<IconProps>(themed(Icon))
