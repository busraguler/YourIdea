import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../styles';

interface NavigationHeaderProps extends ViewProps {
  title?: string;
  onPressLeftIcon?: () => void;
  isLeftIcon?: boolean;
  onPressRightIcon?: () => void;
  isRightIcon?: boolean;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  onPressLeftIcon,
  isLeftIcon,
  onPressRightIcon,
  isRightIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.left]}>
        {isLeftIcon && (
          <TouchableOpacity
            onPress={onPressLeftIcon}
            style={[styles.section, styles.left]}>
            <Image
              source={require('../../assets/left-arrow.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.section, styles.right]}>
        {isRightIcon && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            style={[styles.section, styles.right]}>
            <Image
              source={require('../../assets/home.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  section: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    color: colors.appColors.pageHeader,
  },
  right: {
    alignItems: 'flex-end',
  },
  left: {
    alignItems: 'flex-start',
  },
});
