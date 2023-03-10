import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.inputBox}>
        {/* search1 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('destination-search');
          }}>
          <View style={styles.row1}>
            <Feather name={'search'} size={24} color={'#000000'} />
            <Text style={styles.inputText}>Where To?</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#000000'} />
          <Text style={{color: '#434343', fontWeight: 800}}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={24}
            color={'#000000'}
          />
        </View>
      </View>

      {/* {Previous destinations} */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>AIIMS</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>AIIMS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#f5f5f5',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputText: {color: '#434343', marginLeft: 15, fontWeight: 700},
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 110,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 20,
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
});

export default HomeSearch;
