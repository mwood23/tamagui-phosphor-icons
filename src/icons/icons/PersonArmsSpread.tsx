import { useContext } from 'react'

import { PersonArmsSpreadBold } from '../bold/person-arms-spread-bold'
import { PersonArmsSpreadDuotone } from '../duotone/person-arms-spread-duotone'
import { PersonArmsSpreadFill } from '../fill/person-arms-spread-fill'
import { PersonArmsSpreadLight } from '../light/person-arms-spread-light'
import { PersonArmsSpreadRegular } from '../regular/person-arms-spread-regular'
import { PersonArmsSpreadThin } from '../thin/person-arms-spread-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PersonArmsSpreadRegular,
  bold: PersonArmsSpreadBold,
  duotone: PersonArmsSpreadDuotone,
  fill: PersonArmsSpreadFill,
  light: PersonArmsSpreadLight,
  thin: PersonArmsSpreadThin,
} as const

export const PersonArmsSpread = (props: IconProps) => {
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
