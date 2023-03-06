import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ErrorText({ text, color }) {
    return (
        <View style={styles.container}>
            <Text style={{ color: color }} >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
});

export default ErrorText;