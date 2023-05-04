import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useEffect, useState } from "react"

const AUTH_STORAGE_KEY = "AuthStorageKey"

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      loadAsyncStorage()
   }, [])

   async function loadAsyncStorage() {
      try {
         const authDataSerialized = await AsyncStorage.getItem(AUTH_STORAGE_KEY)

         if (authDataSerialized) {
            const authDataParsed = JSON.parse(authDataSerialized)
            setUser(authDataParsed)
         }
      } catch (err) {
         console.log(err)
      } finally {
         setLoading(false)
      }
   }

   async function signIn(userData) {
      setUser(userData)
      AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData))
   }

   async function signOut() {
      setUser(null)
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
   }

   return (
      <UserContext.Provider value={{ user, setUser, loading, signIn, signOut }}>
         {children}
      </UserContext.Provider>
   )
}

export default UserContextProvider
