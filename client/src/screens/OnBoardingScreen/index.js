import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../config/colors';
import data from '../../components/data/GenderData';
import { updateUserProfile } from '../../services/UserServices';
import { AuthContext } from '../../auth/context';
import { getAuthToken, storeAuthToken } from '../../services/AsyncStorageServices';

function OnBoardingScreen(props) {

    const [isFocused1, setIsFocused1] = useState(false)
    const [isFocused2, setIsFocused2] = useState(false)
    const [isFocused3, setIsFocused3] = useState(false)

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('')
    const [timestamp, setTimestamp] = useState('')

    const { tempUser, setUser, logout } = useContext(AuthContext);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handlePickerConfirm = (selectedDate) => {

        const date_in_dd_mm_yyyy = selectedDate.toLocaleDateString('en-GB')

        setTimestamp(selectedDate.getTime()); // this is in epoch

        setDate(date_in_dd_mm_yyyy)
        hideDatePicker();
    };

    const handleProfileConfirm = async (isOnBoarded) => {

        if (isOnBoarded && (firstName === '' || lastName === '')) {
            alert('Please enter first and last name to proceed or skip the details.')
            return
        }

        const data = {
            id: tempUser['id'],
            phone: tempUser['phone'],
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dateOfBirth: timestamp,
            isOnBoarded: isOnBoarded
        }

        const response = await updateUserProfile(data)

        const jsonData = await response.json()

        if (response.status === 200) {
            // data updated successfully
            setUser(jsonData['data'])
        }
        else if (response.status === 401) {
            // access token is expired and generate new tokens
            const userToken = await getAuthToken()
            const { refresh } = JSON.parse(userToken)

            const res = await refreshTokenNetworkRequest(refresh)

            const newToken = res.json()

            if (res.status === 200) {
                // successfully generated new tokens
                await storeAuthToken(newToken)
                const newResponse = await updateUserProfile(data)

                if (newResponse.status === 200) {
                    setUser(newResponse['data'])
                }
                else {
                    // some internal error
                    logout()
                }
            }
            else if (res.status === 401) {
                // refresh token is also expired
                logout()
            }
        }
        else {
            // server error
            alert('We are facing some issues. Sorry for the inconveniences')
        }
    }

    useEffect(() => {
        console.log(gender)
    }, [gender])



    return (
        <View style={styles.container}>
            <View style={{ height: '100%' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.skipContainer} onPress={() => {
                        handleProfileConfirm(false)
                    }}>
                        <Text style={styles.skipText}>Skip</Text>
                        <AntDesign name='caretright' size={14} color={colors.gray900} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Profile details</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput autoComplete='name' autoFocus={true} placeholder='First Name' style={[styles.textInput, isFocused1 ? styles.textInputFocused : {}]} selectionColor={colors.gray400} spellCheck={false} onFocus={() => {
                            setIsFocused1(true)
                            setIsFocused2(false)
                            setIsFocused3(false)
                        }} onChangeText={(text) => setFirstName(text)} placeholderTextColor={colors.gray400} />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput autoComplete='name' placeholder='Last Name' style={[styles.textInput, isFocused2 ? styles.textInputFocused : {}]} selectionColor={colors.gray400} spellCheck={false} onFocus={() => {
                            setIsFocused1(false)
                            setIsFocused2(true)
                            setIsFocused3(false)
                        }} onChangeText={(text) => setLastName(text)} placeholderTextColor={colors.gray400} />
                    </View>
                    <View style={styles.textInputContainer}>
                        <Dropdown
                            style={[styles.dropdown, isFocused3 && { borderColor: colors.gray400 }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={data}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder="Select your gender"
                            onFocus={() => {
                                setIsFocused1(false)
                                setIsFocused2(false)
                                setIsFocused3(true)

                            }}
                            onBlur={() => setIsFocused3(false)}
                            onChange={item => {
                                setGender(item.code);
                                setIsFocused3(false);
                            }}
                        />
                    </View>
                    <View style={[styles.textInputContainer, { width: '75%', paddingBottom: 12 }]}>
                        <TouchableWithoutFeedback onPress={() => showDatePicker()} >
                            <View style={styles.dobContainer}>
                                <Text style={[styles.dobText, date === '' ? { color: colors.gray400 } : { color: colors.gray900 }]}>
                                    {date !== '' ? date : "Date of birth"}
                                </Text>
                                <AntDesign name={'clockcircle'} size={16} color={colors.gray900} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 12 }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.buttonContinue}
                            onPress={() => { handleProfileConfirm(true) }}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handlePickerConfirm}
                        onCancel={hideDatePicker}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.gray900,
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: 1,
        paddingTop: '15%',
        paddingBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: colors.gray100,
    },
    skipContainer: {
        position: 'absolute',
        zIndex: 10,
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 12,
    },
    skipText: {
        fontSize: 16,
        color: colors.gray900,
        fontWeight: '600'
    },
    textInputContainer: {
        paddingHorizontal: 12,
        paddingTop: 12
    },
    textInput: {
        backgroundColor: colors.gray100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.white,
        paddingHorizontal: 12,
        fontSize: 16
    },
    textInputFocused: {
        borderColor: colors.gray400,

    },
    dropdown: {
        backgroundColor: colors.gray100,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        width: '75%'
    },
    label: {
        position: 'absolute',
        backgroundColor: colors.gray100,
        left: 22,
        top: 8,
        zIndex: 999,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.gray400
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.gray900
    },
    dobContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.gray100,
        paddingHorizontal: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
    },
    dobText: {
        paddingVertical: 16, flexGrow: 1,
    },
    buttonContinue: {
        width: '100%',
        backgroundColor: colors.gray900,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 12,
        marginVertical: 24,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
    },
});

export default OnBoardingScreen;