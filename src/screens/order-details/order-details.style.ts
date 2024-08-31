import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15
  },
  values: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4
  },
  value: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray
  },
  total: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    fontWeight: "bold"
  },
  containerBtn: {
    marginTop: 10
  },
  containerDetails: {
    backgroundColor: COLORS.light_gray,
    padding: 10,
  }
})