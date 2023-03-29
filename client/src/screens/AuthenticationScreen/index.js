import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import AppNumberInput from '../../components/AppNumberInput';
import AppCountryInput from '../../components/AppCountryInput';
import routes from '../../navigation/routes';
import ErrorText from '../../components/ErrorText';
import { API_BASE_URL } from '@env';

function AuthenticationScreen({ navigation, route }) {
  const [country, setCountry] = useState(1);
  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  const handleVerifyOTP = async () => {
    if (!phone || phone.toString().length <= 9 || phone.toString().length >= 11)
      return setError('Please enter a valid phone number!');
    setError('');
    // console.log(phone.toString())

    try {
      const response = await fetch(`${API_BASE_URL}sendotp/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "phone": "+91-7976051917" })
      });

      // let json = await response.json();

      if (response.status === 200) {
        navigation.navigate(routes.VERIFYOTP, { country: country, phone: phone });
      }
      else if (response.status === 400) {
        alert('Enter correct phone number and try again.')
      }
      else if (response.status === 500) {
        alert('It was us :( Please try again')
      }
      else {
        alert(response.status)
      }

    } catch (error) {
      alert('Please try again')
    }

  };

  useEffect(() => {
    setError('');
    setPhone('');
  }, [country]);

  useEffect(() => {
    if (phone && phone.toString().length == 10) setError('');
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Enter your mobile number</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <AppCountryInput country={country} setCountry={setCountry} />
        <AppNumberInput
          country={country}
          setCountry={setCountry}
          phone={phone}
          setPhone={setPhone}
        />
      </View>
      <ErrorText text={error} color="tomato" />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.buttonContinue}
        onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      {/* <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <Text style={styles.lineText}>Or</Text>
                <View style={styles.line}></View>
            </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 28,
    flex: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    color: colors.gray900,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 24,
  },
  buttonContinue: {
    width: '100%',
    backgroundColor: colors.gray900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
  lineContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    backgroundColor: colors.gray300,
    width: '40%',
    height: 2,
  },
  lineText: {
    fontSize: 18,
    color: colors.gray400,
  },
});

export default AuthenticationScreen;
