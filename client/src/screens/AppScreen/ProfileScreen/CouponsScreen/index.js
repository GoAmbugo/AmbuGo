import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../../../config/colors';
import CouponCodeTextInput from './../../../../components/CouponCodeTextInput';

function CouponsScreen({ navigation }) {

    const [code, setCode] = useState("")

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
                    <Image source={{ uri: 'https://i.dummyjson.com/data/products/8/2.jpg' }} style={styles.image} />

                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Coupon Code</Text>
                    </View>

                    <View style={styles.codeOuterContainer}>
                        <CouponCodeTextInput placeholder="Your code" onChangeText={(text) => setCode(text)} />
                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraph}>Enter the code to get 10% off on your first ride</Text>

                </ScrollView>
                <TouchableOpacity style={styles.inviteFriendsContainer} activeOpacity={0.8} onPress={() => { }}>
                    <Text style={styles.inviteFriendsText}>Request Ambugo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: Dimensions.get('window').height / 2.5,
        resizeMode: 'cover'
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
    topContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 28,
        gap: 8
    },
    title: {
        color: colors.gray900,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: 1,
    },
    codeOuterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginVertical: 10,
        marginHorizontal: 40
    },
    applyButton: {
        backgroundColor: colors.gray400,
        paddingHorizontal: 8,
        borderRadius: 4,
        height: '100%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    applyText: {
        textAlign: 'center',
        color: colors.white
    },
    inviteFriendsContainer: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        width: '80%',
        marginBottom: 12,
        paddingVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        alignSelf: 'center'
    },
    inviteFriendsText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 400
    },
    paragraph: {
        fontSize: 14,
        color: colors.gray900,
        alignSelf: 'center'
    }
});

export default CouponsScreen;