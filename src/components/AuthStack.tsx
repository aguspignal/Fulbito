import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import PasswordRecovery from "../screens/Login/PasswordRecovery"
import SignIn from "../screens/Login/Signin"
import SignUp from "../screens/Login/Signup"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
   return (
      <>
         <StatusBar style="light" />
         <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Signin" component={SignIn} />
               <Stack.Screen name="Signup" component={SignUp} />
               <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
            </Stack.Group>
         </Stack.Navigator>
      </>
   )
}

export default AuthStack
