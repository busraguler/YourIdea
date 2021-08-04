import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerScreenType} from '../../navigation/Router/routes';
import SafeAreaView from 'react-native-safe-area-view';
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.appColors.white}}>
      <MainScreenView style={styles.container}>
        <ScreenContentHeaderText title={'Kullanıcı Girişi'} />
        <Card style={styles.card}>
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
          <Separator marginTop={'25%'} hasHeight={false} />
          <View style={styles.buttonsView}>
            <SubmitButton
              text={'Giriş'}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </Card>
      </MainScreenView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...fontStyles.mainScreenView,
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  card: {
    width: '100%',
    flex: 1,
    marginTop: '40%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  titleView: {},
  title: {
    ...fontStyles.pageHeader,
  },
  buttonsView: {
    display: 'flex',
    marginBottom: '10%',
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
