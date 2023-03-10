import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import data from './data/CountryData';

function AppCountryInput({country, setCountry}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        placeholder="🇮🇳"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setCountry(item.value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 76,
    marginRight: 20,
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 8,
    flexGrow: 1,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    fontSize: 24,
  },
  placeholderStyle: {
    fontSize: 24,
  },
  selectedTextStyle: {
    fontSize: 24,
  },
});

export default AppCountryInput;
