const pallete = {
   black: "#3A3A3A",
   white: "#FEFEFE",
   grey: "#ADB5BD",
   green: "#35C97D",
   darkgreen: "#258C57",
   lightblue: "#00C6EE",
   blue: "#219EBC",
   darkblue: "#0B3340",
   darkerblue: "#07232C",
   red: "#E95D75",
   yellow: "#FED35D",
}

export const theme = {
   colors: {
      white: pallete.white,
      black: pallete.black,
      grey: pallete.grey,
      primary: pallete.green,
      darkprimary: pallete.darkgreen,
      darkersecondary: pallete.darkblue,
      darksecondary: pallete.darkblue,
      secondary: pallete.blue,
      lightsecondary: pallete.lightblue,
      danger: pallete.red,
      warning: pallete.yellow,
   },

   spacing: {
      s: 4 ,
      m: 8,
      l: 12,
      xl: 16,
   },

   fontSize: {
      m: 16,
      s: 14,
      l: 18,
      xl: 24,
   },

   textVariants: {
      h1: {
         fontSize: 32,
         fontWeight: 600,
      },
      h2: {
         fontSize: 28,
         fontWeight: 500,
      },
      h3: {
         fontSize: 24,
         fontWeight: 500,
      },
      body: {
         fontSize: 16,
      },
   },
}
