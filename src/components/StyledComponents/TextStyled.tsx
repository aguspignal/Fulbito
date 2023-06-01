import { ReactPropTypes } from "react"
import { Text } from "react-native"
import { theme } from "../../utils/theme"

interface Props {
   style?: any
   children: React.ReactNode
   align?: "auto" | "left" | "right" | "center" | "justify" | undefined
   variant?: keyof typeof theme.textVariants
   color?: keyof typeof theme.colors
   size?: keyof typeof theme.fontSize
   weight?: keyof typeof theme.textWeights
   m?: keyof typeof theme.spacing
   my?: keyof typeof theme.spacing
   mx?: keyof typeof theme.spacing
   p?: keyof typeof theme.spacing
   py?: keyof typeof theme.spacing
   px?: keyof typeof theme.spacing
   rest?: ReactPropTypes
}

const TextStyled = ({
   style,
   variant,
   color,
   size,
   weight,
   align,
   m,
   mx,
   my,
   p,
   px,
   py,
   ...rest
}: Props) => {
   let textVariants = null
   if (variant !== undefined) {
      textVariants = { ...theme.textVariants[variant] }
   }

   const styles = {
      // {variant !== undefined ? ...theme.textVariants[variant] : ...theme.textVariants["body"]},
      color: color !== undefined ? theme.colors[color as keyof typeof theme.colors] : null,
      fontWeight:
         weight !== undefined ? theme.textWeights[weight as keyof typeof theme.textWeights] : null,
      fontSize: size !== undefined ? theme.fontSize[size as keyof typeof theme.fontSize] : null,
      margin: m !== undefined ? theme.spacing[m as keyof typeof theme.spacing] : null,
      marginVertical: my !== undefined ? theme.spacing[my as keyof typeof theme.spacing] : null,
      marginHorizontal: mx !== undefined ? theme.spacing[mx as keyof typeof theme.spacing] : null,
      padding: p !== undefined ? theme.spacing[p as keyof typeof theme.spacing] : null,
      paddingVertical: py !== undefined ? theme.spacing[py as keyof typeof theme.spacing] : null,
      paddingHorizontal: px !== undefined ? theme.spacing[px as keyof typeof theme.spacing] : null,
      textAlign: align,
      ...textVariants,
      ...style,
   }

   return <Text style={styles} {...rest} />
}

export default TextStyled
