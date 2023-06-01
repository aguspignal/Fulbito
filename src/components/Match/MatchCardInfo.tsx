import { Icon } from "@rneui/themed"
import { Match } from "../../types/match"
import { parseDate, parsePlace, parseTime } from "../../utils/parseData"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

type Props = {
   match: Match
}

const MatchCardInfo = ({ match }: Props) => {
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
                  <TextStyled color="white" size="m">
                     {parseDate(match.date.day)}
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
                  <TextStyled color="white" size="m">
                     {parseTime(match.date.time)}
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
                  <TextStyled color={match.place !== undefined ? "white" : "grey"} size="m">
                     {parsePlace(match)}
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
                  <TextStyled color="white" size="m">
                     {match.matchType}
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
      alignItems: "center",
      marginLeft: theme.spacing.l,
   },
   matchInfoIcon: {
      marginRight: theme.spacing.m,
   },
})

export default MatchCardInfo
