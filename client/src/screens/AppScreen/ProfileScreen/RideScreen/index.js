import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'

import colors from '../../../../config/colors';
import legalData from './../../../../components/data/LegalData';
import { TouchableRipple } from 'react-native-paper';

function RideScreen({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '100%' }} >
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress} activeOpacity={0.8}>
                    <Icon name='arrow-left' size={25} color={colors.gray900} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectTimeButton} onPress={() => { }} activeOpacity={0.8}>
                    <Text style={{ color: colors.white, fontWeight: 600 }}>Past</Text>
                    <IconMat name='arrow-drop-down' size={25} color={colors.white} />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Choose a trip</Text>

                    {/* add your code here */}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        padding: 4,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        margin: 12,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    selectTimeButton: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        backgroundColor: colors.gray900,
        borderRadius: 20,
        position: 'absolute',
        margin: 12,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
        right: 0,
        top: 0,
        flexDirection: 'row',
    },
    title: {
        color: colors.gray900,
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: 1,
        paddingTop: '15%',
        paddingBottom: 16,
        paddingHorizontal: 28,
        marginHorizontal: 4,
        backgroundColor: colors.gray100
    },
});

export default RideScreen;