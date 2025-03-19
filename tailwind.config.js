/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#FFF6E9',
        rgbGreen: '#0D9276',
        rgbHex:'#FAC670',
        rgbGray:'#45474B',
      },
      hieght: {
        'custom-500': '500px',
        'custom-450': '450px',
        'custom-700': '700px',
        
        
      },
      percentage: {
        c55:'55%',

      },
      backgroundImage: {
        'custom-grid': `linear-gradient(0deg, transparent 24%, #E1E1E1 25%, #E1E1E1 26%, transparent 27%,transparent 74%, #E1E1E1 75%, #E1E1E1 76%, transparent 77%,transparent),
                        linear-gradient(90deg, transparent 24%, #E1E1E1 25%, #E1E1E1 26%, transparent 27%,transparent 74%, #E1E1E1 75%, #E1E1E1 76%, transparent 77%,transparent)`
      },
      backgroundSize: {
        'grid-size': '55px 55px'
      },
      
    },
  },
  plugins: [],
};
