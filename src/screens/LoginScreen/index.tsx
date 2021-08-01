import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerScreenType} from '../../navigation/Router/routes';
import SafeAreaView from 'react-native-safe-area-view';
import {observer, inject} from 'mobx-react';
import {
  TextInput,
  Card,
  Separator,
  SubmitButton,
  MainScreenView,
  ScreenContentHeaderText,
} from '../../components';
import fontStyles from '../../styles/fontStyles';
import {colors} from '../../styles';

const LoginScreen: DrawerScreenType<'Login'> = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.appColors.white}}>
      <MainScreenView style={styles.container}>
        <ScreenContentHeaderText title={'Kullanıcı Girişi'} />
        <Card>
          <TextInput
            containerViewStyle={{}}
            textStyle={{
              ...fontStyles.normalText,
            }}
            placeholder={'e-Posta adresi'}
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            containerViewStyle={{}}
            textStyle={{
              ...fontStyles.normalText,
            }}
            placeholder={'Şifre'}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Separator marginBottom={40} hasHeight={false} />
          <SubmitButton
            text={'Giriş'}
            onPress={() => navigation.navigate('Home')}
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

export default LoginScreen;
