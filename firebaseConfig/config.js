import * as firebase from "firebase/app"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
   apiKey: "AIzaSyBrsYwYBz19GfDZhn27pvzxDuPQoAFgDi4",
   authDomain: "fulbitoapp-421.firebaseapp.com",
   projectId: "fulbitoapp-421",
   storageBucket: "fulbitoapp-421.appspot.com",
   messagingSenderId: "744305514499",
   appId: "1:744305514499:web:2238f106bc48a230681636",
   measurementId: "G-1LGM70DG7W",
}

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
// const analytics = getAnalytics(app)

export { app, auth }
