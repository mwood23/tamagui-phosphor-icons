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
      <_Path d="M160,56v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h40A8,8,0,0,1,160,56Zm64-8H184a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48Zm0,80H184a8,8,0,0,0-8,8v40a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V136A8,8,0,0,0,224,128ZM80,48H40a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V56A8,8,0,0,0,80,48Zm0,80H40a8,8,0,0,0-8,8v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V136A8,8,0,0,0,80,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'KanbanFill'

export const KanbanFill = memo<IconProps>(themed(Icon))
