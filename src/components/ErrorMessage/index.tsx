import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../styles';
import fontStyles from '../../styles/fontStyles';

interface Props {
  text?: string;
}

const ErrorMessage: React.FC<Props> = ({text, ...props}) => {
  return <Text style={styles.errorTitle}>{text}</Text>;
};
const styles = StyleSheet.create({
  errorTitle: {
    ...fontStyles.normalText,
    fontSize: 13,
    color: colors.appColors.errorText,
    marginHorizontal: 15,
  },
});
export default ErrorMessage;
