import { useContext } from 'react'

import { UniteBold } from '../bold/unite-bold'
import { UniteDuotone } from '../duotone/unite-duotone'
import { UniteFill } from '../fill/unite-fill'
import { UniteLight } from '../light/unite-light'
import { UniteRegular } from '../regular/unite-regular'
import { UniteThin } from '../thin/unite-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: UniteRegular,
  bold: UniteBold,
  duotone: UniteDuotone,
  fill: UniteFill,
  light: UniteLight,
  thin: UniteThin,
} as const

export const Unite = (props: IconProps) => {
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
