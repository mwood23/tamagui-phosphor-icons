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
      <_Path d="M243.32,116.68l-104-104a16,16,0,0,0-22.64,0l-104,104a16,16,0,0,0,0,22.64l104,104a16,16,0,0,0,22.64,0l104-104A16,16,0,0,0,243.32,116.68ZM56,136a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,88a8,8,0,0,1-16,0V200a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm0-112a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm40,120a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'GooglePodcastsLogoFill'

export const GooglePodcastsLogoFill = memo<IconProps>(themed(Icon))
