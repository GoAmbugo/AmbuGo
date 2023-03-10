import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

function ProfileCards({ name, color, text, size }) {

    const navigation = useNavigation()

    const handlePress = (text) => {
        if (text == "Help") navigation.navigate(routes.HELPSCREEN)
        if (text == "Wallet") navigation.navigate(routes.WALLETSCREEN)
        if (text == "Ride") navigation.navigate(routes.RIDESCREEN)
    }

    return (
        <TouchableOpacity style={[styles.container, { marginHorizontal: 24, marginLeft: name === 'help-circle' ? 32 : 0 }]} activeOpacity={0.8} onPress={() => handlePress(text)}>
            <Icon name={name} color={color} size={size} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 16,
        borderRadius: 12,
        backgroundColor: colors.white,
        elevation: 4
    },
    text: {
        color: colors.gray900,
        fontWeight: 600,
        marginTop: 4,
        fontSize: 16,
    }
});

export default ProfileCards;