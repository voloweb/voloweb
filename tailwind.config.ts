import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        roboto: 'var(--roboto-font)',
        montserrat: 'var(--montserrat-font)'
      },
      colors: {
        black: '#000',
        white: '#fff',
        footer: 'rgba(30, 40, 51, 0.98)',
        ourteam: 'rgba(248, 249, 250, 1)',
        primaria: {
          1: '',
          2: '',
          3: '',
          4: 'rgba(13, 59, 102, 0.1)'
        },
        neutra: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529'
        },
        semantica: {
          1: '#0D3B66',
          2: '',
          3: '',
          4: '#E6553F',
          5: '#FF6851',
          6: '#FC8674',
          7: '#EAAB00',
          8: '#FFBB01',
          9: '#FBCF57'
        }
      }
    }
  },
  plugins: []
}
export default config
