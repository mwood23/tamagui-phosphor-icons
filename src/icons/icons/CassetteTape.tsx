import { useContext } from 'react'

import { CassetteTapeBold } from '../bold/cassette-tape-bold'
import { CassetteTapeDuotone } from '../duotone/cassette-tape-duotone'
import { CassetteTapeFill } from '../fill/cassette-tape-fill'
import { CassetteTapeLight } from '../light/cassette-tape-light'
import { CassetteTapeRegular } from '../regular/cassette-tape-regular'
import { CassetteTapeThin } from '../thin/cassette-tape-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CassetteTapeRegular,
  bold: CassetteTapeBold,
  duotone: CassetteTapeDuotone,
  fill: CassetteTapeFill,
  light: CassetteTapeLight,
  thin: CassetteTapeThin,
} as const

export const CassetteTape = (props: IconProps) => {
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
