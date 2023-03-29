import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = () => {
        setIsLoading(true)

        setUser('name-of-user/id-of-user')
        setAuthTokens({ 'access': 'access-token', 'refresh': 'refresh-token' })
        AsyncStorage.setItem('authTokens', JSON.stringify({ 'access': 'access-token', 'refresh': 'refresh-token' }))

        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)

        setUser(null)
        setAuthTokens(null)
        AsyncStorage.removeItem('authTokens')

        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)

            const userToken = await AsyncStorage.getItem('authTokens')
            setAuthTokens(userToken)

            if (userToken) setUser('neeraj')

            setIsLoading(false)

            // background mein refresh token hit kro and set the new access token to async storage
        }
        catch (e) {
            console.log(`error is ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])


    const authContextData = {
        login: login,
        logout: logout,
        isLoading: isLoading,
        user: user,
        authTokens: authTokens
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}


