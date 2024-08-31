import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = StyleSheet.create({
    pedido: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    },
    logotipo: {
        width: 80,
        height: 80,
        borderRadius: 6
    },
    textos: {
        flex: 1,
        padding: 8
    },
    containerValor: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    total: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    status: {
        color: COLORS.green
    }
})