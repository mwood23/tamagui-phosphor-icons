import { useContext } from 'react'

import { WechatLogoBold } from '../bold/wechat-logo-bold'
import { WechatLogoDuotone } from '../duotone/wechat-logo-duotone'
import { WechatLogoFill } from '../fill/wechat-logo-fill'
import { WechatLogoLight } from '../light/wechat-logo-light'
import { WechatLogoRegular } from '../regular/wechat-logo-regular'
import { WechatLogoThin } from '../thin/wechat-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WechatLogoRegular,
  bold: WechatLogoBold,
  duotone: WechatLogoDuotone,
  fill: WechatLogoFill,
  light: WechatLogoLight,
  thin: WechatLogoThin,
} as const

export const WechatLogo = (props: IconProps) => {
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
