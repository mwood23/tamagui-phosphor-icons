import { useContext } from 'react'

import { MedalMilitaryBold } from '../bold/medal-military-bold'
import { MedalMilitaryDuotone } from '../duotone/medal-military-duotone'
import { MedalMilitaryFill } from '../fill/medal-military-fill'
import { MedalMilitaryLight } from '../light/medal-military-light'
import { MedalMilitaryRegular } from '../regular/medal-military-regular'
import { MedalMilitaryThin } from '../thin/medal-military-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MedalMilitaryRegular,
  bold: MedalMilitaryBold,
  duotone: MedalMilitaryDuotone,
  fill: MedalMilitaryFill,
  light: MedalMilitaryLight,
  thin: MedalMilitaryThin,
} as const

export const MedalMilitary = (props: IconProps) => {
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
