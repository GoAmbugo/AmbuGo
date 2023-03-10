import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GOOGLE_MAPS_API_KEY} from '@env';
import PlaceRow from './placeRow';
import GoBack from '../../components/GoBack';

const DestinationSearch = props => {
  const [originPlace, setoriginPlace] = useState(null);
  const [destinationPlace, setdestinationPlace] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  let date = route.params;
  if (date) {
    console.log(date);
  } else {
    const cur_date = new Date();
    date = cur_date.toString();
  }
  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('map-review', {
        originPlace,
        destinationPlace,
        date,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GoBack />
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
          container: {...styles.plcontainer, top: 85},
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
    marginRight: 10,
  },
  plcontainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 37,
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
    width: 7,
    height: 7,
    backgroundColor: '#434343',
    position: 'absolute',
    top: 63,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 2,
    height: 42,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 70,
    left: 17,
  },
  square: {
    width: 7,
    height: 7,
    backgroundColor: 'black',
    position: 'absolute',
    top: 112,
    left: 15,
  },
});

export default DestinationSearch;
