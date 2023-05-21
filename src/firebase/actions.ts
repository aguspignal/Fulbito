import { auth_errors } from "../utils/auth-errors"
import { db } from "./config"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { SignUpData } from "../types/formTypes"

export const saveUserInDatabase = async ({ uid, clubHincha, email, username }: SignUpData) => {
   const docRef = doc(db, "users", uid)
   setDoc(docRef, { clubHincha, email, username }, { merge: true })
}

export const getUserFromDatabase = async (uid: string) => {
   const userSnap = getDoc(doc(db, "users", uid))
   const userData = (await userSnap).data()
   return userData
}

export const getErrorTitle = (errorCode: string | null) => {
   let error: string | null

   switch (errorCode) {
      case auth_errors.INVALID_CLUBHINCHA:
         error = "Seleccione el club del cual es hincha"
         break
      case auth_errors.INVALID_EMAIL:
         error = "Invalid email"
         break
      case auth_errors.INVALID_PASSWORD:
         error = "Invalid password"
         break
      case auth_errors.INVALID_USERNAME:
         error = "Invalid username"
         break
      case auth_errors.NO_EMAIL:
         error = "Please, enter an email"
         break
      case auth_errors.NO_PASSWORD:
         error = "Please, enter a password"
         break
      case auth_errors.WRONG_PASSWORD:
         error = "Incorrect password"
         break
      case auth_errors.WEAK_PASSWORD:
         error = "Weak password"
         break
      case auth_errors.EMAIL_EXISTS:
         error = "Email already registered"
         break
      case auth_errors.USER_NOT_FOUND:
         error = "User not found, try changing email or password"
         break
      case auth_errors.TOO_MANY_REQUESTS:
         error = "Too many requests, wait a second"
         break
      default:
         error = null
   }

   return error
}
