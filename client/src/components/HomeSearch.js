import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
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
            console.log('hlo');
          }}>
          <View style={styles.row1}>
            <AntDesign name={'search1'} size={16} color={'#434343'} />
            <Text style={styles.inputText}>Where To?</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#434343'} />
          <Text style={{color: '#434343'}}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color={'#535353'}
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
    borderRadius: 50,
  },
  inputText: {color: '#434343', marginLeft: 5},
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
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
