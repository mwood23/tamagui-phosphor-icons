import { useContext } from 'react'

import { CrossBold } from '../bold/cross-bold'
import { CrossDuotone } from '../duotone/cross-duotone'
import { CrossFill } from '../fill/cross-fill'
import { CrossLight } from '../light/cross-light'
import { CrossRegular } from '../regular/cross-regular'
import { CrossThin } from '../thin/cross-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CrossRegular,
  bold: CrossBold,
  duotone: CrossDuotone,
  fill: CrossFill,
  light: CrossLight,
  thin: CrossThin,
} as const

export const Cross = (props: IconProps) => {
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
