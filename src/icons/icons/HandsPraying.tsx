import { useContext } from 'react'

import { HandsPrayingBold } from '../bold/hands-praying-bold'
import { HandsPrayingDuotone } from '../duotone/hands-praying-duotone'
import { HandsPrayingFill } from '../fill/hands-praying-fill'
import { HandsPrayingLight } from '../light/hands-praying-light'
import { HandsPrayingRegular } from '../regular/hands-praying-regular'
import { HandsPrayingThin } from '../thin/hands-praying-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandsPrayingRegular,
  bold: HandsPrayingBold,
  duotone: HandsPrayingDuotone,
  fill: HandsPrayingFill,
  light: HandsPrayingLight,
  thin: HandsPrayingThin,
} as const

export const HandsPraying = (props: IconProps) => {
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
