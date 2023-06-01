import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../../components/StyledComponents/TextStyled"

const PasswordRecovery = () => {
   return (
      <View style={styles.container}>
         <TextStyled variant="h2" align="center">
            Password Recovery
         </TextStyled>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
      backgroundColor: theme.colors.darksecondary,
   },
})

export default PasswordRecovery
