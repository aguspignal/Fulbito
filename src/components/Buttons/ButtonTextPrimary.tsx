import { Button } from "react-native-paper"
import { StyleSheet, View } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"

type Props = {
   children: React.ReactNode
   onPress?: () => void
   loading?: boolean
}

const ButtonTextPrimary = ({ children, onPress = () => {}, loading = false }: Props) => {
   return (
      <Button
         mode="text"
         onPress={onPress}
         textColor={loading ? theme.colors.darkprimary : theme.colors.primary}
         labelStyle={styles.label}
      >
         {children}
      </Button>
   )
}

const styles = StyleSheet.create({
   label: {
      fontSize: theme.fontSize.m,
   },
})

export default ButtonTextPrimary
