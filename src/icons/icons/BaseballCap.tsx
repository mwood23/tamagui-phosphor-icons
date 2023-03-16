import { useContext } from 'react'

import { BaseballCapBold } from '../bold/baseball-cap-bold'
import { BaseballCapDuotone } from '../duotone/baseball-cap-duotone'
import { BaseballCapFill } from '../fill/baseball-cap-fill'
import { BaseballCapLight } from '../light/baseball-cap-light'
import { BaseballCapRegular } from '../regular/baseball-cap-regular'
import { BaseballCapThin } from '../thin/baseball-cap-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BaseballCapRegular,
  bold: BaseballCapBold,
  duotone: BaseballCapDuotone,
  fill: BaseballCapFill,
  light: BaseballCapLight,
  thin: BaseballCapThin,
} as const

export const BaseballCap = (props: IconProps) => {
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
