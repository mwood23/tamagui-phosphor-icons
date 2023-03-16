import { useContext } from 'react'

import { OrangeSliceBold } from '../bold/orange-slice-bold'
import { OrangeSliceDuotone } from '../duotone/orange-slice-duotone'
import { OrangeSliceFill } from '../fill/orange-slice-fill'
import { OrangeSliceLight } from '../light/orange-slice-light'
import { OrangeSliceRegular } from '../regular/orange-slice-regular'
import { OrangeSliceThin } from '../thin/orange-slice-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: OrangeSliceRegular,
  bold: OrangeSliceBold,
  duotone: OrangeSliceDuotone,
  fill: OrangeSliceFill,
  light: OrangeSliceLight,
  thin: OrangeSliceThin,
} as const

export const OrangeSlice = (props: IconProps) => {
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
