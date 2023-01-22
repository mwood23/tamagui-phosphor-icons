# Phosphor Tamagui Icons

Phosphor icons ready for Tamagui. Universal by default.

## Installation

```
npm install tamagui-phosphor-icons
```

### next.config.js

If you are using Next please add these fields to your config:

```js
  /** @type {import('next').NextConfig} */
  let config = {
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      // this line!!
      'tamagui-phosphor-icons',
    ],
    // ...
    modularizeImports: {
      'tamagui-phosphor-icons': {
        transform: 'tamagui-phosphor-icons/dist/jsx/icons/icons/{{member}}',
        skipDefaultConversion: true,
      },
    },
  }
```

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
