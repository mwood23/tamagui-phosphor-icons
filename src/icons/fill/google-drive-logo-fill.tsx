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
      <_Path d="M237.6,151.78,169.13,39.52A15.91,15.91,0,0,0,155.56,32H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,151.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,224H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,151.78ZM219,152H172.52L137.33,93.33l22.75-37.92ZM92.53,168h70.94l24,40H68.53Zm9.6-16L128,108.88,153.87,152ZM95.91,55.41l22.76,37.92L83.47,152H37Z" />
    </_Svg>
  )
}

Icon.displayName = 'GoogleDriveLogoFill'

export const GoogleDriveLogoFill = memo<IconProps>(themed(Icon))
