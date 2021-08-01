import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import * as dimensions from '../../styles/dimensions';

const MainScreenView: React.FC<ViewProps> = ({style, ...otherProps}) => {
  return (
    <View
      {...otherProps}
      style={[{paddingHorizontal: dimensions.screenMargin}, style]}
    />
  );
};

export default MainScreenView;

const styles = StyleSheet.create({});
