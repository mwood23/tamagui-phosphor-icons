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
      <_Path d="M58.48,134.73,22.66,109A16,16,0,0,1,32,80H76.24ZM53.15,203A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0L114.3,194.6,66.94,160.52ZM143.23,19.26a15.93,15.93,0,0,0-30.45-.05L98.25,64h59.5ZM162.94,80H93.06L72.12,144.54,128,184.75l55.88-40.21Zm76.24,11.06A15.75,15.75,0,0,0,224,80H179.76l17.76,54.74,35.85-25.8A15.74,15.74,0,0,0,239.18,91.05Zm-50.12,69.47L141.7,194.6l36.53,26.28A16,16,0,0,0,202.85,203Z" />
    </_Svg>
  )
}

Icon.displayName = 'PentagramFill'

export const PentagramFill = memo<IconProps>(themed(Icon))
