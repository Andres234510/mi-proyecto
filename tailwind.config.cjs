module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purplebrand: {
          50: '#f6f2ff',
          100: '#efe7ff',
          300: '#c084fc',
          500: '#7c3aed',
          700: '#5b21b6'
        }
      },
      boxShadow: {
        'md-purple': '0 10px 30px rgba(124,58,237,0.18)'
      },
      borderRadius: {
        'xl-2': '18px'
      }
    }
  },
  plugins: []
};
