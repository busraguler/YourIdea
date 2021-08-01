import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import { colors } from '../../styles';

interface Props extends ViewStyle {
  hasHeight?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Separator: React.FC<Props> = ({
  hasHeight = true,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginRight,
  style,
}) => (
  <View
    style={[
      styles.container,
      {
        height: hasHeight ? 1.2 : 0,
        marginVertical,
        marginHorizontal,
        marginTop,
        marginBottom,
        marginRight,
      },
      style,
    ]}
  />
);

export default Separator;

const styles = StyleSheet.create({
  container: {
    opacity: 0.1,
    backgroundColor: colors.appColors.pageHeader,
  },
});
