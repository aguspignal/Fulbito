import React from "react"
import { StyleSheet } from "react-native"
import { theme } from "../../utils/theme"
import { TextInput } from "react-native-paper"

interface Props {
   state: any
   setState: any
   placeholder: string
   securedEntry?: boolean
   style?: any
}

const Input = ({ state, setState, placeholder, securedEntry = false, style }: Props) => {
   return (
      <TextInput
         value={state}
         onChangeText={input => setState(input)}
         placeholder={placeholder}
         placeholderTextColor={theme.colors.white}
         underlineColor={theme.colors.white}
         activeUnderlineColor={theme.colors.white}
         selectionColor={theme.colors.secondary}
         textColor={theme.colors.white}
         contentStyle={styles.inputContent}
         style={[styles.input, style]}
         secureTextEntry={securedEntry}
      />
   )
}

const styles = StyleSheet.create({
   input: {
      height: 50,
      backgroundColor: theme.colors.darksecondary,
      borderTopWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.white,
   },
   inputContent: {
      paddingLeft: theme.spacing.l,
      fontSize: theme.fontSize.m,
   },
})

export default Input
