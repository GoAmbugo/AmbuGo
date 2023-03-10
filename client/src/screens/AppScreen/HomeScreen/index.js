import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HomeSearch from '../../../components/HomeSearch';
import colors from '../../../config/colors';
import AmbulanceTypeCard from '../../../components/AmbulanceTypeCard';
import AmbulanceTypesData from '../../../components/data/AmbulanceTypesData';
import {useNavigation} from '@react-navigation/native';

function HomeScreen(props) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={{...styles.infoDisplay, paddingTop: 20}}>
        <HomeSearch />
      </View>

      {/* extra content here */}
      <View
        style={{
          ...styles.infoDisplay,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}>
        <Text style={styles.cardText}>Types of Ambulances</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.typesContainer}>
            {AmbulanceTypesData.map(value => {
              return (
                <AmbulanceTypeCard
                  name={value.name}
                  key={value.id}
                  index={value.id}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          ...styles.infoDisplay,
          paddingTop: 15,
          paddingHorizontal: 15,
          height: 160,
        }}>
        <Text style={styles.cardText}>Refer & Earn</Text>
      </View>

      <View
        style={{
          ...styles.infoDisplay,
          paddingTop: 15,
          paddingHorizontal: 15,
          height: 160,
        }}>
        <Text style={styles.cardText}>Blogs & Videos</Text>
      </View>

      <View
        style={{
          ...styles.infoDisplay,
          paddingTop: 15,
          paddingHorizontal: 15,
          height: 160,
        }}>
        <Text style={styles.cardText}>More ways to use AmbuGo</Text>
      </View>
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
  cardText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 700,
    marginLeft: 10,
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingVertical: 20,
  },
});

export default HomeScreen;
