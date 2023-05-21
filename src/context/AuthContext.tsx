import React, { createContext, useEffect, useState } from "react"
import { firebaseAuth } from "../firebase/config"
import { getUserFromDatabase, saveUserInDatabase } from "../firebase/actions"
import { AuthError, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { DocumentData } from "firebase/firestore"
import { ResultError, SignUpData } from "../types/formTypes"
import { FirebaseError } from "firebase/app"

type Auth = DocumentData | SignUpData | undefined | null

type AuthContextValue = {
   auth: Auth
   setAuth: React.Dispatch<React.SetStateAction<DocumentData | SignUpData | null | undefined>>
   loading: boolean
   signIn: (email: string, password: string) => Promise<ResultError>
   signUp: (email: string, password: string, username: string, clubHincha: string) => Promise<ResultError>
   signOut: () => Promise<void>
}

const AUTH_STORAGE_KEY = "AuthStorageKey"

export const AuthContext = createContext<AuthContextValue | null>(null)

interface Props {
   children: React.ReactNode
}

const AuthContextProvider = ({ children }: Props) => {
   const [auth, setAuth] = useState<Auth>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      loadAsyncStorage()
   }, [])

   async function loadAsyncStorage() {
      try {
         const serializedData = await AsyncStorage.getItem(AUTH_STORAGE_KEY)

         if (serializedData) {
            const parsedData = JSON.parse(serializedData)
            setAuth(parsedData)
         }
      } catch (err) {
         /// TODO: HANDLE ERROR
         console.log("Async Storage failed")
         console.log(err)
      } finally {
         setLoading(false)
      }
   }

   async function signIn(email: string, password: string): Promise<ResultError> {
      let result: ResultError = { status: false, code: null, title: null }
      try {
         const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, password)
         const user = await getUserFromDatabase(userCredentials.user.uid)
         setAuth(user)
         AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
      } catch (err: any) {
         result.status = true
         result.code = err.code
      }
      return result
   }

   async function signUp(email: string, password: string, username: string, clubHincha: string): Promise<ResultError> {
      let result: ResultError = { status: false, code: null, title: null }
      try {
         const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, email, password)
         const userData: SignUpData = {
            uid: userCredentials.user.uid,
            email,
            username,
            clubHincha,
         }
         saveUserInDatabase(userData)
         setAuth(userData)
         AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData))
      } catch (err: any) {
         result.status = true
         result.code = err.code
      }
      return result
   }

   // async function signUp(userData: SignUpData): Promise<void> {
   //    saveUserInDatabase(userData)
   //    setAuth(userData)
   //    AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData))
   // }

   async function signOut(): Promise<void> {
      setAuth(null)
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
   }

   return (
      <AuthContext.Provider value={{ auth, setAuth, loading, signIn, signUp, signOut }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider
