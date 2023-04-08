import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import { getAuthToken, removeAuthToken, storeAuthToken } from "../services/AsyncStorageServices";
import { API_BASE_URL } from '@env';
import { getUserProfileNetworkRequest, refreshTokenNetworkRequest } from "../services/NetworkRequestsServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [tempUser, setTempUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const refreshToken = async (token) => {
        const response = await refreshTokenNetworkRequest(token)

        const jsonData = await response.json()

        if (response.status === 200) {
            return {
                "newToken": jsonData,
                "status": 200
            }
        }
        else if (response.status === 401) {
            return {
                "newToken": {},
                "status": 401
            }
        }
        else {
            return {
                "newToken": {},
                "status": 500
            }
        }

    }

    const getUser = async (token) => {

        try {
            const response = await getUserProfileNetworkRequest(token)

            const jsonData = await response.json()

            console.log(jsonData)

            if (response.status === 200) {
                return {
                    'jsonData': jsonData["data"],
                    'status': 200
                }
            }

            return {
                'jsonData': {},
                'status': 401
            }

        }
        catch (error) {
            console.log(error)
            return {
                'jsonData': {},
                'status': 500
            }
        }

    }

    const register = async (tokens) => {
        setIsLoading(true)

        await storeAuthToken(tokens)

        const { access } = tokens
        const { jsonData, status } = await getUser(access)

        if (status === 200) {
            console.log("Get user successful")
            setTempUser(jsonData)
            setIsLoading(false)
            console.log("tempUser: ", tempUser)
        }
        else {
            console.log("Something went wrong in fetching user profile")
            logout()
            setIsLoading(false)
        }

        setIsLoading(false)
    }

    const login = async (tokens) => {
        setIsLoading(true)

        await storeAuthToken(tokens)

        console.log(tokens)

        const { access } = tokens
        const { jsonData, status } = await getUser(access)

        if (status === 200) {
            console.log("Get user successful")
            setUser(jsonData)
            setIsLoading(false)
            console.log(user)
        }
        else {
            console.log("Something went wrong in fetching user profile")
            logout()
            setIsLoading(false)
        }
    }

    const logout = async () => {
        setIsLoading(true)

        setUser(null)

        await removeAuthToken()

        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)

            const userToken = await getAuthToken()

            if (userToken === null) {
                setUser(null)
                setIsLoading(false)
            }
            else {
                const { access, refresh } = JSON.parse(userToken)

                const { status, jsonData } = await getUser(access)

                if (status === 200) {
                    setUser(jsonData)
                    console.log("Get user successful")

                    // THIS SHOULD BE DONE LATER IN BACKGROUND
                    const { newToken, status } = await refreshToken(refresh)

                    if (status === 200) {
                        // access and refresh generated successfully
                        console.log("Successfully generated newTokens")
                        await storeAuthToken(newToken)
                    }
                    else if (status === 401) {
                        // refresh token is expired
                        console.log("refresh token is expired")
                        await logout()
                    }
                    else {
                        // something went wrong on server
                        console.log(" something went wrong on server")
                        await logout()
                    }
                }
                else if (status === 401) {
                    // access token is expired
                    console.log("access token is expired")
                    const { newToken, status } = await refreshToken(refresh)

                    if (status === 200) {
                        // access and refresh generated successfully
                        console.log("Successfully generated newTokens")
                        const { status, jsonData } = await getUser(newToken['access'])

                        if (status === 200) {
                            console.log("Get user successful")

                            setUser(jsonData)
                            await storeAuthToken(newToken)
                        }
                        else {
                            console.log("Get user unsuccessful")

                            await logout()
                        }
                    }
                    else if (status === 401) {
                        // refresh token is expired
                        console.log("refresh token is expired")
                        await logout()
                    }
                    else {
                        // something went wrong on server
                        console.log("something went wrong on server")
                        await logout()
                    }
                }
                else {
                    // something went wrong on server
                    console.log("something went wrong on server")
                    await logout()
                }
                setIsLoading(false)
            }

            // background mein refresh token hit kro and set the new access token to async storage
        }
        catch (e) {
            console.log(`error is ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    useEffect(() => {
        setTempUser(user)
        console.log("User:", user)
    }, [user])



    const authContextData = {
        register: register,
        login: login,
        logout: logout,
        isLoading: isLoading,
        user: user,
        setUser: setUser,
        tempUser: tempUser
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}


