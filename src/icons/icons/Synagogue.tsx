import { useContext } from 'react'

import { SynagogueBold } from '../bold/synagogue-bold'
import { SynagogueDuotone } from '../duotone/synagogue-duotone'
import { SynagogueFill } from '../fill/synagogue-fill'
import { SynagogueLight } from '../light/synagogue-light'
import { SynagogueRegular } from '../regular/synagogue-regular'
import { SynagogueThin } from '../thin/synagogue-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SynagogueRegular,
  bold: SynagogueBold,
  duotone: SynagogueDuotone,
  fill: SynagogueFill,
  light: SynagogueLight,
  thin: SynagogueThin,
} as const

export const Synagogue = (props: IconProps) => {
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
