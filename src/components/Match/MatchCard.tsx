import { Match } from "../../types/match"
import { StyleSheet, TouchableOpacity } from "react-native"
import { theme } from "../../utils/theme"
import MatchCardDecision from "./MatchCardDecision"
import MatchCardInfo from "./MatchCardInfo"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

type Props = {
   match: Match
}

const MatchCard = ({ match }: Props) => {
   return (
      <TouchableOpacity style={styles.container} activeOpacity={0.95}>
         <TextStyled size="l" align="center" color="white">
            Te invitaron a un partido!
         </TextStyled>
         <MatchCardInfo match={match} />
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
      marginVertical: theme.spacing.l,
      paddingTop: theme.spacing.l,
      shadowColor: theme.colors.black,
      shadowOffset: {
         width: 1,
         height: 0,
      },
      shadowOpacity: 0.8,
      shadowRadius: 1.5,
      elevation: 8,
   },
})

export default MatchCard
