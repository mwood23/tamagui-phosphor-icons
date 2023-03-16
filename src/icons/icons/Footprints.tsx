import { useContext } from 'react'

import { FootprintsBold } from '../bold/footprints-bold'
import { FootprintsDuotone } from '../duotone/footprints-duotone'
import { FootprintsFill } from '../fill/footprints-fill'
import { FootprintsLight } from '../light/footprints-light'
import { FootprintsRegular } from '../regular/footprints-regular'
import { FootprintsThin } from '../thin/footprints-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FootprintsRegular,
  bold: FootprintsBold,
  duotone: FootprintsDuotone,
  fill: FootprintsFill,
  light: FootprintsLight,
  thin: FootprintsThin,
} as const

export const Footprints = (props: IconProps) => {
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
