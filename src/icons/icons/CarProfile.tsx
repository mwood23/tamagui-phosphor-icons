import { useContext } from 'react'

import { CarProfileBold } from '../bold/car-profile-bold'
import { CarProfileDuotone } from '../duotone/car-profile-duotone'
import { CarProfileFill } from '../fill/car-profile-fill'
import { CarProfileLight } from '../light/car-profile-light'
import { CarProfileRegular } from '../regular/car-profile-regular'
import { CarProfileThin } from '../thin/car-profile-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CarProfileRegular,
  bold: CarProfileBold,
  duotone: CarProfileDuotone,
  fill: CarProfileFill,
  light: CarProfileLight,
  thin: CarProfileThin,
} as const

export const CarProfile = (props: IconProps) => {
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
