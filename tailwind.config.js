module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  variants: ["responsive", "group-hover", "hover", "focus"],
  plugins: [
    require('@themesberg/flowbite/plugin')
],
}
