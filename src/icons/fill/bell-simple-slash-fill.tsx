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
      <_Path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6L182.6,200H49a16,16,0,0,1-13.8-24.1c5.9-10.2,13-29.6,13-63.9v-8A80.2,80.2,0,0,1,58.9,63.9L42.1,45.4A8,8,0,0,1,53.9,34.6ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm42.9-41.3a8,8,0,0,0,5.9,2.6,7.9,7.9,0,0,0,4.2-1.2,8,8,0,0,0,3.3-9.7c-5.6-14.2-8.5-32.6-8.5-54.4v-7.1c0-44.3-35.5-80.6-79.2-80.9A80.2,80.2,0,0,0,88.5,34.4a8,8,0,0,0-3.9,5.7,8.2,8.2,0,0,0,2,6.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'BellSimpleSlashFill'

export const BellSimpleSlashFill = memo<IconProps>(themed(Icon))
