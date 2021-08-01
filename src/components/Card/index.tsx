import React from 'react';
import {StyleSheet, View,ViewProps,Text} from 'react-native';
import colors from '../../styles/colors';

interface CardProps extends ViewProps {}

const Card: React.FC<CardProps> = props => {
  return (
    <View
      {...props}
      style={[styles.container,props.style]}
    >
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    backgroundColor: colors.appColors.white,
    width: '100%',
  },
});
