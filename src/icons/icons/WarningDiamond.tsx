import { useContext } from 'react'

import { WarningDiamondBold } from '../bold/warning-diamond-bold'
import { WarningDiamondDuotone } from '../duotone/warning-diamond-duotone'
import { WarningDiamondFill } from '../fill/warning-diamond-fill'
import { WarningDiamondLight } from '../light/warning-diamond-light'
import { WarningDiamondRegular } from '../regular/warning-diamond-regular'
import { WarningDiamondThin } from '../thin/warning-diamond-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WarningDiamondRegular,
  bold: WarningDiamondBold,
  duotone: WarningDiamondDuotone,
  fill: WarningDiamondFill,
  light: WarningDiamondLight,
  thin: WarningDiamondThin,
} as const

export const WarningDiamond = (props: IconProps) => {
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
