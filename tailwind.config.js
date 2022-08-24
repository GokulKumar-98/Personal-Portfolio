/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        updown: 'bounce 3s ease-in-out infinite',
        updn: 'mover 1s infinite  alternate',
      },
      keyframes: {
        mover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
    fontFamily: { poppins: ['Poppins'], centra: ['Centra'] },
    screens: {
      xlx: { max: '1350px' },
      lgx: { max: '1023px' },
      mdx: { max: '850px' },
      msx: { max: '768px' },
    },
    backgroundImage: {
      'banner-bg': "url('./assets/img/banner-bg.png')",
    },
  },
  plugins: [],
};
