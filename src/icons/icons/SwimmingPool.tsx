import { useContext } from 'react'

import { SwimmingPoolBold } from '../bold/swimming-pool-bold'
import { SwimmingPoolDuotone } from '../duotone/swimming-pool-duotone'
import { SwimmingPoolFill } from '../fill/swimming-pool-fill'
import { SwimmingPoolLight } from '../light/swimming-pool-light'
import { SwimmingPoolRegular } from '../regular/swimming-pool-regular'
import { SwimmingPoolThin } from '../thin/swimming-pool-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SwimmingPoolRegular,
  bold: SwimmingPoolBold,
  duotone: SwimmingPoolDuotone,
  fill: SwimmingPoolFill,
  light: SwimmingPoolLight,
  thin: SwimmingPoolThin,
} as const

export const SwimmingPool = (props: IconProps) => {
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
