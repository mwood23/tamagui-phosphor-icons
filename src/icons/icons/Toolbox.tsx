import { useContext } from 'react'

import { ToolboxBold } from '../bold/toolbox-bold'
import { ToolboxDuotone } from '../duotone/toolbox-duotone'
import { ToolboxFill } from '../fill/toolbox-fill'
import { ToolboxLight } from '../light/toolbox-light'
import { ToolboxRegular } from '../regular/toolbox-regular'
import { ToolboxThin } from '../thin/toolbox-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ToolboxRegular,
  bold: ToolboxBold,
  duotone: ToolboxDuotone,
  fill: ToolboxFill,
  light: ToolboxLight,
  thin: ToolboxThin,
} as const

export const Toolbox = (props: IconProps) => {
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
