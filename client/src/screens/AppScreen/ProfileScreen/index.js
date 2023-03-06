import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import ProfileCards from '../../../components/ProfileCards';
import ProfileListItem from '../../../components/ProfileListItem';
import colors from '../../../config/colors';

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.nameAccountContainer}>
                <Text style={styles.nameText}>Kunal Sharma</Text>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.accountImage} />
            </View>
            <ScrollView horizontal={true}>
                <ProfileCards color={colors.primary} name='help-circle' size={40} text='Help' />
                <ProfileCards color={colors.primary} name='wallet' size={40} text='Wallet' />
                <ProfileCards color={colors.primary} name='ambulance' size={40} text='Ride' />
            </ScrollView>
            <View style={styles.bottomContainer}>
                <ProfileListItem text='Message' name='message' />
                <ProfileListItem text='Coupons' name='sale' />
                <ProfileListItem text='Refer friends to get deals' name='account-multiple' />
                <ProfileListItem text='Settings' name='account-settings' />
                <ProfileListItem text='Legal' name='file-document-outline' />
                <ProfileListItem text='Log out' name='power' />
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
        color: colors.primary,
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
    }
});

export default ProfileScreen;