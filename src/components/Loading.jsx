import React from "react"
import { StyleSheet, View, Text } from "react-native"

const Loading = () => {
   return (
      <View style={styles.container}>
         <Text>Loading, please wait</Text>
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

export default Loading
