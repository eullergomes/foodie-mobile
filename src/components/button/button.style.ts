import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.red,
    borderRadius: 6,
    padding: 3,
  },

  label: {
    fontSize: FONT_SIZE.lg,
    color: "white",
    padding: 8,
    textAlign: "center"
  }
});
