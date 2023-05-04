import React, { useContext, useState } from "react"
import { UserContext } from "../../context/UserContextProvider"
import { StyleSheet, Text, View } from "react-native"
import { KeyboardAvoidingView } from "react-native"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Button, TextInput } from "react-native-paper"
import { auth } from "../../../firebaseConfig/config"
import useUser from "../../hooks/useUser"

const SignIn = ({ navigation }) => {
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const { signIn } = useUser()

   async function handleSignUp() {
      try {
         const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         )
         signIn(userCredentials.user)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
         <View>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.formContainer}>
               <TextInput
                  label="Username"
                  value={username}
                  onChangeText={input => setUsername(input)}
                  placeholderTextColor="#219EBC"
                  activeUnderlineColor="#219EBC"
                  underlineColor="#219EBC"
                  style={styles.input}
               />

               <TextInput
                  label="Email"
                  value={email}
                  onChangeText={input => setEmail(input)}
                  placeholderTextColor="#219EBC"
                  activeUnderlineColor="#219EBC"
                  style={styles.input}
               />

               <TextInput
                  label="Password"
                  value={password}
                  onChangeText={input => setPassword(input)}
                  selectionColor="#0B3340"
                  placeholderTextColor="#219EBC"
                  activeUnderlineColor="#219EBC"
                  secureTextEntry
                  style={styles.input}
               />
            </View>

            <View style={{ alignItems: "center" }}>
               <Button
                  mode="contained"
                  buttonColor="#35C97D"
                  onPress={handleSignUp}
               >
                  Sign Up
               </Button>
            </View>
         </View>

         <View style={{ alignItems: "center" }}>
            <Button
               mode="text"
               textColor="#35C97D"
               style={styles.title}
               onPress={() => navigation.navigate("Signin")}
            >
               Already have an account? Sign in
            </Button>
         </View>
      </KeyboardAvoidingView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
      backgroundColor: "#0B3340",
   },
   title: {
      color: "#fefefe",
      fontWeight: "600",
      fontSize: 24,
      textAlign: "center",
   },
   text: {
      color: "#fefefe",
      fontSize: 18,
   },
   formContainer: {
      width: "70%",
      marginVertical: 30,
      alignSelf: "center",
   },
   input: {
      marginVertical: 10,
      height: 52,
   },
})

export default SignIn
