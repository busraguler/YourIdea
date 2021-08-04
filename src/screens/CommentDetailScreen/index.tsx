import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {DrawerScreenType} from '../../navigation/Router/routes';
import SafeAreaView from 'react-native-safe-area-view';
import {
  MainScreenView,
  ScreenContentHeaderText,
  Card,
  Separator,
} from '../../components';
import fontStyles from '../../styles/fontStyles';
import {observer} from 'mobx-react';
import NavigationHeader from '../../navigation/NavigationHeader';
import {colors} from '../../styles';
import AppStore from '../../store/AppStore';

const CommentDetailScreen: DrawerScreenType<'CommentDetail'> = observer(
  ({navigation, route}) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.appColors.white}}>
        <ScrollView>
          <NavigationHeader
            isLeftIcon={true}
            onPressLeftIcon={() => navigation.navigate('Comments')}
            title={'Form'}
            isRightIcon={true}
            onPressRightIcon={() => navigation.navigate('Home')}
          />
          <MainScreenView style={styles.container}>
            <ScreenContentHeaderText title={'İçerik'} />
            <Card>
              <View style={{alignItems: 'flex-start', width: '100%'}}>
                <Text style={{...fontStyles.titleText}}>
                  {AppStore.commentName}
                </Text>
              </View>
              <Separator hasHeight={false} marginTop={20} />
              <View>
                <Text style={{...fontStyles.normalText}}>
                  {AppStore.commentContent}
                </Text>
                <Text style={{...fontStyles.normalText}}>
                  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                  metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                  hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                  alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                  sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                  dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                  içeren Letraset yapraklarının yayınlanması ile ve yakın
                  zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                  masaüstü yayıncılık yazılımları ile popüler olmuştur. Lorem
                  Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                  metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                  hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                  alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                  sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                  dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                  içeren Letraset yapraklarının yayınlanması ile ve yakın
                  zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                  masaüstü yayıncılık yazılımları ile popüler olmuştur. Lorem
                  Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                  metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                  hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                  alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                  sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                  dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                  içeren Letraset yapraklarının yayınlanması ile ve yakın
                  zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                  masaüstü yayıncılık yazılımları ile popüler olmuştur.
                </Text>
              </View>
            </Card>
          </MainScreenView>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    ...fontStyles.mainScreenView,
    flexDirection: 'column',
  },
});

export default CommentDetailScreen;
