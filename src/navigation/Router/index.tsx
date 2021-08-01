import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import FormScreen from '../../screens/FormScreen';

import CommentsScreen from '../../screens/CommentsScreen';
import CommentDetailScreen from '../../screens/CommentDetailScreen';
import HomeScreen from '../../screens/HomeScreen';

const Router = () => {
  return <AppContainer />;
};
const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Form: FormScreen,
  Comments: CommentsScreen,
  CommentDetail: CommentDetailScreen,
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default Router;
