import React from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';

function PastRideCard({destination, date, time, type, amount}) {
  return (
    <TouchableRipple onPress={() => {}} rippleColor={colors.gray300}>
      <View style={styles.outerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.detailsContainer}>
            <Text style={styles.destinationText} numberOfLines={1}>
              {destination}
            </Text>
            <Text style={styles.dataTime}>{`${date}. ${time}`}</Text>
            <Text style={styles.amount}>₹{amount}</Text>
          </View>
          <Icon name="arrow-forward-ios" size={20} color={colors.gray400} />
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
  detailsContainer: {
    maxWidth: '75%',
  },
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

export default PastRideCard;
