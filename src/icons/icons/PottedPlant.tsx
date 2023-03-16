import { useContext } from 'react'

import { PottedPlantBold } from '../bold/potted-plant-bold'
import { PottedPlantDuotone } from '../duotone/potted-plant-duotone'
import { PottedPlantFill } from '../fill/potted-plant-fill'
import { PottedPlantLight } from '../light/potted-plant-light'
import { PottedPlantRegular } from '../regular/potted-plant-regular'
import { PottedPlantThin } from '../thin/potted-plant-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PottedPlantRegular,
  bold: PottedPlantBold,
  duotone: PottedPlantDuotone,
  fill: PottedPlantFill,
  light: PottedPlantLight,
  thin: PottedPlantThin,
} as const

export const PottedPlant = (props: IconProps) => {
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
