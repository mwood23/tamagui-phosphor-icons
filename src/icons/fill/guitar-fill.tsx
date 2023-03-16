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
      <_Path d="M245.66,42.34l-32-32a8,8,0,0,0-12.72,9.41L140.52,80.16C117.73,68.3,92.21,69.29,76.75,84.74a42.27,42.27,0,0,0-9.39,14.37A8.24,8.24,0,0,1,59.81,104c-14.59.49-27.26,5.72-36.65,15.11C11.08,131.22,6,148.6,8.74,168.07,11.4,186.7,21.07,205.15,36,220s33.34,24.56,52,27.22A71.13,71.13,0,0,0,98.1,248c15.32,0,28.83-5.23,38.76-15.16,9.39-9.39,14.62-22.06,15.11-36.65a8.24,8.24,0,0,1,4.92-7.55,42.22,42.22,0,0,0,14.37-9.39c15.45-15.46,16.44-41,4.58-63.77l60.41-60.42a8,8,0,0,0,9.41-12.72Zm-152,163.31a8,8,0,0,1-11.31,0l-32-32a8,8,0,0,1,11.32-11.31l32,32A8,8,0,0,1,93.66,205.65Zm42.14-45.86a28,28,0,1,1,0-39.59A28,28,0,0,1,135.8,159.79Zm31.06-58a86.94,86.94,0,0,0-6-6.68,85.23,85.23,0,0,0-6.69-6L176,67.31,188.69,80ZM200,68.68,187.32,56,212,31.31,224.69,44Z" />
    </_Svg>
  )
}

Icon.displayName = 'GuitarFill'

export const GuitarFill = memo<IconProps>(themed(Icon))
