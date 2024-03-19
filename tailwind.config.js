/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {      
      'tablet': '560px',
      'desktop': '720px',
    },
    
    
    extend: {
      fontFamily : {
        Bellefair : ['Bellefair', 'serif'],
        Barlow : ["Barlow Condensed", 'sans-serif'],
        Roboto: ["Roboto Condensed", 'sans-serif']
      },

      lineHeight: {
        'mid-tight': '1.1'
      },
     inset : {
      "added": "0 0 0 30%"
     }
    }
  },
  plugins: [],
}








        

