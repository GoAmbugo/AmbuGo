import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../../config/colors';
import GoBack from '../../../../components/GoBack';

function MessageScreen() {
  return (
    <View style={styles.container}>
      <View style={{height: '100%'}}>
        <GoBack />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Message</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 4,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    margin: 12,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    color: colors.gray900,
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: 1,
    paddingTop: '15%',
    paddingBottom: 16,
    paddingHorizontal: 28,
    marginHorizontal: 4,
    backgroundColor: colors.gray100,
  },
});

export default MessageScreen;
