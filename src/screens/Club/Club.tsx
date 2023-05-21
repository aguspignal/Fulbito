import { StyleSheet, Text, View } from "react-native"
import React from "react"

const Club = () => {
   return (
      <View style={styles.container}>
         <Text>Club</Text>
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

export default Club
