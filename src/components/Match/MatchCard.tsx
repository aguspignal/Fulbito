import { StyleSheet, View, TouchableOpacity } from "react-native"
import { theme } from "../../utils/theme"
import MatchCardInfo from "./MatchCardInfo"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"
import MatchCardDecision from "./MatchCardDecision"

const MatchCard = () => {
   const handleCardTouch = () => {
      // transform: [{ scale: 1 }],
      styles.container.transform = [{ scale: 1.1 }]
   }
   const handleCardTouchEnd = () => {
      // transform: [{ scale: 1 }],
      styles.container.transform = [{ scale: 1 }]
   }

   return (
      <TouchableOpacity
         style={styles.container}
         onPressIn={handleCardTouch}
         onPressOut={handleCardTouchEnd}
         activeOpacity={0.95}
      >
         <TextStyled variant="h3" align="center" color="white">
            Te han invitado a un partido!
         </TextStyled>
         <MatchCardInfo />
         <MatchCardDecision />
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
      width: 320,
      height: 200,
      backgroundColor: theme.colors.darksecondary,
      borderRadius: theme.spacing.xl,
      marginVertical: theme.spacing.m,
      paddingTop: theme.spacing.l,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.5,
      elevation: 8,
      transform: [{ scale: 1 }],
   },
})

export default MatchCard
