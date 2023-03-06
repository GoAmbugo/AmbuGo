import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AmbulanceTypesData from '../../../../components/data/AmbulanceTypesData';
import colors from '../../../../config/colors';

function AmbulanceTypeInfoScreen({ route, navigation }) {

    const { index } = route.params
    const ambuInfo = AmbulanceTypesData.find((info) => {
        return info.id === index;
    })

    return (
        <View style={styles.container}>
            <Text>
                {ambuInfo.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

export default AmbulanceTypeInfoScreen;