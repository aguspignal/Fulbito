import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

const LastMatches = () => {
   return (
      <View style={styles.container}>
         <TextStyled size="l" weight="bold" style={styles.title}>
            Last matches
         </TextStyled>
         <View style={styles.matchesList}>
            <Text style={styles.pastMatch}>1-0</Text>
            <Text style={styles.pastMatch}>1-1</Text>
            <Text style={styles.pastMatch}>2-1</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: "25%",
   },
   title: {
      marginBottom: theme.spacing.m,
   },
   matchesList: {
      alignItems: "center",
   },
   pastMatch: {
      marginVertical: theme.spacing.m,
      fontSize: theme.fontSize.l,
   },
})

export default LastMatches
