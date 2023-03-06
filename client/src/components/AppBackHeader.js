import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

function AppBackHeader({ text, color, destination, destinationObject }) {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate(destination, destinationObject)
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={handlePress}>
            <Icon name="chevron-left" size={30} color={color} />
            <Text style={{ color: color }}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default AppBackHeader;