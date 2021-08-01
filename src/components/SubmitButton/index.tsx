import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity
} from 'react-native';
import fontStyles from '../../styles/fontStyles';

const SubmitButton: React.FunctionComponent<{
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  touchableStyles?: StyleProp<ViewStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}> = ({
  onPress,
  text,
  touchableStyles,
  buttonStyles = {width: '100%'},
  textStyles,
}) => {
  return (
    <TouchableOpacity
      style={touchableStyles}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.buttonContainer, buttonStyles]}>
        <Text style={[styles.buttonText, textStyles]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e309d',
    minHeight: 50,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  buttonText: {
    ...fontStyles.buttonText,
  },
});

export default SubmitButton;
