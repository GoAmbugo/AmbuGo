import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../../../config/colors';

function ReferScreen({ navigation }) {

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
                        <Text style={styles.title}>Want to save 50%?</Text>
                        <Text style={styles.paragraph}>For each friend successfully invite to take their first ride on whatsapp, you will save upto 50%.</Text>
                    </View>
                    <Text style={[styles.title, styles.topContainer]}>You get</Text>
                    <View style={styles.outerMiddleContainer}>
                        <Icon name='gift-outline' size={50} color={colors.primary} />
                        <View style={styles.innerMiddleContainer}>
                            <Text style={styles.subTitle}>50% of two rides</Text>
                            <Text style={styles.paragraph}>For each friend successfully invite to take their first ride on whatsapp, you will save upto 50%.</Text>
                        </View>
                    </View>
                    <Text style={[styles.title, styles.topContainer]}>Your friends get</Text>
                    <View style={styles.outerMiddleContainer}>
                        <Icon name='wallet-giftcard' size={50} color={colors.primary} />
                        <View style={styles.innerMiddleContainer}>
                            <Text style={styles.subTitle}>50% of their first two rides</Text>
                            <Text style={styles.paragraph}>For each friend successfully invite to take their first ride on whatsapp, you will save upto 50%.</Text>
                        </View>
                    </View>
                    <Text style={[styles.subTitle, styles.topContainer]}>Have additional questions?</Text>
                    <View style={styles.faqContainer}>
                        <Text style={styles.paragraph}>Click here to read </Text>
                        <Text style={styles.faqText}>FAQs</Text>
                    </View>
                    <View style={{ height: 40 }}></View>
                </ScrollView>
                <TouchableOpacity style={styles.inviteFriendsContainer} activeOpacity={0.8} onPress={() => { }}>
                    <Text style={styles.inviteFriendsText}>Invite friends</Text>
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
    subTitle: {
        color: colors.gray900,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 1,
    },
    paragraph: {
        fontSize: 16,
        color: colors.gray400,
        fontWeight: 500
    },
    outerMiddleContainer: {
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        marginTop: 28,
        gap: 20,
        alignItems: 'center'
    },
    innerMiddleContainer: {
        width: '80%',
        gap: 8
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
    faqContainer: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    faqText: {
        color: colors.primary,
        fontWeight: 600
    }
});

export default ReferScreen;