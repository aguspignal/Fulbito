const pallete = {
   black: "#3A3A3A",
   white: "#FEFEFE",
   grey: "#65737E",
   grey50: "#65737E88",
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
      lightgrey: pallete.grey50,
      primary: pallete.green,
      darkprimary: pallete.darkgreen,
      secondary: pallete.blue,
      darksecondary: pallete.darkblue,
      darkersecondary: pallete.darkerblue,
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
      xs: 14,
      s: 16,
      m: 18,
      l: 22,
      xl: 32,
   },

   textVariants: {
      h1: {
         fontSize: 32,
      },
      h2: {
         fontSize: 24,
      },
      h3: {
         fontSize: 24,
      },
      body: {
         fontSize: 16,
      },
   },

   textWeights: {
      thin: 400,
      regular: 500,
      bold: 600
   }
}
