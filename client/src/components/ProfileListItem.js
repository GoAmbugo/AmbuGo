import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../config/colors';

function ProfileListItem({ name = 'account-multiple', text, color, size }) {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Icon name={name} size={35} color={colors.primary} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
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