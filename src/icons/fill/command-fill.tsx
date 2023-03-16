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
      <_Path d="M100,86.38V100H86.38A14.25,14.25,0,0,1,72,87,14,14,0,0,1,87,72,14.25,14.25,0,0,1,100,86.38ZM72,169a14,14,0,0,0,15,15,14.25,14.25,0,0,0,13-14.34V156H86.38A14.25,14.25,0,0,0,72,169ZM184,87a14,14,0,0,0-15-15,14.25,14.25,0,0,0-13,14.34V100h13.62A14.25,14.25,0,0,0,184,87Zm40-23V192a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V64A32,32,0,0,1,64,32H192A32,32,0,0,1,224,64Zm-68,76V116h13.38c16.39,0,30.21-12.88,30.61-29.25A30,30,0,0,0,169.25,56C152.88,56.41,140,70.23,140,86.62V100H116V86.62C116,70.23,103.12,56.41,86.75,56A30,30,0,0,0,56,86.75C56.41,103.12,70.23,116,86.62,116H100v24H86.62C70.23,140,56.41,152.88,56,169.25A30,30,0,0,0,86.75,200c16.37-.4,29.25-14.22,29.25-30.61V156h24v13.38c0,16.39,12.88,30.21,29.25,30.61A30,30,0,0,0,200,169.25c-.4-16.37-14.22-29.25-30.61-29.25Zm-40,0h24V116H116Zm40,30a14,14,0,1,0,14-14H156Z" />
    </_Svg>
  )
}

Icon.displayName = 'CommandFill'

export const CommandFill = memo<IconProps>(themed(Icon))
