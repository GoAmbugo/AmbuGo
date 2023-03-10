import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

function ProfileListItem({ name = 'account-multiple', text, color, size }) {

    const navigation = useNavigation()

    const showAlert = () =>
        Alert.alert(
            'Log out',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Yes',
                    onPress: () => { /*log out the current user*/ },
                    style: 'default',
                },
                {
                    text: 'No',
                    onPress: () => { /*Do nothing*/ },
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { }
            },
        );

    const handlePress = (text) => {
        if (text === 'Message') navigation.navigate(routes.MESSAGESCREEN)
        if (text === 'Coupons') navigation.navigate(routes.COUPONSCREEN)
        if (text === 'Refer friends to get deals') navigation.navigate(routes.REFERSCREEN)
        if (text === 'Settings') navigation.navigate(routes.SETTINGSCREEN)
        if (text === 'Legal') navigation.navigate(routes.LEGALSCREEN)
        if (text === 'Log out') {
            showAlert()
        }
    }

    return (
        <>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(text)}>
                <View style={styles.container}>
                    <Icon name={name} size={35} color={color} />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 4,
    },
    text: {
        color: colors.gray900,
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 24
    }
});

export default ProfileListItem;