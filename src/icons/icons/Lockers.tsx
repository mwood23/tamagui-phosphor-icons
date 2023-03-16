import { useContext } from 'react'

import { LockersBold } from '../bold/lockers-bold'
import { LockersDuotone } from '../duotone/lockers-duotone'
import { LockersFill } from '../fill/lockers-fill'
import { LockersLight } from '../light/lockers-light'
import { LockersRegular } from '../regular/lockers-regular'
import { LockersThin } from '../thin/lockers-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: LockersRegular,
  bold: LockersBold,
  duotone: LockersDuotone,
  fill: LockersFill,
  light: LockersLight,
  thin: LockersThin,
} as const

export const Lockers = (props: IconProps) => {
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
