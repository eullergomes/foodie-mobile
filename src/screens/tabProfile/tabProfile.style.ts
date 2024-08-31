import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray
  },
  icone: {
    width: 30,
    height: 30
  },
  texts: {
    flex: 1,
    marginLeft: 10
  },
  containerIcone: {
    justifyContent: "center"
  },
  title: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md
  },
  subtitle: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm
  },
  more: {
    width: 20,
    height: 20
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray
  }
})