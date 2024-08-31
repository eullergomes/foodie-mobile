import { COLORS, FONT_SIZE } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white
  },

  formGroup: {
    width: "100%",
    marginTop: 60,
    marginBottom: 50,
  },

  formHorizontal: {
    flexDirection: "row",
  },

  form: {
    width: "100%",
    marginBottom: 25,
  },

  form70: {
    width: "70%",
    marginBottom: 25,
    paddingRight: 10
  },
  
  form30: {
    width: "30%",
    marginBottom: 25
  },

  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 40
  },

  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md
  }
});
