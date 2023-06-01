import { matches } from "../../utils/matches"
import { ScrollView, StyleSheet, View } from "react-native"
import ButtonPrimary from "../../components/Buttons/ButtonPrimary"
import LastMatches from "../../components/Match/LastMatches"
import MatchCard from "../../components/Match/MatchCard"
import NoMatchPlacheolder from "../../components/Match/NoMatchPlaceholder"

const Agenda = () => {
   return (
      <View style={styles.container}>
         {matches.length ? (
            <ScrollView style={styles.matchesContainer}>
               {matches.map(match => (
                  <MatchCard key={match.id} match={match} />
               ))}
            </ScrollView>
         ) : (
            <NoMatchPlacheolder />
         )}

         <View style={styles.newMatchBtnContainer}>
            <ButtonPrimary loading={false} onPress={() => {}}>
               Organizar partido
            </ButtonPrimary>
         </View>

         <LastMatches />
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
      height: "60%",
      marginTop: 25,
      overflow: "hidden",
   },
   newMatchBtnContainer: {
      height: "15%",
      justifyContent: "center",
   },
})

export default Agenda
