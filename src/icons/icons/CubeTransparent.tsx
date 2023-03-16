import { useContext } from 'react'

import { CubeTransparentBold } from '../bold/cube-transparent-bold'
import { CubeTransparentDuotone } from '../duotone/cube-transparent-duotone'
import { CubeTransparentFill } from '../fill/cube-transparent-fill'
import { CubeTransparentLight } from '../light/cube-transparent-light'
import { CubeTransparentRegular } from '../regular/cube-transparent-regular'
import { CubeTransparentThin } from '../thin/cube-transparent-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CubeTransparentRegular,
  bold: CubeTransparentBold,
  duotone: CubeTransparentDuotone,
  fill: CubeTransparentFill,
  light: CubeTransparentLight,
  thin: CubeTransparentThin,
} as const

export const CubeTransparent = (props: IconProps) => {
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
