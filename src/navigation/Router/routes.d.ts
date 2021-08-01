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
  CommentDetail: {
    name?: string;
    description?: string;
    imageLink?: string;
  };
};

export type DrawerScreenType<K extends keyof DrawerScreenParametersType> =
  ScreenComponentType<DrawerScreenParametersType, K>;

export type DrawerScreenNavigationProps =
  NavigationProp<DrawerScreenParametersType>;
///////////

/*type LoginScreenRouteProp = RouteProp<DrawerScreenParametersType, 'Login'>;
type LoginScreenNavigationProp = StackNavigationProp<
  DrawerScreenParametersType,
  'Login'
>;

type FormScreenRouteProp = RouteProp<DrawerScreenParametersType, 'Form'>;
type FormScreenNavigationProp = StackNavigationProp<
  DrawerScreenParametersType,
  'Form'
>;

type CommentsSecreenRouteProp = RouteProp<
  DrawerScreenParametersType,
  'Comments'
>;
type CommentsScreenNavigationProp = StackNavigationProp<
  DrawerScreenParametersType,
  'Comments'
>;

type CommentDetailSecreenRouteProp = RouteProp<
  DrawerScreenParametersType,
  'CommentDetail'
>;
type CommentDetailScreenNavigationProp = StackNavigationProp<
  DrawerScreenParametersType,
  'CommentDetail'
>;

type HomeSecreenRouteProp = RouteProp<DrawerScreenParametersType, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<
  DrawerScreenParametersType,
  'Home'
>;

type LoginProps = {
  route: LoginScreenRouteProp;
  navigation: FormScreenNavigationProp;
};
type FormProps = {
  route: FormScreenRouteProp;
  navigation: FormScreenNavigationProp;
};

type CommentsProps = {
  route: CommentsSecreenRouteProp;
  navigation: CommentsScreenNavigationProp;
};

type CommentDetailProps = {
  route: CommentDetailSecreenRouteProp;
  navigation: CommentDetailScreenNavigationProp;
};

type HomeProps = {
  route: HomeSecreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
*/
