import { Text } from "react-native"
import { theme } from "../../utils/theme"
import { ReactPropTypes } from "react"

interface Props {
   children: React.ReactNode
   style?: any
   variant?: keyof typeof theme.textVariants
   color?: keyof typeof theme.colors
   size?: keyof typeof theme.fontSize
   weight?: keyof typeof theme.textWeights
   align?: "auto" | "left" | "right" | "center" | "justify" | undefined
   rest?: ReactPropTypes
}

const TextStyled = ({ style, variant, color, size, weight, align, ...rest }: Props) => {
   let textVariants = null
   if (variant !== undefined) {
      textVariants = { ...theme.textVariants[variant] }
   }

   const styles = {
      // {variant !== undefined ? ...theme.textVariants[variant] : ...theme.textVariants["body"]},
      color: color !== undefined ? theme.colors[color as keyof typeof theme.colors] : null,
      fontWeight: weight !== undefined ? theme.textWeights[weight as keyof typeof theme.textWeights] : null,
      fontSize: size !== undefined ? theme.fontSize[size as keyof typeof theme.fontSize] : null,
      textAlign: align,
      ...textVariants,
      ...style,
   }

   return <Text style={styles} {...rest} />
}

export default TextStyled
