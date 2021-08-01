import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
  View,
  TextInput,
} from 'react-native';
import fontStyles from '../../styles/fontStyles';
import {ErrorMessage, Separator} from '../../components';

interface Input extends TextProps {
  containerViewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  underLineColorAndroid?: string;
  secureTextEntry?: boolean;
  numberOfLines?: number;
  value?: any;
  multiline?: boolean;
  onChangeText?: () => void;
  errorMessage?: string;
}

const Input: React.FC<Input> = ({
  containerViewStyle,
  textStyle,
  placeholder,
  placeholderTextColor,
  underLineColorAndroid,
  secureTextEntry,
  numberOfLines,
  value,
  multiline,
  onChangeText,
  errorMessage,
}) => {
  return (
    <View style={[styles.container, containerViewStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        value={value}
        textAlignVertical={'top'}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        style={[styles.textInput, textStyle]}
      />
      <Separator />
      {errorMessage && <ErrorMessage text={errorMessage} />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    height: 50,
  },
  textInput: {
    ...fontStyles.formText,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
