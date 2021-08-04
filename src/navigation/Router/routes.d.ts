import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export type ScreenComponentType<
  T extends ParamListBase = {},
  K extends keyof T,
> = React.FunctionComponent<{
  navigation: NavigationProp<T>;
  route: RouteProp<T, K>;
}>;
export type DrawerScreenParametersType = {
  Login: {};
  Form: {};
  Comments: {};
  Home: {};
  CommentDetail: {};
};

export type DrawerScreenType<K extends keyof DrawerScreenParametersType> =
  ScreenComponentType<DrawerScreenParametersType, K>;

export type DrawerScreenNavigationProps =
  NavigationProp<DrawerScreenParametersType>;
