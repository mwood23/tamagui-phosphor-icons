import { useContext } from 'react'

import { ShareFatBold } from '../bold/share-fat-bold'
import { ShareFatDuotone } from '../duotone/share-fat-duotone'
import { ShareFatFill } from '../fill/share-fat-fill'
import { ShareFatLight } from '../light/share-fat-light'
import { ShareFatRegular } from '../regular/share-fat-regular'
import { ShareFatThin } from '../thin/share-fat-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ShareFatRegular,
  bold: ShareFatBold,
  duotone: ShareFatDuotone,
  fill: ShareFatFill,
  light: ShareFatLight,
  thin: ShareFatThin,
} as const

export const ShareFat = (props: IconProps) => {
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
