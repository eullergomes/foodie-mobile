import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = StyleSheet.create({
  produto: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6
  },
  texts: {
    flex: 1,
    padding: 8
  },
  name: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm
  },
  description: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm
  },
  value: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
    marginTop: 8
  },
  delete: {
    width: 28,
    height: 28
  },
  containerDelete: {
    alignItems: "flex-end",
    marginTop: 8
  }
})