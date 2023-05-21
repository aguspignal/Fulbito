import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../utils/theme"

const PasswordRecovery = () => {
   return (
      <View style={styles.container}>
         <Text>Password Recovery</Text>
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
