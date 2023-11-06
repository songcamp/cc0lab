import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: '#EFEFEF',
      green: '#73DFC7',
      red: '#DC0A17',
      yellow: '#FEFFEF',
    },
    extend: {
      backgroundImage: {
        checkered: "url(/bg-checkered.png)",
        'art-01': "url(/bg-art-01.png)",
        'art-02': "url(/bg-art-02.png)",
        'art-03': "url(/bg-art-03.png)",
        'art-04': "url(/bg-art-04.png)",
        'art-05': "url(/bg-art-05.png)",
        'art-06': "url(/bg-art-06.png)",
        'art-07': "url(/bg-art-07.png)",
        'art-08': "url(/bg-art-08.png)",
        'art-09': "url(/bg-art-09.png)",
        'art-10': "url(/bg-art-10.png)",
        'art-11': "url(/bg-art-11.png)",
        'art-12': "url(/bg-art-12.png)"
      },
      fontFamily: {
        displayUnderscored: ["var(--font-bp-typewrite-underscored)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-bp-typewrite)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-ft88)", ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [
    // TODO handle custom screens
    plugin(({addVariant, theme}) => {
      const screens = theme('screens') as Record<string, string>;
      for (const k in screens) {
        addVariant(`v-${k}`, `@media (min-height: ${screens[k]})`)
      }
    })
  ],
}
export default config