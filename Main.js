import { Provider as PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import useUser from "./src/hooks/useUser"
import AppStack from "./src/components/AppStack"
import AuthStack from "./src/components/AuthStack"
import Loading from "./src/components/Loading"

const Main = () => {
   const { user, loading } = useUser()

   if (loading) {
      return <Loading />
   }

   return (
      <NavigationContainer>
         <PaperProvider>{user ? <AppStack /> : <AuthStack />}</PaperProvider>
      </NavigationContainer>
   )
}

export default Main
