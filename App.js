import Main from "./Main"
import AuthContextProvider from "./src/context/AuthContext"

export default function App() {
   return (
      <AuthContextProvider>
         <Main />
      </AuthContextProvider>
   )
}
