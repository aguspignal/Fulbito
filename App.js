import UserContextProvider from "./src/context/UserContextProvider"
import Main from "./Main"

export default function App() {
   return (
      <UserContextProvider>
         <Main />
      </UserContextProvider>
   )
}
