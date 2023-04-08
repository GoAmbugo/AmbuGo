import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAuthToken = async (value) => {
    try {
        const token = JSON.stringify(value)

        await AsyncStorage.setItem('authToken', token)
    }
    catch (error) {
        console.log(error)
    }
}

export const getAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken')

        return (token != null ? token : null)
    }
    catch (error) {
        console.log(error)
    }
}

export const removeAuthToken = async () => {
    try {
        await AsyncStorage.removeItem('authToken')
    }
    catch (error) {
        console.log(error)
    }
}


