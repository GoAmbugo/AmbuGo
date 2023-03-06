import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import routes from '../../navigation/routes';
import Screen from './../../components/Screen';

function WelcomeScreen({ navigation }) {

    const handlePress = () => {
        navigation.navigate(routes.AUTHENTICATION)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Ambu Go</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={handlePress} >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40
    },
    titleText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 700
    },
    buttonContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black,
        paddingVertical: 10,

    },
    buttonText: {
        color: "#fff",
        fontSize: 20
    }
});

export default WelcomeScreen;