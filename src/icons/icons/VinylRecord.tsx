import { useContext } from 'react'

import { VinylRecordBold } from '../bold/vinyl-record-bold'
import { VinylRecordDuotone } from '../duotone/vinyl-record-duotone'
import { VinylRecordFill } from '../fill/vinyl-record-fill'
import { VinylRecordLight } from '../light/vinyl-record-light'
import { VinylRecordRegular } from '../regular/vinyl-record-regular'
import { VinylRecordThin } from '../thin/vinyl-record-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: VinylRecordRegular,
  bold: VinylRecordBold,
  duotone: VinylRecordDuotone,
  fill: VinylRecordFill,
  light: VinylRecordLight,
  thin: VinylRecordThin,
} as const

export const VinylRecord = (props: IconProps) => {
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
