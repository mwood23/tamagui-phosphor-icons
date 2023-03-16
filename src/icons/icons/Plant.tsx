import { useContext } from 'react'

import { PlantBold } from '../bold/plant-bold'
import { PlantDuotone } from '../duotone/plant-duotone'
import { PlantFill } from '../fill/plant-fill'
import { PlantLight } from '../light/plant-light'
import { PlantRegular } from '../regular/plant-regular'
import { PlantThin } from '../thin/plant-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PlantRegular,
  bold: PlantBold,
  duotone: PlantDuotone,
  fill: PlantFill,
  light: PlantLight,
  thin: PlantThin,
} as const

export const Plant = (props: IconProps) => {
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
