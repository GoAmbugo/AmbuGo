import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper';

import colors from '../../../../config/colors';
import CustomRatingBar from '../../../../components/CustomRatingsBar';
import AllTopicsData from '../../../../components/data/AllTopicsData';

function HelpScreen({ navigation }) {

    const [defaultRating, setDefaultRating] = useState(0);

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
                    <Text style={styles.title}>Help</Text>
                    {/* Last ride container */}
                    <View style={styles.topContainer}>
                        <Text style={styles.topText}>Your last ride</Text>
                        <View style={styles.topSubContainer}>
                            {/* Fetch the user's last ride info from the backend */}
                            <Text style={styles.topText}>20/02/23, 15:32</Text>
                            <View style={styles.topInnerContainer}>
                                <Text style={styles.topText}>Cash ₹ 1260.00</Text>
                                {/* change the defaultCount to the last ride's rating count */}
                                <CustomRatingBar defaultRating={defaultRating} setDefaultRating={setDefaultRating} enabled={false} count={5} size={16} color={colors.gray900} defaultCount={5} />
                            </View>
                        </View>
                    </View>

                    {/* Report an issue container */}
                    <TouchableRipple style={styles.topContainer} onPress={() => { }} rippleColor={colors.gray300}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[styles.topText, { fontWeight: 500 }]}>Report an issue with this trip</Text>
                            <IconMat name='arrow-forward-ios' color={colors.gray900} size={20} />
                        </View>
                    </TouchableRipple>

                    <View style={{ paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: colors.gray400 }}></View>

                    <Text style={[styles.topText, {
                        fontWeight: 500, color: colors.gray400, paddingHorizontal: 32,
                        paddingTop: 32, paddingBottom: 12
                    }]}>All topics</Text>

                    {/* All topics container */}
                    {
                        AllTopicsData.map((item) => {
                            return (
                                <TouchableRipple key={item.id} style={[styles.topContainer, { paddingVertical: 12 }]} onPress={() => { }} rippleColor={colors.gray300}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={styles.topicText}>{item.name}</Text>
                                        <IconMat name='arrow-forward-ios' color={colors.gray400} size={20} />
                                    </View>
                                </TouchableRipple>
                            )
                        })
                    }

                    <View style={{ height: 40 }}></View>

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
    topContainer: {
        paddingHorizontal: 32,
        paddingVertical: 20,
        gap: 12
    },
    topText: {
        fontSize: 16,
        color: colors.gray900
    },
    topSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topInnerContainer: {
        alignItems: 'flex-end',
        gap: 8
    },
    topicText: {
        fontSize: 16,
        color: colors.gray600
    }

});

export default HelpScreen;