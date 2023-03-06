import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function Screen({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})