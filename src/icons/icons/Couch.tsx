import { useContext } from 'react'

import { CouchBold } from '../bold/couch-bold'
import { CouchDuotone } from '../duotone/couch-duotone'
import { CouchFill } from '../fill/couch-fill'
import { CouchLight } from '../light/couch-light'
import { CouchRegular } from '../regular/couch-regular'
import { CouchThin } from '../thin/couch-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CouchRegular,
  bold: CouchBold,
  duotone: CouchDuotone,
  fill: CouchFill,
  light: CouchLight,
  thin: CouchThin,
} as const

export const Couch = (props: IconProps) => {
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
