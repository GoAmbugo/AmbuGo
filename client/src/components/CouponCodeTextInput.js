import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

export default function CouponCodeTextInput({
  name,
  placeholder,
  onChangeText,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {name && <Icon name={name} size={20} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        {...otherProps}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray100,
    borderRadius: 4,
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  textInput: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    overflow: 'hidden',
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
});
