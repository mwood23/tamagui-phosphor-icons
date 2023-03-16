import { useContext } from 'react'

import { HighHeelBold } from '../bold/high-heel-bold'
import { HighHeelDuotone } from '../duotone/high-heel-duotone'
import { HighHeelFill } from '../fill/high-heel-fill'
import { HighHeelLight } from '../light/high-heel-light'
import { HighHeelRegular } from '../regular/high-heel-regular'
import { HighHeelThin } from '../thin/high-heel-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HighHeelRegular,
  bold: HighHeelBold,
  duotone: HighHeelDuotone,
  fill: HighHeelFill,
  light: HighHeelLight,
  thin: HighHeelThin,
} as const

export const HighHeel = (props: IconProps) => {
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
