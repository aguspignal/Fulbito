import { StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import useAuth from "../../hooks/useAuth"

const Agenda = () => {
   const { auth } = useAuth()

   useEffect(() => {
      console.log("Agenda says: active user is")
      console.log(auth)
   }, [])

   return (
      <View style={styles.container}>
         <Text>Welcome {auth?.username}</Text>
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

export default Agenda
