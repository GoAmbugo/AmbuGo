import React, { useRef, useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import AppBackHeader from '../../components/AppBackHeader';
import colors from '../../config/colors';
import routes from '../../navigation/routes';

import CountryData from '../../components/data/CountryData';
import OtpField from './OtpField';
import { AuthContext } from './../../auth/context';
import { API_BASE_URL } from '@env';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function VerifyOTPScreen({ navigation, route }) {
  const details = route.params;
  const userPhone = `${CountryData[details.country - 1].code} ${details.phone}`;
  // console.log(details)

  const { login } = useContext(AuthContext);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');
  const [enteredPin, setEnteredPin] = useState('');
  const [resendTime, setResendTime] = useState(59);
  const [resendOtp, setResendOtp] = useState(false);

  const handleVerifyOtp = async () => {

    try {
      const response = await fetch(`${API_BASE_URL}verifyotp/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "phone": "+91-7976051917", "otp-code": enteredPin.toString() })
      });

      // let json = await response.json();

      if (response.status === 200) {
        login()
      }
      else if (response.status === 401) {
        alert('Incorrect OTP')
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

  }

  const handleProceed = async () => {
    if (
      !pin1 ||
      pin1 === '' ||
      !pin2 ||
      pin2 === '' ||
      !pin3 ||
      pin3 === '' ||
      !pin4 ||
      pin4 === '' ||
      !pin5 ||
      pin5 === '' ||
      !pin6 ||
      pin6 === ''
    )
      return alert('Please enter correct OTP');

    setEnteredPin(pin1 + pin2 + pin3 + pin4 + pin5 + pin6);

    // check whether the entered OTP matches the send OTP, if yes then setUser to the currentUser

    await handleVerifyOtp()
  };

  const resendOtpButtonPress = () => {
    // send a new 6 digit OTP and then set the timer to 59 seconds again
    setResendOtp(false);
    setResendTime(59);
  };

  useEffect(() => {
    if (resendTime === 0) {
      setResendOtp(true);
    }
  }, [resendTime]);

  useEffect(() => {
    setEnteredPin(pin1 + pin2 + pin3 + pin4 + pin5 + pin6);
  }, [pin1, pin2, pin3, pin4, pin5, pin6])


  useInterval(() => {
    setResendTime(resendTime - 1);
  }, 1000);

  // console.log(enteredPin)

  return (
    <View style={styles.container}>
      <AppBackHeader
        text="Back"
        color={colors.primary}
        destination={routes.AUTHENTICATION}
        destinationObject={details}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>VERIFY OTP</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            Enter the 6-digit OTP sent to you at
          </Text>
          <Text style={styles.phone}>{userPhone}</Text>
        </View>
      </View>

      {/* Six boxes for the OTP */}
      <View style={styles.innerInputContainer}>
        <OtpField
          inputRef={ref1}
          nextDigitRef={ref2}
          digit={pin1}
          setDigit={setPin1}
        />
        <OtpField
          inputRef={ref2}
          nextDigitRef={ref3}
          digit={pin2}
          setDigit={setPin2}
        />
        <OtpField
          inputRef={ref3}
          nextDigitRef={ref4}
          digit={pin3}
          setDigit={setPin3}
        />
        <OtpField
          inputRef={ref4}
          nextDigitRef={ref5}
          digit={pin4}
          setDigit={setPin4}
        />
        <OtpField
          inputRef={ref5}
          nextDigitRef={ref6}
          digit={pin5}
          setDigit={setPin5}
        />
        <OtpField inputRef={ref6} digit={pin6} setDigit={setPin6} />
      </View>

      <View style={styles.resendCodeOuterContainer}>
        <View style={styles.resendCodeContainer}>
          <Text style={styles.resendCodeText}>Didn't received a code ? </Text>
          {resendOtp ? (
            <TouchableWithoutFeedback onPress={resendOtpButtonPress}>
              <Text style={styles.resendText}>Resend</Text>
            </TouchableWithoutFeedback>
          ) : (
            <Text style={styles.resendCodeText}>
              {resendTime < 10 ? `(00:0${resendTime})` : `(00:${resendTime})`}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.verifyButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonContinue}
          onPress={handleProceed}>
          <Text style={styles.buttonText}>Proceed</Text>
          <Icon name="arrowright" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.gray900,
    fontWeight: 700,
    letterSpacing: 1,
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  messageContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  message: {
    color: colors.gray400,
    fontSize: 16,
    textAlign: 'center',
  },
  phone: {
    color: colors.gray900,
    fontSize: 20,
    fontWeight: 600,
    paddingVertical: 12,
  },
  verifyButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.gray900,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContinue: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    flex: 1,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  innerInputContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  resendCodeOuterContainer: {
    alignSelf: 'center',
  },
  resendCodeContainer: {
    backgroundColor: colors.gray100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 24,
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  resendCodeText: {
    color: colors.gray400,
  },
  resendText: {
    color: colors.primary,
    fontWeight: 600,
  },
});

export default VerifyOTPScreen;
