import { NavigationContainer } from "@react-navigation/native"
import { Provider as PaperProvider } from "react-native-paper"
import AppStack from "./src/components/AppStack"
import AuthStack from "./src/components/AuthStack"
import Loading from "./src/screens/Loading"
import useAuth from "./src/hooks/useAuth"

const Main = () => {
   const { auth, loading } = useAuth()

   if (loading) {
      return <Loading />
   }

   return (
      <NavigationContainer>
         <PaperProvider>{auth ? <AppStack /> : <AuthStack />}</PaperProvider>
      </NavigationContainer>
   )
}

export default Main
