/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {colors: {
      primary: "#FACC15",
      secondary: "#1A1B1F",
      background: "#141518",
      gray01: "#26272B",
      gray02: "#4E525B",
      gray03: "#838896",
    },
    backgroundImage: {
      slide: "url('/assets/background_slide.png')",
      contacts: "url('/assets/background_contatos.png')",
    },
    fontFamily: {
      'paytone': ['Paytone One', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

