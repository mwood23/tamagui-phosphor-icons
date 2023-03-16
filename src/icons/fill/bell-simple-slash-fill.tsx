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
      <_Path d="M213.94,210.62a8,8,0,1,1-11.84,10.76L182.66,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104A79.49,79.49,0,0,1,58.84,63.8L42.1,45.38A8,8,0,1,1,53.94,34.62ZM160,216H96a8,8,0,1,0,0,16h64a8,8,0,0,0,0-16Zm58.51-47.12C216.07,162.59,208,139.35,208,104A80,80,0,0,0,88.54,34.4a8,8,0,0,0-2,12.34L205.17,177.18a8,8,0,0,0,13.36-8.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'BellSimpleSlashFill'

export const BellSimpleSlashFill = memo<IconProps>(themed(Icon))
