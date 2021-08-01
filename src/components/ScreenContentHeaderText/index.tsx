import React from 'react';
import {StyleSheet, View, ViewProps, Text} from 'react-native';
import { fontStyles } from '../../styles';
import { Separator} from '../../components';

interface ScreenContentHeaderTextProps extends ViewProps {
  title?:string;
}
const ScreenContentHeaderText: React.FC<ScreenContentHeaderTextProps> = ({
  title
}) => {
  return (
    <>
      <Separator
        hasHeight={false}
        marginTop={34}
        marginBottom={34}
      />
      <View style={styles.container}>
        <Text style={styles.pageHeader}>{title}</Text>
      </View>
      <Separator
        hasHeight={false}
        marginBottom={20}
      />
    </>
  );
};

export default ScreenContentHeaderText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  pageHeader:{
    ...fontStyles.pageHeader
  }
});
