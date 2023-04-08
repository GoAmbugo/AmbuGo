import React from 'react'
import { getAuthToken } from './AsyncStorageServices';
import { refreshTokenNetworkRequest, updateUserProfileNetworkRequest } from './NetworkRequestsServices';

// refresh token request

export const updateUserProfile = async (data) => {

    try {
        const userToken = await getAuthToken()
        const { access } = JSON.parse(userToken)

        const response = await updateUserProfileNetworkRequest(data, access)

        return response
    }
    catch (error) {
        console.log(error)
    }

}