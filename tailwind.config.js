export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Pretendard', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        iphone: '0 18px 48px rgba(15, 23, 42, 0.10)'
      }
    }
  },
  plugins: []
}
