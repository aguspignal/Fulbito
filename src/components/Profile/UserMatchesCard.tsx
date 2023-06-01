import { Card } from "react-native-paper"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"
import useAuth from "../../hooks/useAuth"

const UserMatchesCard = () => {
   const { auth } = useAuth()

   return (
      // <View style={styles.container}>
      <Card style={styles.container}>
         <View style={styles.matchesAmountContainer}>
            <TextStyled size="xl" weight="bold" align="center">
               10
            </TextStyled>
            <TextStyled variant="body" align="center">
               Partidos jugados
            </TextStyled>
         </View>
         <View style={styles.dataContainer}>
            <View>
               <View style={[styles.greenCircle, styles.circle]}>
                  <TextStyled variant="h3">5</TextStyled>
               </View>
               <TextStyled variant="body" align="center" my="m">
                  Victorias
               </TextStyled>
            </View>
            <View>
               <View style={[styles.yellowCircle, styles.circle]}>
                  <TextStyled variant="h3">2</TextStyled>
               </View>
               <TextStyled variant="body" align="center" my="m">
                  Empates
               </TextStyled>
            </View>
            <View>
               <View style={[styles.redCircle, styles.circle]}>
                  <TextStyled variant="h3">3</TextStyled>
               </View>
               <TextStyled variant="body" align="center" my="m">
                  Derrotas
               </TextStyled>
            </View>
         </View>
      </Card>
      // </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: 220,
      backgroundColor: theme.colors.white,
   },
   matchesAmountContainer: {
      marginTop: 10,
   },
   dataContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 25,
   },
   circle: {
      width: 80,
      height: 80,
      borderRadius: 999,
      borderWidth: theme.spacing.m,
      alignItems: "center",
      justifyContent: "center",
   },
   greenCircle: {
      borderColor: theme.colors.primary,
   },
   yellowCircle: {
      borderColor: theme.colors.warning,
   },
   redCircle: {
      borderColor: theme.colors.danger,
   },
})

export default UserMatchesCard
