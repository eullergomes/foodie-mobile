import { COLORS, FONT_SIZE } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65
  },

  category: {
    width: 65,
    height: 65,
    paddingRight: 10
  },
  
  description: {
    fontSize: FONT_SIZE.xsm,
    color: COLORS.dark_gray,
    textAlign: "center",
  }
})