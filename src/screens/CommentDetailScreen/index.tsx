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
  Loading,
} from '../../components';
import fontStyles from '../../styles/fontStyles';
import NavigationHeader from '../../navigation/NavigationHeader';

const CommentDetailScreen: DrawerScreenType<'CommentDetail'> = ({
  navigation,
  route,
}) => {
  console.log(route);
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
          <ScreenContentHeaderText title={'İçerik'} />
          <Separator marginBottom={40} hasHeight={false} />
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <Text style={{...fontStyles.titleText}}>Lorem Ipsum Nedir?</Text>
          </View>
          <View>
            <Text style={{...fontStyles.normalText}}>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
              kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
              sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
              yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
              gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları
              ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı endüstrisinde
              kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
              matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
              galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
              sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
              sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
              dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren
              Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
              PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
              yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
              endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
              bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
              üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri
              endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz
              yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
              değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem
              Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile
              ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
              masaüstü yayıncılık yazılımları ile popüler olmuştur.
            </Text>
          </View>
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
});

export default CommentDetailScreen;
