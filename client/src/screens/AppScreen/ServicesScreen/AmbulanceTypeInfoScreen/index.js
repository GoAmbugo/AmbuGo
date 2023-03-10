import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AmbulanceTypesData from '../../../../components/data/AmbulanceTypesData';
import colors from '../../../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import routes from '../../../../navigation/routes';

function AmbulanceTypeInfoScreen({ route, navigation }) {

    const { index } = route.params
    const ambuInfo = AmbulanceTypesData.find((info) => {
        return info.id === index;
    })

    const handleBackPress = () => {
        navigation.goBack()
    }

    const handleGetStarted = () => {
        navigation.pop()
        navigation.navigate(routes.HOMEAPPSCREEN)
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '100%' }} >
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress} activeOpacity={0.8}>
                    <Icon name='arrow-left' size={25} color={colors.gray900} />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{ uri: 'https://i.dummyjson.com/data/products/8/2.jpg' }} style={styles.image} />

                    <Text style={styles.title}>{ambuInfo.name}</Text>
                    <View style={styles.descriptionContainer}>
                        {ambuInfo.description.map((item, key) => {
                            return (
                                <View style={styles.descriptionItemContainer} key={key}>
                                    <View style={styles.descriptionIcon}>
                                        <Icon name='ambulance' size={25} color={colors.gray900} />
                                    </View>
                                    <Text style={styles.descriptionText}>
                                        {item}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.startingAtContainer}>
                        <Text style={styles.startingAtTitle}>Starting at</Text>
                        <Text style={styles.startingAtPrice}>{`₹ ${ambuInfo.startingPrice}/hour`}</Text>
                    </View>
                    <TouchableOpacity style={styles.getStartedContainer} activeOpacity={0.8} onPress={handleGetStarted}>
                        <Text style={styles.getStartedText}>Get Started</Text>
                        <Icon name='arrow-right' size={25} color={colors.white} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
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
    title: {
        color: colors.gray900,
        fontSize: 28,
        fontWeight: 700,
        alignSelf: 'center',
        paddingVertical: 12,
        letterSpacing: 1
    },
    descriptionText: {
        color: colors.gray900,
        fontSize: 16,
        fontWeight: 500,
        marginEnd: 48
    },
    descriptionContainer: {
        paddingVertical: 20,
        gap: 10,
        alignItems: 'flex-start',
        width: '100%'
    },
    descriptionItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        gap: 10
    },
    descriptionIcon: {
        padding: 4,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 20,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startingAtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 40,
    },
    startingAtTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: colors.gray900
    },
    startingAtPrice: {
        fontSize: 20,
        fontWeight: 600,
        color: colors.gray900
    },
    getStartedContainer: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        width: '80%',
        marginVertical: 40,
        paddingVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        alignSelf: 'center'
    },
    getStartedText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 400
    },

});

export default AmbulanceTypeInfoScreen;