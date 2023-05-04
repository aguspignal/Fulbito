import useUser from "../../hooks/useUser"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"

const Home = () => {
   const { signOut } = useUser()

   return (
      <View style={styles.container}>
         <Text>Welcome</Text>
         <Button mode="contained" buttonColor="#E95D75" onPress={signOut}>
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

export default Home
