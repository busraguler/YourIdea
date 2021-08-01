import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import * as dimensions from '../../styles/dimensions';


const MainScreenView: React.FC<ViewProps> = ({style, ...otherProps}) => {
  const {testID} = otherProps;
  return (
    <View
      {...otherProps}
      style={[
        {paddingHorizontal: dimensions.screenMargin},
        styles.container,
        style,
      ]}
      testID={testID || 'MainScreenView'}
    />
  );
};

export default MainScreenView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
