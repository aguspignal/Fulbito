import { Button } from "react-native-paper"
import { StyleSheet, View } from "react-native"
import React from "react"
import useAuth from "../../hooks/useAuth"
import { theme } from "../../utils/theme"

const Account = () => {
   const { signOut } = useAuth()

   return (
      <View style={styles.container}>
         <Button
            mode="contained"
            textColor="#fafafa"
            buttonColor={theme.colors.danger}
            onPress={signOut}
         >
            Sign Out
         </Button>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
})

export default Account
