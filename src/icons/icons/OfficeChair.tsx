import { useContext } from 'react'

import { OfficeChairBold } from '../bold/office-chair-bold'
import { OfficeChairDuotone } from '../duotone/office-chair-duotone'
import { OfficeChairFill } from '../fill/office-chair-fill'
import { OfficeChairLight } from '../light/office-chair-light'
import { OfficeChairRegular } from '../regular/office-chair-regular'
import { OfficeChairThin } from '../thin/office-chair-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: OfficeChairRegular,
  bold: OfficeChairBold,
  duotone: OfficeChairDuotone,
  fill: OfficeChairFill,
  light: OfficeChairLight,
  thin: OfficeChairThin,
} as const

export const OfficeChair = (props: IconProps) => {
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
