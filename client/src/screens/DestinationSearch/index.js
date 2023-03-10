import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import {GOOGLE_MAPS_API_KEY} from '@env';
import PlaceRow from './placeRow';

const DestinationSearch = props => {
  const [originPlace, setoriginPlace] = useState(null);
  const [destinationPlace, setdestinationPlace] = useState(null);
  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('map-review', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where from?"
        debounce={300}
        nearbyPlacesAPI="GooglePlacesSearch"
        onPress={(data, details = null) => {
          console.log(data, details);
          setoriginPlace({data, details});
        }}
        suppressDefaultStyles={true}
        currentLocation={true}
        currentLocationLabel="Current location"
        styles={{
          textInput: styles.textinput,
          container: styles.plcontainer,
          listView: styles.listView,
          seperator: styles.seperator,
        }}
        fetchDetails={true}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        renderRow={data => <PlaceRow data={data} />}
        renderDescription={data => data.description || data.vicinity}
      />

      <GooglePlacesAutocomplete
        placeholder="Where to?"
        debounce={300}
        nearbyPlacesAPI="GooglePlacesSearch"
        onPress={(data, details = null) => {
          console.log(data, details);
          setdestinationPlace({data, details});
        }}
        suppressDefaultStyles
        styles={{
          textInput: styles.textinput,
          container: {...styles.plcontainer, top: 55},
          seperator: styles.seperator,
        }}
        renderRow={data => <PlaceRow data={data} />}
        fetchDetails={true}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
      <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.square} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  textinput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  plcontainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  seperator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 25,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 75,
    left: 15,
  },
});

export default DestinationSearch;
