export default {
  theme: {
    fontFamily: {
      albertus: ['Albertus MT', 'Arial'],
      omnial: ['Omnia LT Std', 'Arial'],
      sachwt: ['SachaWynterTight', 'Arial'],
    },
    extend: {
      keyframes: {
        translatex: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        translatex: 'translatex 2.5s linear infinite',
      },
      backgroundImage: theme => ({
        'main-bg': "url('@/assets/background.webp')",
      }),
    },
  },
  plugins: [require('windicss/plugin/aspect-ratio')],
}
