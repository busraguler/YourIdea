import {Platform, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const screenMargin = 20;

export const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

export const cardBottomMargins = {
  marginBottom: 33,
};
