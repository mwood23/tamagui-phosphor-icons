import { useContext } from 'react'

import { TentBold } from '../bold/tent-bold'
import { TentDuotone } from '../duotone/tent-duotone'
import { TentFill } from '../fill/tent-fill'
import { TentLight } from '../light/tent-light'
import { TentRegular } from '../regular/tent-regular'
import { TentThin } from '../thin/tent-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TentRegular,
  bold: TentBold,
  duotone: TentDuotone,
  fill: TentFill,
  light: TentLight,
  thin: TentThin,
} as const

export const Tent = (props: IconProps) => {
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
