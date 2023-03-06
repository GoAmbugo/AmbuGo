import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

import AmbulanceTypeCard from '../../../components/AmbulanceTypeCard';
import AmbulanceTypesData from '../../../components/data/AmbulanceTypesData';
import OtherServicesData from '../../../components/data/OtherServicesData';
import colors from '../../../config/colors';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../../../navigation/routes';
import AmbulanceTypeInfoScreen from './AmbulanceTypeInfoScreen';

const Stack = createStackNavigator()

function ServicesScreen(props) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.typesTitleText}>Types of Ambulance</Text>
            {/* render all the types by using map */}
            <View style={styles.typesContainer}>
                {
                    AmbulanceTypesData.map((value) => {
                        return (
                            <AmbulanceTypeCard name={value.name} key={value.id} index={value.id} />
                        )
                    })
                }
            </View>
            <Text style={styles.othersTitleText}>Other Services</Text>
            {/* render all the other services by using map */}
            <View style={styles.typesContainer}>
                {
                    OtherServicesData.map((value) => {
                        return (
                            <AmbulanceTypeCard name={value.name} key={value.id} />
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    typesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'flex-start',
        gap: 16,
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    typesTitleText: {
        paddingTop: 24,
        paddingHorizontal: 32,
        fontSize: 20,
        color: colors.primary,
        fontWeight: 700,
    },
    othersContainer: {

    },
    othersTitleText: {
        paddingHorizontal: 32,
        fontSize: 20,
        color: colors.primary,
        fontWeight: 700,
    }
});

export default ServicesScreen;