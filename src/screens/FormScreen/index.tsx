import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
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
import NavigationHeader from '../../navigation/NavigationHeader';

const FormScreen: DrawerScreenType<'Form'> = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [profession, setProfession] = useState('');
  const [formValidation, setFormValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    content: '',
    profession: '',
  });

  useEffect(() => {
    setErrorMessage({name: '', content: '', profession: ''});
    if (name != '' && name.length < 2) {
      setErrorMessage({
        ...errorMessage,
        name: 'Lütfen en az 2 karakter giriniz.',
      });
      setFormValidation(false);
    }
    if (content != '' && content.length > 200) {
      setErrorMessage({
        ...errorMessage,
        content: 'Lütfen 200 karekteri geçmeyiniz.',
      });
      setFormValidation;
      false;
    }
  }, [name, content, profession]);

  const sumbitForm = () => {
    let nameError = false;
    name == '' ? (nameError = true) : false;

    let contentError = false;
    content == '' ? (contentError = true) : false;

    let professionError = false;
    profession == '' ? (professionError = true) : false;

    setErrorMessage({
      content: contentError ? 'Bu alan doldurulmalı.' : '',
      name: nameError ? 'Bu alan doldurulmalı.' : '',
      profession: professionError ? 'Bu alan doldurulmalı.' : '',
    });

    if (!nameError && !contentError && !professionError && formValidation) {
      navigation.navigate('Comments');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <NavigationHeader
          isLeftIcon={true}
          onPressLeftIcon={() => navigation.navigate('Home')}
          title={'Form'}
          isRightIcon={true}
          onPressRigthIcon={() => navigation.navigate('Home')}
        />
        <MainScreenView style={styles.container}>
          <ScreenContentHeaderText title={'Düşüncelerinizi İletin'} />
          <Separator marginBottom={40} hasHeight={false} />

          <Card>
            <View style={styles.description}>
              <Text style={{...fontStyles.normalText}}>
                Dünyamızı nasıl koruruz?
              </Text>
              <Text style={{...fontStyles.normalText}}>
                Lütfen fikirlerinizi bizimle paylaşın.
              </Text>
            </View>
            <Separator marginBottom={20} hasHeight={false} />
            <TextInput
              containerViewStyle={{}}
              textStyle={{
                ...fontStyles.normalText,
              }}
              placeholder={'Adınız'}
              value={name}
              errorMessage={errorMessage.name != '' && errorMessage.name}
              onChangeText={name => setName(name)}
            />
            <TextInput
              containerViewStyle={{}}
              textStyle={{
                ...fontStyles.normalText,
              }}
              placeholder={'Mesleğiniz'}
              value={profession}
              errorMessage={
                errorMessage.profession != '' && errorMessage.profession
              }
              onChangeText={profession => setProfession(profession)}
            />
            <TextInput
              containerViewStyle={{
                height: 100,
              }}
              multiline={true}
              numberOfLines={10}
              textStyle={{
                ...fontStyles.normalText,
              }}
              errorMessage={errorMessage.content != '' && errorMessage.content}
              placeholder={'Önerileriniz'}
              value={content}
              onChangeText={content => setContent(content)}
            />
            <Separator marginBottom={40} hasHeight={false} />
            <SubmitButton text={'Kaydet'} onPress={() => sumbitForm()} />
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
  description: {
    width: '100%',
  },
});

export default FormScreen;
