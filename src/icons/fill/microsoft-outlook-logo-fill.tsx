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
      <_Path d="M88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm144-24v88a16,16,0,0,1-5,11.61,8.8,8.8,0,0,1-.72.65A15.93,15.93,0,0,1,216,224H88a16,16,0,0,1-16-16V192H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96V48a16,16,0,0,1,16-16h80a16,16,0,0,1,16,16v56h8a15.94,15.94,0,0,1,10,3.54l.08.07.14.11a6.78,6.78,0,0,1,.74.68A15.93,15.93,0,0,1,232,120ZM112,64h24a16,16,0,0,1,16,16v74.13l40-28.89V48H112ZM88,160a32,32,0,1,0-32-32A32,32,0,0,0,88,160Zm111.26,48L152,173.87V176a16,16,0,0,1-16,16H88v16ZM216,127.65,165.66,164,216,200.35Z" />
    </_Svg>
  )
}

Icon.displayName = 'MicrosoftOutlookLogoFill'

export const MicrosoftOutlookLogoFill = memo<IconProps>(themed(Icon))
