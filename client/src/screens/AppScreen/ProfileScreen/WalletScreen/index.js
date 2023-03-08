import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'

import colors from '../../../../config/colors';
import { TouchableRipple } from 'react-native-paper';

function WalletScreen({ navigation }) {

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
                    <Text style={styles.title}>Wallet</Text>

                    <TouchableOpacity style={styles.ambugoCashCard} onPress={() => { }} activeOpacity={0.9}>
                        <View style={styles.cashCardInnerContainer}>
                            <Text style={{ fontSize: 16, color: colors.gray600 }}>Ambugo cash</Text>
                            <Text style={{ fontSize: 20, color: colors.gray900, fontWeight: 700 }}>₹ 100.00</Text>
                            <View style={styles.giftcardContainer}>
                                <Icon name='account' size={16} color={colors.white} />
                                <Text style={styles.giftcardText}>Gift card</Text>
                            </View>
                        </View>
                        <View>
                            <IconMat name='arrow-forward-ios' size={20} color={colors.gray400} />
                        </View>
                    </TouchableOpacity>

                    {/* Payment methods */}
                    <View style={styles.paymentMethodContainer}>
                        <Text style={styles.bottomContainerTitle}>Payment Methods</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Icon name='cash' size={20} color={colors.gray600} />
                            <Text style={styles.cashText}>Cash</Text>
                        </View>
                        <View style={styles.addPaymentContainer}>
                            <Text style={styles.addPaymentText}>Add payment method</Text>
                        </View>
                    </View>

                    {/* Promotions */}
                    <View style={styles.paymentMethodContainer}>
                        <Text style={styles.bottomContainerTitle}>Promotions</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Icon name='cash' size={20} color={colors.gray600} />
                                <Text style={styles.cashText}>Promotions</Text>
                            </View>
                            <Text style={styles.cashText}>10</Text>
                        </View>
                        <View style={styles.addPromoCode}>
                            <Icon name='plus' size={20} color={colors.gray600} />
                            <Text style={styles.addPaymentText}>Add promo code</Text>
                        </View>
                    </View>

                    {/* Referrals */}
                    <View style={styles.paymentMethodContainer}>
                        <Text style={styles.bottomContainerTitle}>Referrals</Text>
                        <View style={styles.addPromoCode}>
                            <Icon name='plus' size={20} color={colors.gray600} />
                            <Text style={styles.addPaymentText}>Add promo code</Text>
                        </View>
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
    ambugoCashCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 32,
        padding: 20,
        borderRadius: 12,
        backgroundColor: colors.white,
        elevation: 4,
    },
    giftcardContainer: {
        backgroundColor: colors.gray900,
        flexDirection: 'row',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    giftcardText: {
        color: colors.white
    },
    cashCardInnerContainer: {
        gap: 20
    },
    paymentMethodContainer: {
        marginHorizontal: 32,
        marginBottom: 32,
        gap: 12
    },
    bottomContainerTitle: {
        fontSize: 16,
        fontWeight: 600,
        color: colors.gray900
    },
    addPaymentContainer: {
        backgroundColor: colors.gray100,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%'
    },
    cashText: {
        fontSize: 16,
        color: colors.gray900,
    },
    addPromoCode: {
        borderRadius: 4,
        gap: 8,
        paddingVertical: 4,
        alignItems: 'center',
        width: '75%',
        flexDirection: 'row',
        color: colors.gray400
    }
});

export default WalletScreen;