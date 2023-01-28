import { useContext } from 'react'

import { PersonSimpleWalkBold } from '../bold/person-simple-walk-bold'
import { PersonSimpleWalkDuotone } from '../duotone/person-simple-walk-duotone'
import { PersonSimpleWalkFill } from '../fill/person-simple-walk-fill'
import { PersonSimpleWalkLight } from '../light/person-simple-walk-light'
import { PersonSimpleWalkRegular } from '../regular/person-simple-walk-regular'
import { PersonSimpleWalkThin } from '../thin/person-simple-walk-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PersonSimpleWalkRegular,
  bold: PersonSimpleWalkBold,
  duotone: PersonSimpleWalkDuotone,
  fill: PersonSimpleWalkFill,
  light: PersonSimpleWalkLight,
  thin: PersonSimpleWalkThin,
} as const

export const PersonSimpleWalk = (props: IconProps) => {
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
