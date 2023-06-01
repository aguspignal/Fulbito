import AuthContextProvider from "./src/context/AuthContext"
import Main from "./Main"

export default function App() {
   return (
      <AuthContextProvider>
         <Main />
      </AuthContextProvider>
   )
}
