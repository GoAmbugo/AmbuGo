import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PastRides from '../../../components/data/PastRides';
import UpcomingRides from '../../../components/data/UpcomingRides';
import PastRideCard from '../../../components/PastRideCard';
import UpcomingRideCard from '../../../components/UpcomingRideCard';
import colors from '../../../config/colors';
import routes from '../../../navigation/routes';

function ActivityScreen({navigation}) {
  // Data will be fetched from database by calling API
  const [pastRides, setPastRides] = useState(PastRides);
  const [upcomingRides, setUpcomingRides] = useState(UpcomingRides);

  const handleBookRide = () => {
    // setIndex(1)
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titleText}>Upcoming</Text>
      {upcomingRides.length === 0 ? (
        <View style={styles.noRidesContainer}>
          <Text style={styles.noRidesText}>You have no upcoming ride</Text>
          <TouchableOpacity
            style={styles.reserveRideContainer}
            activeOpacity={0.8}
            onPress={handleBookRide}>
            <Text style={styles.reserveRideText}>Reserve your ride</Text>
            <Icon name="arrowright" size={20} color={colors.gray900} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.ridesContainer}>
          {upcomingRides.map(ride => {
            return (
              <UpcomingRideCard
                key={ride.id}
                date={ride.date}
                destination={ride.destination}
                type={ride.type}
                time={ride.time}
              />
            );
          })}
        </View>
      )}
      <Text style={styles.titleText}>Past</Text>
      {pastRides.length === 0 ? (
        <View style={styles.noRidesContainer}>
          <Text style={styles.noRidesText}>You have no booked ride</Text>
          <TouchableOpacity
            style={styles.reserveRideContainer}
            activeOpacity={0.8}
            onPress={handleBookRide}>
            <Text style={styles.reserveRideText}>Book your ride</Text>
            <Icon name="arrowright" size={20} color={colors.gray900} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.ridesContainer}>
          {pastRides.map(ride => {
            return (
              <PastRideCard
                key={ride.id}
                date={ride.date}
                destination={ride.destination}
                type={ride.type}
                amount={ride.amount}
                time={ride.time}
              />
            );
          })}
          {/* <FlatList
                            data={pastRides}
                            renderItem={({ item }) => <PastRideCard date={item.date} destination={item.destination} type={item.type} time={item.time} amount={item.amount} />}
                            keyExtractor={item => item.id}
                            style={{ flex: 8 }}
                        /> */}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 700,
    marginHorizontal: 20,
  },
  reserveRideContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'center',
  },
  reserveRideText: {
    color: colors.gray900,
    fontSize: 16,
    fontWeight: 700,
    marginRight: 4,
  },
  noRidesContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 4,
  },
  noRidesText: {
    color: colors.gray400,
    fontSize: 16,
    fontWeight: 600,
  },
  ridesContainer: {
    marginTop: 12,
    marginBottom: 20,
  },
});

export default ActivityScreen;
