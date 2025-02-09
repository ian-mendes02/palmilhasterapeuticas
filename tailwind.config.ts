import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                ps: {
                    primary: {
                        DEFAULT: '#0986bf',
                        light: '#58a5f7',
                        dark: '#0c6b96'
                    },
                    green: {
                        DEFAULT: '#45f063',
                        dark: '#46c15c'
                    },
                    cyan: '#11e9de',
                    dark: '#1E3050',
                    info: '#0986bf',
                    warn: '#ffba00',
                    error: '#cf5241'
                }
            }
        }
    },
    plugins: []
}

export default config
