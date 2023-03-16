import { useContext } from 'react'

import { ToothBold } from '../bold/tooth-bold'
import { ToothDuotone } from '../duotone/tooth-duotone'
import { ToothFill } from '../fill/tooth-fill'
import { ToothLight } from '../light/tooth-light'
import { ToothRegular } from '../regular/tooth-regular'
import { ToothThin } from '../thin/tooth-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ToothRegular,
  bold: ToothBold,
  duotone: ToothDuotone,
  fill: ToothFill,
  light: ToothLight,
  thin: ToothThin,
} as const

export const Tooth = (props: IconProps) => {
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
