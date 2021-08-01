import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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

const FormScreen: DrawerScreenType<'Home'> = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <NavigationHeader
          title={'Form'}
          isRightIcon={true}
          onPressRigthIcon={() => navigation.navigate('Home')}
        />
        <ScreenContentHeaderText title={'Hoşgeldiniz'} />
        <MainScreenView style={styles.container}>
          <Separator marginBottom={40} hasHeight={false} />
          <Card>
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
      </ScrollView>
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
