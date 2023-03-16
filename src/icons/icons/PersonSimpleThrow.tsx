import { useContext } from 'react'

import { PersonSimpleThrowBold } from '../bold/person-simple-throw-bold'
import { PersonSimpleThrowDuotone } from '../duotone/person-simple-throw-duotone'
import { PersonSimpleThrowFill } from '../fill/person-simple-throw-fill'
import { PersonSimpleThrowLight } from '../light/person-simple-throw-light'
import { PersonSimpleThrowRegular } from '../regular/person-simple-throw-regular'
import { PersonSimpleThrowThin } from '../thin/person-simple-throw-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PersonSimpleThrowRegular,
  bold: PersonSimpleThrowBold,
  duotone: PersonSimpleThrowDuotone,
  fill: PersonSimpleThrowFill,
  light: PersonSimpleThrowLight,
  thin: PersonSimpleThrowThin,
} as const

export const PersonSimpleThrow = (props: IconProps) => {
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
