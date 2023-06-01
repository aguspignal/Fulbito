import { Button } from "react-native-paper"
import { StyleSheet } from "react-native"
import { theme } from "../../utils/theme"
import React from "react"

type Props = {
   children: React.ReactNode
   onPress?: () => void
   loading?: boolean
}

const ButtonPrimary = ({ children, onPress = () => {}, loading = false }: Props) => {
   return (
      <Button
         mode="contained"
         onPress={onPress}
         loading={loading}
         labelStyle={styles.label}
         style={[styles.btn, loading ? styles.btnDisabled : null]}
      >
         {children}
      </Button>
   )
}

const styles = StyleSheet.create({
   btn: {
      overflow: "hidden",
      borderRadius: theme.spacing.s,
      backgroundColor: theme.colors.primary,
   },
   btnDisabled: {
      backgroundColor: theme.colors.darkprimary,
   },
   label: {
      fontSize: theme.fontSize.m,
      color: theme.colors.white,
   },
})

export default ButtonPrimary
