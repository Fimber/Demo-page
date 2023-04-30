import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

const primaryTheme = {
  "primary": {
    "50": "#f9f6fd",
    "100": "#e7dbf9",
    "200": "#d2bcf3",
    "300": "#b896ec",
    "400": "#a980e9",
    "500": "#9461e3",
    "600": "#8145de",
    "700": "#6926d0",
    "800": "#5921b1",
    "900": "#411881"
  }
}

const secondaryTheme = {
    "secondary": {
        "50": "#fdf5f9",
        "100": "#f8d9e7",
        "200": "#f3b9d3",
        "300": "#eb8db8",
        "400": "#e56ba2",
        "500": "#dc3882",
        "600": "#c4246c",
        "700": "#a01d58",
        "800": "#7d1745",
        "900": "#5d1133"
      }
}

const theme = extendTheme({
    primaryTheme, secondaryTheme
  }, baseTheme)
  
export default theme