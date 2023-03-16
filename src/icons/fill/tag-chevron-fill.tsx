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
      <_Path d="M237.3,136.88l-42.66,64A16,16,0,0,1,181.33,208H24a8,8,0,0,1-6.58-12.55L64,128,17.42,60.55A8,8,0,0,1,24,48H181.33a16,16,0,0,1,13.31,7.12l42.66,64A16,16,0,0,1,237.3,136.88Z" />
    </_Svg>
  )
}

Icon.displayName = 'TagChevronFill'

export const TagChevronFill = memo<IconProps>(themed(Icon))
