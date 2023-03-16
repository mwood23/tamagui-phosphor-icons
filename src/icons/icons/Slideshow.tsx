import { useContext } from 'react'

import { SlideshowBold } from '../bold/slideshow-bold'
import { SlideshowDuotone } from '../duotone/slideshow-duotone'
import { SlideshowFill } from '../fill/slideshow-fill'
import { SlideshowLight } from '../light/slideshow-light'
import { SlideshowRegular } from '../regular/slideshow-regular'
import { SlideshowThin } from '../thin/slideshow-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SlideshowRegular,
  bold: SlideshowBold,
  duotone: SlideshowDuotone,
  fill: SlideshowFill,
  light: SlideshowLight,
  thin: SlideshowThin,
} as const

export const Slideshow = (props: IconProps) => {
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
