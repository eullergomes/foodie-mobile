import { COLORS, FONT_SIZE } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 110
  },

  banner: {
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 15
  },
  
  description: {
    fontSize: FONT_SIZE.xsm,
    color: COLORS.dark_gray,
    textAlign: "center",
  }
})