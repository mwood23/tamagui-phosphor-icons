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
      <_Path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" />
    </_Svg>
  )
}

Icon.displayName = 'CheckSquareOffsetFill'

export const CheckSquareOffsetFill = memo<IconProps>(themed(Icon))
