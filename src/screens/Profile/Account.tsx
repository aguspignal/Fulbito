import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import ButtonPrimary from "../../components/Buttons/ButtonPrimary"
import React from "react"
import useAuth from "../../hooks/useAuth"
import UserDataCard from "../../components/Profile/UserDataCard"
import UserMatchesCard from "../../components/Profile/UserMatchesCard"

const Account = () => {
   const { signOut } = useAuth()

   return (
      <View style={styles.container}>
         <View style={styles.darkBackground} />
         <View style={styles.cardsContainer}>
            <View style={styles.cardDataContainer}>
               <UserDataCard />
            </View>
            <View style={styles.cardMatchesContainer}>
               <UserMatchesCard />
            </View>
            <View style={styles.signOutBtnContainer}>
               <ButtonPrimary onPress={signOut}>Sign out</ButtonPrimary>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
   darkBackground: {
      height: 250,
      width: "100%",
      backgroundColor: theme.colors.darksecondary,
   },
   cardsContainer: {
      width: "100%",
      position: "absolute",
   },
   cardDataContainer: {
      width: "100%",
      marginTop: 25,
      marginBottom: 45,
      paddingHorizontal: 20,
   },
   cardMatchesContainer: {
      width: "100%",
      paddingHorizontal: 20,
   },
   btnSignOutLabel: {
      fontSize: theme.fontSize.l,
      fontWeight: "bold",
   },
   signOutBtnContainer: {
      marginTop: 45,
      alignItems: "center",
   },
})

export default Account
