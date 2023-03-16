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
      <_Path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM227.39,60.32a111.36,111.36,0,0,0-39.12-43.08,8,8,0,1,0-8.54,13.53,94.13,94.13,0,0,1,33.46,36.91,8,8,0,0,0,14.2-7.36ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.53A111.36,111.36,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72ZM208,112a80,80,0,0,0-160,0c0,26.28-4.78,48.39-13.81,63.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.79-24.06C212.78,160.38,208,138.27,208,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'BellSimpleRingingFill'

export const BellSimpleRingingFill = memo<IconProps>(themed(Icon))
