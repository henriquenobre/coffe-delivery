import 'styled-components'
import { light } from '../styles/themes/ligth'

type ThemeType = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
