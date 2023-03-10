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
      <_Path d="M183.9,148a12,12,0,1,1-12-12A12,12,0,0,1,183.9,148Zm29.4,17.3A87.7,87.7,0,0,1,127.9,232a86.7,86.7,0,0,1-34.6-7.1l-1.2-.5a88.4,88.4,0,0,1-51.5-69.3h0a99.9,99.9,0,0,1-.7-11A87.3,87.3,0,0,1,54,96.3,36,36,0,0,1,70,28a8.5,8.5,0,0,1,3.5.8L187.7,83.9A20,20,0,0,0,186,44a8,8,0,0,1,0-16,36,36,0,0,1,0,72,8.5,8.5,0,0,1-3.5-.8L126.3,72A72.1,72.1,0,0,0,56,141.3L92.1,122h0l32.1-17.1a8,8,0,0,1,11.7,7.1V215.5a71.7,71.7,0,0,0,61.9-54.1,8,8,0,0,1,15.5,3.9Zm-93.4-40-16,8.6v78a71.5,71.5,0,0,0,16,3.6ZM64.4,83.2a87.4,87.4,0,0,1,37.1-23.1l-33.2-16a20,20,0,0,0-3.9,39.1ZM87.9,203.8V142.4L57.4,158.7A72.1,72.1,0,0,0,87.9,203.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'NyTimesLogoFill'

export const NyTimesLogoFill = memo<IconProps>(themed(Icon))
