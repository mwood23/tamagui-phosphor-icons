# Phosphor Tamagui Icons

Phosphor icons ready for Tamagui. Universal by default.

## Usage

```tsx
import {House} from 'tamagui-phosphor-icons'

const Foo = () => <YStack><House/></YStack>
```

### Context

You can optionally wrap your app in an icon provider to default the weights and colors for all icons. The color property takes any token you have created. You can override this setting at each call-site.

```tsx
import { IconContextProvider } from 'tamagui-phosphor-icons'

const App = () => {

  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme="light"
    >
      <IconContextProvider value={{ weight: 'regular', color: '$primary.500' }}>
        {children}
      </IconContextProvider>
    </TamaguiProvider>
  )
}
```

## Credits

All credits go to the amazing [Phosphor Icons Team](https://phosphoricons.com/)!
