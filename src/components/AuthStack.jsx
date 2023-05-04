import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login/Login"
import SignIn from "./Login/Signin"
import SignUp from "./Login/Signup"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={SignIn} />
            <Stack.Screen name="Signup" component={SignUp} />
         </Stack.Group>
      </Stack.Navigator>
   )
}

export default AuthStack
