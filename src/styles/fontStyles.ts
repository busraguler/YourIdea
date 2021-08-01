import {StyleSheet} from 'react-native';

import colors from './colors';
export const normalFontFamily = 'lineto-circular-pro-book-normal';
const boldFontFamily = 'lineto-circular-pro-medium-bold';

const fontStyles = StyleSheet.create({
  normalText: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.appColors.normalText,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.appColors.normalText,
    fontWeight: '700',
  },
  formText: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.appColors.formText,
  },
  pageHeader: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'left',
    letterSpacing: -0.2,
    color: colors.appColors.pageHeader,
    fontFamily: normalFontFamily,
    fontWeight: '700',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'white',
  },
  mainScreenView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.appColors.normalText,
  },
});

export default fontStyles;
