import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"

const Login = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Welcome to FULBITO APP</Text>
         <View style={styles.btnsContainer}>
            <Button
               mode="contained"
               buttonColor="#35C97D"
               onPress={() => navigation.navigate("Signin")}
            >
               Sign in
            </Button>
            <Button
               mode="contained"
               buttonColor="#35C97D"
               onPress={() => navigation.navigate("Signup")}
            >
               Sign up
            </Button>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#0B3340",
   },
   btn: {
      marginVertical: 20,
   },
   btnsContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
   },
   title: {
      color: "#fefefe",
      fontWeight: "600",
      fontSize: 24,
   },
})

export default Login
