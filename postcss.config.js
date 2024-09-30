export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    darkMode: 'selector',
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
