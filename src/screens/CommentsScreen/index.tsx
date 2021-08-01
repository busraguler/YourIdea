import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {DrawerScreenType} from '../../navigation/Router/routes';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Card,
  MainScreenView,
  ScreenContentHeaderText,
  Loading,
} from '../../components';
import fontStyles from '../../styles/fontStyles';
import NavigationHeader from '../../navigation/NavigationHeader';
import CommentItem from './CommentItem';
import {colors} from '../../styles';

const CommentsScreen: DrawerScreenType<'Comments'> = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsApi();
  }, []);

  const getCommentsApi = async () => {
    try {
      const response = await fetch(
        'https://opencollective.com/sustainoss/events.json?limit=10&offset=0',
      );
      const json = await response.json();
      setComments(json);
      setLoading(false);
      return json;
    } catch (error) {
      console.error(error);
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
          <ScreenContentHeaderText title={'Yorumlar'} />
          <Loading loading={loading} />
          <Card>
            {comments &&
              comments.length > 0 &&
              comments.map((item, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() =>
                      navigation.navigate('CommentDetail', {name: 'item.name'})
                    }>
                    <CommentItem
                      name={item.name}
                      description={item.description}
                      imageLink={item.image}
                    />
                  </TouchableOpacity>
                );
              })}
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
});

export default CommentsScreen;
