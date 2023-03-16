import { useContext } from 'react'

import { VanBold } from '../bold/van-bold'
import { VanDuotone } from '../duotone/van-duotone'
import { VanFill } from '../fill/van-fill'
import { VanLight } from '../light/van-light'
import { VanRegular } from '../regular/van-regular'
import { VanThin } from '../thin/van-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: VanRegular,
  bold: VanBold,
  duotone: VanDuotone,
  fill: VanFill,
  light: VanLight,
  thin: VanThin,
} as const

export const Van = (props: IconProps) => {
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
