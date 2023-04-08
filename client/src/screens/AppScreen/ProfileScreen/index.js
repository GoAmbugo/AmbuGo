import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

import ProfileCards from '../../../components/ProfileCards';
import ProfileListItem from '../../../components/ProfileListItem';
import colors from '../../../config/colors';
import { AuthContext } from '../../../auth/context';

function ProfileScreen(props) {

    const { user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.nameAccountContainer}>
                <Text style={styles.nameText}>{user['first_name'] + ' ' + user['last_name']}</Text>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.accountImage} />
            </View>
            <ScrollView horizontal={true}>
                <ProfileCards color={colors.gray600} name='help-circle' size={40} text='Help' />
                <ProfileCards color={colors.gray600} name='wallet-outline' size={40} text='Wallet' />
                <ProfileCards color={colors.gray600} name='ambulance' size={40} text='Ride' />
            </ScrollView>
            <View style={styles.bottomContainer}>
                <ProfileListItem text='Message' name='message' color={colors.gray600} />
                <ProfileListItem text='Coupons' name='sale' color={colors.gray600} />
                <ProfileListItem text='Refer friends to get deals' name='account-multiple' color={colors.gray600} />
                <ProfileListItem text='Settings' name='account-settings' color={colors.gray600} />
                <ProfileListItem text='Legal' name='file-document-outline' color={colors.gray600} />
                <ProfileListItem text='Log out' name='power' color={colors.gray600} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    nameAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 24
    },
    nameText: {
        fontSize: 20,
        color: colors.gray600,
        fontWeight: 700
    },
    accountImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    bottomContainer: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        backgroundColor: colors.gray100,
        flexGrow: 100
    },
});

export default ProfileScreen;