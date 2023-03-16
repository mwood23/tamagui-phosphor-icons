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
        d="M188,96a20,20,0,0,0-20,20V60a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V76a20,20,0,0,0-40,0v76a80,80,0,0,0,160,0V116A20,20,0,0,0,188,96ZM128,200c-32,0-48-32-48-32s16-32,48-32,48,32,48,32S160,200,128,200Z"
        opacity="0.2"
      />
      <_Path
        d="M88,76V44a20,20,0,0,1,40,0v60"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M128,60a20,20,0,0,1,40,0v60"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="168" r="12" fill={`${color}`} />
      <_Path
        d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'HandEyeDuotone'

export const HandEyeDuotone = memo<IconProps>(themed(Icon))
