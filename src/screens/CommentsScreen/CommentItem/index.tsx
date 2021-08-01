import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from 'react-native-reanimated';
import {Separator} from '../../../components';
import {colors, fontStyles} from '../../../styles';

export interface CommentItemProps {
  name?: string;
  description?: string;
  imageLink?: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  name,
  description,
  imageLink,
}) => {
  const accountName = text => {
    if (text.length > 30) {
      return text.substring(0, 30) + '...';
    }
    return text;
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              width: 48,
              height: 48,
              backgroundColor: colors.appColors.imageBack,
              borderRadius: 100,
              marginRight: 20,
            }}>
            <Image source={{uri: imageLink}} style={styles.image} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            <View>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.authorText}>
                {name}
              </Text>
            </View>
            <View>
              <Text style={styles.definitionText}>{description}</Text>
            </View>
          </View>
        </View>
      </View>
      <Separator marginTop={15} marginBottom={5} />
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  definitionText: {
    ...fontStyles.subtitleText,
  },
  authorText: {
    ...fontStyles.normalText,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
