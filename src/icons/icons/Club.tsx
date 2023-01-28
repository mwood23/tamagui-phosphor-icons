import { useContext } from 'react'

import { ClubBold } from '../bold/club-bold'
import { ClubDuotone } from '../duotone/club-duotone'
import { ClubFill } from '../fill/club-fill'
import { ClubLight } from '../light/club-light'
import { ClubRegular } from '../regular/club-regular'
import { ClubThin } from '../thin/club-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ClubRegular,
  bold: ClubBold,
  duotone: ClubDuotone,
  fill: ClubFill,
  light: ClubLight,
  thin: ClubThin,
} as const

export const Club = (props: IconProps) => {
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
