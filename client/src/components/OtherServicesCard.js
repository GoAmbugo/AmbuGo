import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import colors from '../config/colors';

function OtherServicesCard({name}) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 32,
    elevation: 4,
    borderRadius: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.gray900,
  },
});

export default OtherServicesCard;
