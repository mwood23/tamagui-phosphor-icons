import { useContext } from 'react'

import { CompassToolBold } from '../bold/compass-tool-bold'
import { CompassToolDuotone } from '../duotone/compass-tool-duotone'
import { CompassToolFill } from '../fill/compass-tool-fill'
import { CompassToolLight } from '../light/compass-tool-light'
import { CompassToolRegular } from '../regular/compass-tool-regular'
import { CompassToolThin } from '../thin/compass-tool-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CompassToolRegular,
  bold: CompassToolBold,
  duotone: CompassToolDuotone,
  fill: CompassToolFill,
  light: CompassToolLight,
  thin: CompassToolThin,
} as const

export const CompassTool = (props: IconProps) => {
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    style: contextStyle,
  } = useContext(IconContext)

  const {
    color = contextColor ?? 'black',
    size = contextSize ?? 24,
    weight = contextWeight ?? 'regular',
    style = contextStyle ?? {},
    ...otherProps
  } = props

  const Component = weightMap[weight]

  return (
    <Component
      color={color}
      size={size}
      weight={weight}
      style={style}
      {...otherProps}
    />
  )
}
