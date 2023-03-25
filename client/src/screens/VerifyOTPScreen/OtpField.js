import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import colors from '../../config/colors';

function OtpField({inputRef, nextDigitRef, digit, setDigit}) {
  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      maxLength={1}
      keyboardType="numeric"
      selectionColor={colors.primary}
      onChangeText={text => {
        setDigit(text);
        if (text !== '') {
          if (nextDigitRef) {
            nextDigitRef.current.focus();
          }
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray100,
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 20,
    height: 45,
    width: 45,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.gray100,
    color: colors.primary,
    elevation: 4,
  },
});

export default OtpField;
