import React from 'react';
import {Modal, StyleProp, View, ViewStyle} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import {colors} from '../../styles';

interface LoadingProps {
  loading?: boolean;
  loadingViewStyle?: StyleProp<ViewStyle>;
}

const Loading: React.FC<LoadingProps> = ({loading, loadingViewStyle}) => {
  if (!loading) {
    return null;
  }

  return (
    <Modal visible={true} transparent>
      <View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
          },
          loadingViewStyle,
        ]}>
        <BallIndicator color={colors.appColors.loading} />
      </View>
    </Modal>
  );
};

export default Loading;
