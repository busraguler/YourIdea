import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
import {colors} from '../../styles';

const FormScreen: DrawerScreenType<'Form'> = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [profession, setProfession] = useState('');
  const [nameValidation, setNameValidation] = useState(false);
  const [contentValidation, setContentValidation] = useState(false);
  const [professionValidation, setProfessionValidation] = useState(false);

  useEffect(() => {
    setNameValidation(false);
    setContentValidation(false);
    setProfessionValidation(false);
  }, [name, content, profession]);

  const sumbitForm = () => {
    let valid = true;
    if (name === '') {
      setNameValidation(true);
      valid = false;
    }
    if (content === '') {
      setContentValidation(true);
      valid = false;
    }

    if (profession === '') {
      setProfessionValidation(true);
      valid = false;
    }

    if (valid) {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.appColors.white}}>
      <ScrollView>
        <NavigationHeader
          isLeftIcon={true}
          onPressLeftIcon={() => navigation.navigate('Home')}
          title={'Form'}
          isRightIcon={true}
          onPressRightIcon={() => navigation.navigate('Home')}
        />
        <MainScreenView style={styles.container}>
          <ScreenContentHeaderText title={'Düşüncelerinizi İletin'} />

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
              errorMessage={
                nameValidation
                  ? 'Bu alan boş kalamaz.'
                  : name.length <= 2 && name != ''
                  ? 'Adınız en az 2 karakterden oluşmalıdır.'
                  : null
              }
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
                professionValidation ? 'Bu alan boş kalamaz.' : null
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
              errorMessage={
                contentValidation
                  ? 'Bu alan boş kalamaz.'
                  : content.length > 200
                  ? 'Öneriler 200 karakteri geçmemelidir.'
                  : null
              }
              placeholder={'Önerileriniz'}
              value={content}
              onChangeText={content => setContent(content)}
            />
            <Separator marginBottom={40} hasHeight={false} />
            <SubmitButton text={'Gönder'} onPress={() => sumbitForm()} />
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
