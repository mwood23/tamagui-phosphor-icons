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

import { IconProps } from '../../IconProps'
import { themed } from '../../themed'

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
      <_Path d="M128,24C74.2,24,32,48.6,32,80v96c0,31.4,42.2,56,96,56s96-24.6,96-56V80C224,48.6,181.8,24,128,24Zm80,104c0,9.6-7.9,19.4-21.6,26.9C170.9,163.4,150.2,168,128,168s-42.9-4.6-58.4-13.1C55.9,147.4,48,137.6,48,128V111.4C65.1,126.3,94.2,136,128,136s62.9-9.7,80-24.6Zm-21.6,74.9C170.9,211.4,150.2,216,128,216s-42.9-4.6-58.4-13.1C55.9,195.4,48,185.6,48,176V159.4C65.1,174.3,94.2,184,128,184s62.9-9.7,80-24.6V176C208,185.6,200.1,195.4,186.4,202.9Z" />
    </_Svg>
  )
}

Icon.displayName = 'DatabaseFill'

export const DatabaseFill = memo<IconProps>(themed(Icon))