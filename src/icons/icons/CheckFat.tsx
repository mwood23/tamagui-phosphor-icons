import { useContext } from 'react'

import { CheckFatBold } from '../bold/check-fat-bold'
import { CheckFatDuotone } from '../duotone/check-fat-duotone'
import { CheckFatFill } from '../fill/check-fat-fill'
import { CheckFatLight } from '../light/check-fat-light'
import { CheckFatRegular } from '../regular/check-fat-regular'
import { CheckFatThin } from '../thin/check-fat-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CheckFatRegular,
  bold: CheckFatBold,
  duotone: CheckFatDuotone,
  fill: CheckFatFill,
  light: CheckFatLight,
  thin: CheckFatThin,
} as const

export const CheckFat = (props: IconProps) => {
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
