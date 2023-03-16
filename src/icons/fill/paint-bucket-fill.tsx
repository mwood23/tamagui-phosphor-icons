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
      <_Path d="M256,204a28,28,0,0,1-56,0c0-23.57,22.06-41.49,23-42.25a8,8,0,0,1,10,0C233.94,162.51,256,180.43,256,204ZM132.49,124.49a12,12,0,1,0-17,0A12,12,0,0,0,132.49,124.49Zm97.17-6.66L122.17,10.34a8,8,0,0,0-11.31,0L70.25,51l40.43,40.42a28,28,0,1,1-11.31,11.32L58.94,62.26,15,106.17a24,24,0,0,0,0,33.94L99.89,225a24,24,0,0,0,33.94,0l95.83-95.83A8,8,0,0,0,229.66,117.83Zm-184-91.49A8,8,0,0,0,34.34,37.66l24.6,24.6L70.25,51Z" />
    </_Svg>
  )
}

Icon.displayName = 'PaintBucketFill'

export const PaintBucketFill = memo<IconProps>(themed(Icon))
