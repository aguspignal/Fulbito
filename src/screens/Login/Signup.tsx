import { auth_errors } from "../../utils/auth-errors"
import { Button, Snackbar } from "react-native-paper"
import { clubsArg } from "../../utils/clubs-arg"
import { getErrorTitle } from "../../firebase/actions"
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view"
import { Picker } from "@react-native-picker/picker"
import { ResultError } from "../../types/formTypes"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import { useState } from "react"
import Input from "../../components/Form/Input"
import TextStyled from "../../components/StyledComponents/TextStyled"
import useAuth from "../../hooks/useAuth"

interface Props {
   navigation: any
}

const SignIn = ({ navigation }: Props) => {
   const [email, setEmail] = useState<string>("")
   const [password, setPassword] = useState<string>("")
   const [username, setUsername] = useState<string>("")
   const [clubHincha, setClubHincha] = useState<string>("")

   const [error, setError] = useState<string | null>(null)
   const [errorVisible, setErrorVisible] = useState(false)

   const { signUp } = useAuth()

   const clubs = clubsArg.map(club => <Picker.Item key={clubsArg.indexOf(club)} label={club} value={club} />)

   async function handleSignUp() {
      if (username.length <= 0 || !username) {
         setError(getErrorTitle(auth_errors.INVALID_USERNAME))
         setErrorVisible(true)
         return
      }
      if (email.length <= 0 || !email) {
         setError(getErrorTitle(auth_errors.INVALID_EMAIL))
         setErrorVisible(true)
         return
      }
      if (password.length <= 0 || !password) {
         setError(getErrorTitle(auth_errors.INVALID_PASSWORD))
         setErrorVisible(true)
         return
      }
      if (clubHincha.length <= 0 || !clubHincha) {
         setError(getErrorTitle(auth_errors.INVALID_CLUBHINCHA))
         setErrorVisible(true)
         return
      }

      const result: ResultError = await signUp(email, password, username, clubHincha)

      if (result.status) {
         console.log(result)
         setError(getErrorTitle(result.code))
         setErrorVisible(true)
      }
   }

   return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         <View>
            <TextStyled variant="h2" align="center" color="white">
               Create an account
            </TextStyled>

            <View style={styles.formContainer}>
               <Input state={username} setState={setUsername} placeholder="Username" style={styles.inputMargin} />

               <Input state={email} setState={setEmail} placeholder="Email" style={styles.inputMargin} />

               <Input
                  state={password}
                  setState={setPassword}
                  placeholder="Password"
                  securedEntry={true}
                  style={styles.inputMargin}
               />

               <View style={[styles.inputPicker]}>
                  <TextStyled size="m" color="white">
                     Hincha de:
                  </TextStyled>
                  <Picker
                     selectedValue={clubHincha}
                     onValueChange={itemvalue => setClubHincha(itemvalue)}
                     dropdownIconColor={theme.colors.white}
                     dropdownIconRippleColor={theme.colors.primary}
                     mode="dropdown"
                     style={styles.picker}
                  >
                     {clubs}
                  </Picker>
               </View>
            </View>
            <View style={styles.btnsContainer}>
               <Button
                  mode="contained"
                  onPress={handleSignUp}
                  buttonColor={theme.colors.primary}
                  textColor={theme.colors.white}
                  labelStyle={styles.btnLabel}
                  style={styles.signUpBtn}
               >
                  Create account
               </Button>

               <Button
                  mode="text"
                  onPress={() => navigation.navigate("Signin")}
                  textColor={theme.colors.primary}
                  labelStyle={styles.btnLabel}
               >
                  Already have an account? Sign in
               </Button>
            </View>
         </View>

         <Snackbar
            visible={errorVisible}
            onDismiss={() => setErrorVisible(false)}
            action={{
               label: "Ok",
               labelStyle: { color: theme.colors.secondary, fontSize: theme.fontSize.m },
            }}
            duration={3000}
            elevation={3}
         >
            {error}
         </Snackbar>
      </KeyboardAwareScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
      backgroundColor: theme.colors.darksecondary,
   },
   title: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: "600",
      textAlign: "center",
   },
   text: {
      color: theme.colors.white,
      fontSize: 18,
   },
   formContainer: {
      width: "70%",
      marginVertical: 50,
      alignSelf: "center",
   },
   inputMargin: {
      marginBottom: 25,
   },
   inputPicker: {
      marginTop: 10,
      backgroundColor: theme.colors.darksecondary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.white,
   },
   picker: {
      color: theme.colors.white,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.white,
   },
   btnsContainer: {
      alignItems: "center",
   },
   signUpBtn: {
      borderRadius: theme.spacing.s,
      marginBottom: 25,
   },
   btnLabel: {
      fontSize: theme.fontSize.m,
   },
   errorMessageShown: {
      position: "absolute",
      bottom: "8%",
      left: 0,
      right: 0,
      backgroundColor: theme.colors.danger,
      borderRadius: 0,
   },
   errorMessageHidden: {
      display: "none",
   },
})

export default SignIn
