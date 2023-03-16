import { useContext } from 'react'

import { MosqueBold } from '../bold/mosque-bold'
import { MosqueDuotone } from '../duotone/mosque-duotone'
import { MosqueFill } from '../fill/mosque-fill'
import { MosqueLight } from '../light/mosque-light'
import { MosqueRegular } from '../regular/mosque-regular'
import { MosqueThin } from '../thin/mosque-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MosqueRegular,
  bold: MosqueBold,
  duotone: MosqueDuotone,
  fill: MosqueFill,
  light: MosqueLight,
  thin: MosqueThin,
} as const

export const Mosque = (props: IconProps) => {
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
