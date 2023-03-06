import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

function AmbulanceTypeCard({ name, image, index }) {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate(routes.AMBULANCETYPEINFO, { index: index })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8} onPress={handlePress}>
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