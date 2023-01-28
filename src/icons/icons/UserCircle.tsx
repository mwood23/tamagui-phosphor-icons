import { useContext } from 'react'

import { UserCircleBold } from '../bold/user-circle-bold'
import { UserCircleDuotone } from '../duotone/user-circle-duotone'
import { UserCircleFill } from '../fill/user-circle-fill'
import { UserCircleLight } from '../light/user-circle-light'
import { UserCircleRegular } from '../regular/user-circle-regular'
import { UserCircleThin } from '../thin/user-circle-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: UserCircleRegular,
  bold: UserCircleBold,
  duotone: UserCircleDuotone,
  fill: UserCircleFill,
  light: UserCircleLight,
  thin: UserCircleThin,
} as const

export const UserCircle = (props: IconProps) => {
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
