import { COLORS } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    headerBar: {
        height: 45,
        flexDirection: "row" as const,
        justifyContent: "space-between" as const,
    },
    logo: {
        width: 140,
        height: 27
    },
    cart: {
        width: 30,
        height: 30
    },
    busca: {
        marginBottom: 10
    }
}