import { useContext } from 'react'

import { FireExtinguisherBold } from '../bold/fire-extinguisher-bold'
import { FireExtinguisherDuotone } from '../duotone/fire-extinguisher-duotone'
import { FireExtinguisherFill } from '../fill/fire-extinguisher-fill'
import { FireExtinguisherLight } from '../light/fire-extinguisher-light'
import { FireExtinguisherRegular } from '../regular/fire-extinguisher-regular'
import { FireExtinguisherThin } from '../thin/fire-extinguisher-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FireExtinguisherRegular,
  bold: FireExtinguisherBold,
  duotone: FireExtinguisherDuotone,
  fill: FireExtinguisherFill,
  light: FireExtinguisherLight,
  thin: FireExtinguisherThin,
} as const

export const FireExtinguisher = (props: IconProps) => {
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
