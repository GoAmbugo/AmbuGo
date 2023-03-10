import React from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import colors from '../config/colors';

function UpcomingRideCard({destination, date, time, type}) {
  return (
    <TouchableRipple onPress={() => {}} rippleColor={colors.gray300}>
      <View style={styles.outerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.destinationText}>{destination}</Text>
          <Text style={styles.dataTime}>{`${date}. ${time}`}</Text>
          <Text style={styles.amount}>{type}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  detailsContainer: {},
  imageContainer: {
    borderRadius: 16,
    width: 60,
    height: 60,
    overflow: 'hidden',
    backgroundColor: colors.white,
    elevation: 12,
  },
  image: {
    flex: 1,
  },
  destinationText: {
    fontWeight: 600,
    color: colors.gray900,
    fontSize: 16,
  },
  dataTime: {
    color: colors.gray400,
  },
  amount: {
    color: colors.gray400,
    fontWeight: 500,
  },
});

export default UpcomingRideCard;
