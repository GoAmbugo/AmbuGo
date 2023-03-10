import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import HomeSearch from '../../../components/HomeSearch';
import DestinationSearch from '../../DestinationSearch';

function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={{...styles.infoDisplay, paddingTop: 20}}>
        <HomeSearch />
      </View>

      {/* extra content here */}
      <View style={styles.infoDisplay}></View>
      <View style={styles.infoDisplay}></View>
      <View style={styles.infoDisplay}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e7',
    flexDirection: 'column',
    flex: 1,
  },
  infoDisplay: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 3,
    elevation: 5,
  },
});

export default HomeScreen;
