import { auth_errors } from "../../utils/auth-errors"
import { Button, Snackbar } from "react-native-paper"
import { getErrorTitle } from "../../firebase/actions"
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view"
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

   const [error, setError] = useState<string | null>(null)
   const [errorVisible, setErrorVisible] = useState(false)

   const { signIn } = useAuth()

   async function handleSignIn() {
      if (email.length <= 0 || !email) {
         setError(getErrorTitle(auth_errors.NO_EMAIL))
         setErrorVisible(true)
         return
      }
      if (password.length <= 0 || !password) {
         setError(getErrorTitle(auth_errors.NO_PASSWORD))
         setErrorVisible(true)
         return
      }

      const result: ResultError = await signIn(email, password)

      if (result.status) {
         setError(getErrorTitle(result.code))
         setErrorVisible(true)
      }
   }

   // useEffect(() => {}, [])

   return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         <View>
            <TextStyled variant="h2" align="center" color="white">
               Please, sign in to continue
            </TextStyled>

            <View style={styles.formContainer}>
               <Input state={email} setState={setEmail} placeholder="Email" style={styles.inputEmail} />

               <View>
                  <Input state={password} setState={setPassword} placeholder="Password" securedEntry={true} />

                  <Button
                     mode="text"
                     onPress={() => navigation.navigate("PasswordRecovery")}
                     textColor={theme.colors.secondary}
                     contentStyle={styles.forgotPswContent}
                     style={styles.forgotPsw}
                  >
                     Forgot your password?
                  </Button>
               </View>
            </View>
            <View style={styles.btnsContainer}>
               <Button
                  mode="contained"
                  onPress={handleSignIn}
                  buttonColor={theme.colors.primary}
                  textColor={theme.colors.white}
                  labelStyle={styles.btnLabel}
                  style={styles.signInBtn}
               >
                  Sign in
               </Button>
               <Button
                  mode="text"
                  onPress={() => navigation.navigate("Signup")}
                  textColor={theme.colors.primary}
                  labelStyle={styles.btnLabel}
               >
                  Don't have an account? Sign up
               </Button>
            </View>
         </View>

         <Snackbar
            visible={errorVisible}
            onDismiss={() => setErrorVisible(false)}
            action={{
               label: "Ok",
               labelStyle: {
                  color: theme.colors.lightsecondary,
                  fontSize: theme.fontSize.m,
               },
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
      justifyContent: "center",
      backgroundColor: theme.colors.darksecondary,
   },
   formContainer: {
      width: "70%",
      marginVertical: 50,
      alignSelf: "center",
   },
   inputEmail: {
      marginBottom: 25,
   },
   forgotPsw: {
      alignSelf: "flex-start",
      padding: 0,
   },
   forgotPswContent: {
      paddingLeft: 0,
      padding: 0,
   },
   btnsContainer: {
      alignItems: "center",
   },
   signInBtn: {
      borderRadius: theme.spacing.s,
      marginBottom: 25,
   },
   btnLabel: {
      fontSize: theme.fontSize.m,
   },
})

export default SignIn
