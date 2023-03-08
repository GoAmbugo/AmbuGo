import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper';

import colors from '../../../../config/colors';
import SettingsScreenData from '../../../../components/data/SettingsScreenData';

function SettingsScreen({ navigation }) {

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
                    <Text style={styles.title}>Settings</Text>

                    <TouchableRipple onPress={() => { }}
                        rippleColor={colors.white} style={{ backgroundColor: colors.gray100 }} >
                        <View style={styles.outerContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.nameText} numberOfLines={1}>Kunal Sharma</Text>
                                    <Text style={styles.phoneText}>+91 8700215187</Text>
                                </View>
                                <IconMat name='arrow-forward-ios' size={20} color={colors.gray400} />
                            </View>
                        </View>
                    </TouchableRipple>
                    <View style={{ marginVertical: 20 }}>
                        {
                            SettingsScreenData.map((item) => {
                                return (
                                    <View style={styles.listContainer} key={item.id}>
                                        <Icon name={item.icon} size={30} color={colors.gray600} />
                                        <TouchableRipple onPress={() => { }}
                                            rippleColor={colors.gray300} style={styles.listRippleContainer} >
                                            <View style={styles.listItemContainer}>
                                                <View style={{ maxWidth: '75%', gap: 10 }}>
                                                    <Text numberOfLines={1} style={styles.nameText}>{item.name}</Text>
                                                    {
                                                        item.description.length === 0 ?
                                                            <></> :
                                                            <Text style={styles.phoneText}>{item.description}</Text>
                                                    }

                                                </View>
                                                <IconMat name='arrow-forward-ios' size={20} color={colors.gray400} />
                                            </View>
                                        </TouchableRipple>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={styles.bottomContainer}>
                        <Text style={styles.nameText}>Trusted contacts</Text>
                        <View style={{ marginTop: 8 }} >
                            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                <Icon name='account-multiple' size={16} color={colors.gray600} />
                                <Text style={styles.phoneText}>Manage trusted contacts</Text>
                            </View>
                        </View>
                        <Text style={styles.phoneText}>Share your ride status with family and friends with a single tap</Text>
                    </View>

                    <View style={styles.bottomContainer}>
                        <Text style={styles.nameText}>Safety</Text>
                        <Text style={styles.phoneText}>Control your safety settings, including ride check</Text>
                    </View>

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
        backgroundColor: colors.white
    },
    outerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 32,
        paddingVertical: 12
    },
    detailsContainer: {
        maxWidth: '75%',
    },
    imageContainer: {
        borderRadius: 30,
        width: 60,
        height: 60,
        overflow: 'hidden',
        backgroundColor: colors.white,
        elevation: 12
    },
    image: {
        flex: 1
    },
    nameText: {
        fontWeight: 600,
        color: colors.gray900,
        fontSize: 16,
    },
    phoneText: {
        color: colors.gray600,
    },
    listContainer: {
        paddingLeft: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listRippleContainer: {
        flex: 1,
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginLeft: 16,
        paddingRight: 32,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray400
    },
    bottomContainer: {
        paddingHorizontal: 32,
        paddingTop: 20,
        gap: 12
    },


});

export default SettingsScreen;