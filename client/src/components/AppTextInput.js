import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function AppTextInput({ name, placeholder, onChangeText, ...otherProps }) {
    return (
        <View style={styles.container}>
            {name && <Icon name={name} size={20} style={styles.icon} />}
            <TextInput placeholder={placeholder} style={styles.textInput} {...otherProps} onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e5e7eb",
        borderRadius: 25,
        marginVertical: 10,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        alignItems: "center"
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        overflow: "hidden",
        flex: 1
    },
    icon: {
        marginRight: 5
    }

})