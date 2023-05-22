import { Icon } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

const MatchCardInfo = () => {
   return (
      <View style={styles.container}>
         <View style={styles.matchInfoTopContainer}>
            <View style={styles.matchInfoContainer}>
               <View style={styles.matchInfo}>
                  <Icon
                     name="calendar-blank"
                     type="material-community"
                     color={theme.colors.white}
                     style={styles.matchInfoIcon}
                  />
                  <TextStyled color="white" size="l">
                     Sabado 20/05
                  </TextStyled>
               </View>
            </View>
            <View style={styles.matchInfoContainer}>
               <View style={styles.matchInfo}>
                  <Icon
                     name="clock"
                     type="material-community"
                     color={theme.colors.white}
                     style={styles.matchInfoIcon}
                  />
                  <TextStyled color="white" size="l">
                     17:00hs
                  </TextStyled>
               </View>
            </View>
         </View>
         <View style={styles.matchInfoBottomContainer}>
            <View style={styles.matchInfoContainer}>
               <View style={styles.matchInfo}>
                  <Icon
                     name="google-maps"
                     type="material-community"
                     color={theme.colors.white}
                     style={styles.matchInfoIcon}
                  />
                  <TextStyled color="white" size="l">
                     Master F5
                  </TextStyled>
               </View>
            </View>
            <View style={styles.matchInfoContainer}>
               <View style={styles.matchInfo}>
                  <Icon
                     name="account-group"
                     type="material-community"
                     color={theme.colors.white}
                     style={styles.matchInfoIcon}
                  />
                  <TextStyled color="white" size="l">
                     Futbol 5
                  </TextStyled>
               </View>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
   },
   matchInfoTopContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
   },
   matchInfoBottomContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
   },
   matchInfoContainer: {
      width: "50%",
      justifyContent: "center",
   },
   matchInfo: {
      flexDirection: "row",
      marginLeft: theme.spacing.l,
   },
   matchInfoIcon: {
      marginRight: theme.spacing.s,
   },
})

export default MatchCardInfo
