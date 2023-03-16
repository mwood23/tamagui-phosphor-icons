import { useContext } from 'react'

import { StoolBold } from '../bold/stool-bold'
import { StoolDuotone } from '../duotone/stool-duotone'
import { StoolFill } from '../fill/stool-fill'
import { StoolLight } from '../light/stool-light'
import { StoolRegular } from '../regular/stool-regular'
import { StoolThin } from '../thin/stool-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StoolRegular,
  bold: StoolBold,
  duotone: StoolDuotone,
  fill: StoolFill,
  light: StoolLight,
  thin: StoolThin,
} as const

export const Stool = (props: IconProps) => {
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
