import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import HomeSearch from '../../../components/HomeSearch';
import DestinationSearch from '../../DestinationSearch';

function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.timenavigate}>
        <HomeSearch />
      </View>


      {/* extra content here */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e7',
    flexDirection: 'column',
    flex: 1,
  },
  timenavigate: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 3,
    paddingTop: 30,
    borderBottomWidth: 0,
    elevation: 3,
  },
  infoDisplay: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 3,
    elevation: 3,
  },
});

export default HomeScreen;
