import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../../../config/colors';
import legalData from './../../../../components/data/LegalData';
import { TouchableRipple } from 'react-native-paper';

function LegalScreen({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '100%' }} >
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress} activeOpacity={0.8}>
                    <Icon name='arrow-left' size={25} color={colors.gray900} />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Legal</Text>
                    <View style={styles.itemsContainer}>
                        {
                            legalData.map((item) => {
                                return (
                                    <TouchableRipple style={styles.itemContainer} rippleColor={colors.gray300} onPress={() => { }} key={item.id}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    </TouchableRipple>
                                )
                            })
                        }
                    </View>
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
    itemsContainer: {
        paddingVertical: 20
    },
    itemContainer: {
        paddingHorizontal: 32,
        paddingVertical: 20
    },
    itemName: {
        fontSize: 16,
        color: colors.gray900,
        fontWeight: 400
    }
});

export default LegalScreen;