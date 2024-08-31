import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
  restaurant: {
    flexDirection: "row" as const,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center" as const
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
    marginBottom: 3,
    fontSize: FONT_SIZE.sm
  },
  address: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm
  },
  favorite: {
    width: 30,
    height: 30
  }
}