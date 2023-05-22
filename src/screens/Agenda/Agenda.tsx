import { Icon } from "@rneui/themed"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"
import TextStyled from "../../components/StyledComponents/TextStyled"
import { theme } from "../../utils/theme"
import MatchCard from "../../components/Match/MatchCard"

const matches: Array<any> = [1]

const Agenda = () => {
   return (
      <View style={styles.container}>
         <View style={styles.matchesContainer}>
            {matches.length ? (
               matches.map(match => <MatchCard />)
            ) : (
               <>
                  <Icon
                     name="calendar-multiselect"
                     type="material-community"
                     size={180}
                     color={theme.colors.lightgrey}
                  />
                  <TextStyled variant="h2" align="center" color="lightgrey">
                     No matches yet
                  </TextStyled>
               </>
            )}
         </View>
         <View style={styles.newMatchBtnContainer}>
            <Button mode="contained" onPress={() => {}} labelStyle={styles.newMatchBtnLabel} style={styles.newMatchBtn}>
               New match
            </Button>
         </View>
         <View style={styles.lastMatchesContainer}>
            <TextStyled size="xl" weight="bold" style={styles.lastMatchesTitle}>
               Last matches
            </TextStyled>
            <View style={styles.lastMatches}>
               <Text style={styles.pastMatch}>1-0</Text>
               <Text style={styles.pastMatch}>1-1</Text>
               <Text style={styles.pastMatch}>2-1</Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   matchesContainer: {
      height: "50%",
      justifyContent: "center",
   },
   newMatchBtnContainer: {
      height: "20%",
      justifyContent: "center",
   },
   newMatchBtn: {
      overflow: "hidden",
      borderRadius: theme.spacing.s,
      backgroundColor: theme.colors.primary,
   },
   newMatchBtnLabel: {
      fontSize: theme.fontSize.l,
      color: theme.colors.white,
   },
   lastMatchesContainer: {
      height: "30%",
   },
   lastMatchesTitle: {
      marginBottom: theme.spacing.l,
   },
   lastMatches: {
      alignItems: "center",
   },
   pastMatch: {
      marginVertical: theme.spacing.m,
      fontSize: theme.fontSize.xl,
   },
})

export default Agenda
