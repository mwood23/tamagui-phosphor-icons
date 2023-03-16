import { useContext } from 'react'

import { EngineBold } from '../bold/engine-bold'
import { EngineDuotone } from '../duotone/engine-duotone'
import { EngineFill } from '../fill/engine-fill'
import { EngineLight } from '../light/engine-light'
import { EngineRegular } from '../regular/engine-regular'
import { EngineThin } from '../thin/engine-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: EngineRegular,
  bold: EngineBold,
  duotone: EngineDuotone,
  fill: EngineFill,
  light: EngineLight,
  thin: EngineThin,
} as const

export const Engine = (props: IconProps) => {
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
