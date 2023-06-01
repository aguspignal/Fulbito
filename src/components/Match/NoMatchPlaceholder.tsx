import { Icon } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"
import TextStyled from "../StyledComponents/TextStyled"

const NoMatchPlacheolder = () => {
   return (
      <View style={styles.container}>
         <Icon
            name="calendar-multiselect"
            type="material-community"
            size={180}
            color={theme.colors.lightgrey}
         />
         <TextStyled variant="h2" align="center" color="lightgrey">
            No matches yet
         </TextStyled>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: "60%",
      justifyContent: "center",
   },
})

export default NoMatchPlacheolder
