import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={handleBackPress}
      activeOpacity={0.8}>
      <Icon name="arrow-left" size={25} color={colors.gray900} />
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  backButton: {
    padding: 4,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    margin: 12,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
