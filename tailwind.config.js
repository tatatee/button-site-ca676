const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: 
            /* Temporarily disabling background image
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            */
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                forest: {
                    ...require('daisyui/src/theming/themes')['forest'],
                    'base-100': 'oklch(97.788% 0.004 56.375)',
                    'base-200': 'oklch(93.982% 0.007 61.449)',
                    'base-300': 'oklch(91.586% 0.006 53.44)',
                    'base-content': 'oklch(23.574% 0.066 313.189)'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
