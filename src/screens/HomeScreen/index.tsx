import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {DrawerScreenType} from '../../navigation/Router/routes';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Card,
  Separator,
  SubmitButton,
  MainScreenView,
  ScreenContentHeaderText,
} from '../../components';
import fontStyles from '../../styles/fontStyles';
import NavigationHeader from '../../navigation/NavigationHeader';
import {colors} from '../../styles';

const FormScreen: DrawerScreenType<'Home'> = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.appColors.white}}>
      <NavigationHeader
        title={'Form'}
        isRightIcon={true}
        onPressRightIcon={() => navigation.navigate('Home')}
      />
      <ScreenContentHeaderText title={'Hoşgeldiniz'} />
      <MainScreenView style={styles.container}>
        <Card>
          <Text style={{...fontStyles.normalText}}>
            Yorum yapmak veya yapılan yorumları okumak için seçim yapın :)
          </Text>
          <Separator hasHeight={false} marginBottom={40} />
          <SubmitButton
            text={'Yorum yap'}
            onPress={() => navigation.navigate('Form')}
          />
          <Separator hasHeight={false} marginBottom={20} />
          <SubmitButton
            text={'Yorumlar'}
            onPress={() => navigation.navigate('Comments')}
          />
        </Card>
      </MainScreenView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...fontStyles.mainScreenView,
    flexDirection: 'column',
  },
  titleView: {},
  title: {
    ...fontStyles.pageHeader,
  },
});

export default FormScreen;
