import { StyleSheet, View } from "react-native"
import { theme } from "../utils/theme"
import React from "react"
import TextStyled from "../components/StyledComponents/TextStyled"

const Loading = () => {
   return (
      <View style={styles.container}>
         <TextStyled color="white" size="l">
            Loading, please wait
         </TextStyled>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.darksecondary,
   },
})

export default Loading
