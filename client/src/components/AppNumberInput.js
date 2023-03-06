import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import colors from '../config/colors';
import CountryData from './data/CountryData';

function AppNumberInput({ country, phone, setPhone }) {

    const handleChange = (text) => {
        setPhone(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.phoneCode}>{CountryData[country - 1].code}</Text>
            <TextInput style={styles.textInput} placeholder='Mobile number' onChangeText={(text) => handleChange(text)} keyboardType='phone-pad' value={phone} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray100,
        paddingHorizontal: 10,
        borderRadius: 20,
        flex: 1
    },
    phoneCode: {
        marginRight: 15,
        fontSize: 18,
        fontWeight: 500,
    },
    textInput: {
        fontSize: 18,
        overflow: "hidden",
        flex: 1,
        fontWeight: "500",
        color: colors.gray900
    }
});

export default AppNumberInput;