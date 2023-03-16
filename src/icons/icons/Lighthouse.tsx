import { useContext } from 'react'

import { LighthouseBold } from '../bold/lighthouse-bold'
import { LighthouseDuotone } from '../duotone/lighthouse-duotone'
import { LighthouseFill } from '../fill/lighthouse-fill'
import { LighthouseLight } from '../light/lighthouse-light'
import { LighthouseRegular } from '../regular/lighthouse-regular'
import { LighthouseThin } from '../thin/lighthouse-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: LighthouseRegular,
  bold: LighthouseBold,
  duotone: LighthouseDuotone,
  fill: LighthouseFill,
  light: LighthouseLight,
  thin: LighthouseThin,
} as const

export const Lighthouse = (props: IconProps) => {
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
