import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import colors from '../config/colors';

function AmbulanceTypeCard({ name, image }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.ambulanceImage} />
            </TouchableOpacity>
            <Text style={styles.ambulanceTypeText} numberOfLines={1}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginHorizontal: 12,
        backgroundColor: colors.white,
        alignSelf: 'center',
        elevation: 16,
        borderRadius: 20,
        width: 75,
        height: 75
    },
    ambulanceImage: {
        flex: 1,
        borderRadius: 20
    },
    ambulanceTypeText: {
        maxWidth: 100,
        paddingVertical: 8,
        fontWeight: 700,
        color: colors.gray900
    }
});

export default AmbulanceTypeCard;