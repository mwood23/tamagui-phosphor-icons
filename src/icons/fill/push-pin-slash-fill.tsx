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
      <_Path d="M213.93,210.62a8,8,0,1,1-11.84,10.76l-21.84-24a89.75,89.75,0,0,1-11.58,20.27A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63,69.82,69.82,0,0,1,67.37,73.2L42.08,45.38A8,8,0,1,1,53.92,34.62L182.3,175.83l0,0ZM235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L110.77,62.06a8,8,0,0,0-.25,11l68.57,75.43a8,8,0,0,0,5.74,2.62H185a8,8,0,0,0,5.66-2.35L235.32,104A16,16,0,0,0,235.32,81.37Z" />
    </_Svg>
  )
}

Icon.displayName = 'PushPinSlashFill'

export const PushPinSlashFill = memo<IconProps>(themed(Icon))
