import 'styled-components'

declare module 'styled-components' {
    export interface ITheme {
        name: string
        pallete: {
            primary: {
                main: string
                main2: string
                secondary: string
                white: string
                text: string
            }
        }
    }
}