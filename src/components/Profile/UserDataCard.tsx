import { Card } from "react-native-paper"
import { Image, StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"
import useAuth from "../../hooks/useAuth"

const UserDataCard = () => {
   const { auth } = useAuth()

   return (
      <View style={styles.superContainer}>
         <View style={styles.roundedBackground} />
         <Card style={styles.container}>
            <View style={styles.avatarContainer}>
               <Image source={require("../../../assets/messi.png")} style={styles.avatar} />
            </View>
            <View style={styles.dataContainer}>
               <TextStyled size="l" align="center">
                  Aguspignal
               </TextStyled>
               <TextStyled size="m" align="center" my="l">
                  Club name
               </TextStyled>
               <TextStyled size="s" align="center">
                  Hincha de {auth?.clubHincha}
               </TextStyled>
            </View>
         </Card>
      </View>
   )
}

const styles = StyleSheet.create({
   superContainer: {
      alignItems: "center",
      position: "relative",
      height: 285,
   },
   roundedBackground: {
      width: 170,
      height: 170,
      backgroundColor: theme.colors.white,
      borderRadius: 999,
   },
   container: {
      width: "100%",
      height: 200,
      position: "absolute",
      top: 85,
      backgroundColor: theme.colors.white,
   },
   avatarContainer: {
      alignItems: "center",
      position: "relative",
      borderRadius: 999,
      elevation: 10,
   },
   avatar: {
      position: "absolute",
      top: -75,
      width: 150,
      height: 150,
      borderRadius: 999,
   },
   dataContainer: {
      marginTop: 85,
   },
})

export default UserDataCard
