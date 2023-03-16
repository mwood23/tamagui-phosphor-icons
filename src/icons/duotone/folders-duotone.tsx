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
      <_Path
        d="M224,72H154.67a8,8,0,0,1-4.8-1.6L122.13,49.6a8,8,0,0,0-4.8-1.6H72a8,8,0,0,0-8,8V80H85.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H192a8,8,0,0,1,8,8v64h24.89a7.11,7.11,0,0,0,7.11-7.11V80A8,8,0,0,0,224,72Z"
        opacity="0.2"
      />
      <_Path
        d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'FoldersDuotone'

export const FoldersDuotone = memo<IconProps>(themed(Icon))
