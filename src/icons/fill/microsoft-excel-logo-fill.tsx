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
      <_Path d="M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM69.2,158.4a8,8,0,0,1-1.6-11.2L82,128,67.6,108.8a8,8,0,1,1,12.8-9.6L92,114.7l11.6-15.5a8,8,0,0,1,12.8,9.6L102,128l14.4,19.2a8,8,0,0,1-1.6,11.2A7.7,7.7,0,0,1,110,160a8,8,0,0,1-6.4-3.2L92,141.3,80.4,156.8A8,8,0,0,1,74,160,7.7,7.7,0,0,1,69.2,158.4ZM128,216H72V192h56Zm0-152H72V40h56Zm72,152H144V192a16,16,0,0,0,16-16v-8h40Zm0-64H160V104h40Zm0-64H160V80a16,16,0,0,0-16-16V40h56Z" />
    </_Svg>
  )
}

Icon.displayName = 'MicrosoftExcelLogoFill'

export const MicrosoftExcelLogoFill = memo<IconProps>(themed(Icon))
