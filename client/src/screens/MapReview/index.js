import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {useRoute, useNavigation} from '@react-navigation/native';

const MapReview = props => {
  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params;
  const originLoc = {
    latitude: originPlace.details.geometry.location.lat,
    longitude: originPlace.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destinationPlace.details.geometry.location.lat,
    longitude: destinationPlace.details.geometry.location.lng,
  };
  console.log(originLoc, destinationLoc);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: originLoc.latitude,
          longitude: originLoc.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}>
        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker coordinate={originLoc} title={'Origin'} />
        <Marker coordinate={destinationLoc} title={'Destination'} />

        {/* {ambus.map(ambu => ( */}
        <Marker
          coordinate={{
            latitude: originLoc.latitude + 0.005,
            longitude: originLoc.longitude + 0.005,
          }}>
          <Image
            style={{
              width: 90,
              height: 90,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `70deg`,
                },
              ],
            }}
            source={require('../../assets/images/ambu.png')}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: originLoc.latitude + 0.005,
            longitude: originLoc.longitude - 0.005,
          }}>
          <Image
            style={{
              width: 90,
              height: 90,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `10deg`,
                },
              ],
            }}
            source={require('../../assets/images/ambu.png')}
          />
        </Marker>
        {/* ))} */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapReview;
