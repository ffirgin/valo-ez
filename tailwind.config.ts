import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        valorant: {
          red: '#FF4655',
          'red-dark': '#BD3944',
          ink: '#0F1923',
          panel: '#1B2530',
          line: '#2C3640',
          white: '#ECE8E1',
          grey: '#768079',
        },
      },
    },
  },
  plugins: [],
}
export default config
