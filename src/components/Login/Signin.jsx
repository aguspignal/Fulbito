import React, { useContext, useState } from "react"
import { UserContext } from "../../context/UserContextProvider"
import { StyleSheet, Text, View } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button, TextInput } from "react-native-paper"
import { auth } from "../../../firebaseConfig/config"

const SignIn = ({ navigation }) => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const { signIn } = useContext(UserContext)

   async function handleSignIn() {
      try {
         const userCredentials = await signInWithEmailAndPassword(
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
      <View style={styles.container}>
         <View>
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.formContainer}>
               <TextInput
                  label="Email"
                  value={email}
                  onChangeText={input => setEmail(input)}
                  selectionColor="#0B3340"
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
                  onPress={handleSignIn}
               >
                  Sign In
               </Button>
            </View>
         </View>

         <View style={{ alignItems: "center" }}>
            <Button
               mode="text"
               textColor="#35C97D"
               style={styles.title}
               onPress={() => navigation.navigate("Signup")}
            >
               Don't have an account? Sign up
            </Button>
         </View>
      </View>
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
      height: 50,
      marginVertical: 10,
   },
})

export default SignIn
