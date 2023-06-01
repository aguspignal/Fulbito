import { Icon } from "@rneui/themed"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

const MatchCardDecision = () => {
   return (
      <View style={styles.decisionContainer}>
         <TouchableOpacity style={[styles.acceptContainer, styles.decision]} activeOpacity={0.8}>
            <Icon name="calendar-multiselect" type="material-community" />
            <TextStyled weight="regular" size="m">
               Aceptar
            </TextStyled>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.declineContainer, styles.decision]} activeOpacity={0.8}>
            <Icon name="calendar-multiselect" type="material-community" />
            <TextStyled weight="regular" size="m">
               Rechazar
            </TextStyled>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   decisionContainer: {
      height: 40,
      flexDirection: "row",
      justifyContent: "center",
   },
   decision: {
      width: "50%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   acceptContainer: {
      backgroundColor: theme.colors.primary,
      borderBottomLeftRadius: theme.spacing.xl,
   },
   declineContainer: {
      width: "50%",
      backgroundColor: theme.colors.danger,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderBottomEndRadius: theme.spacing.xl,
   },
})

export default MatchCardDecision
