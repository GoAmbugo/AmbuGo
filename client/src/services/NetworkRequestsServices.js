import { API_BASE_URL } from '@env';

// send-otp post request
export const sendOtpNetworkRequest = async (phone) => {
    const response = await fetch(`${API_BASE_URL}sendotp/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "phone": `${phone}` })
    });

    return response

}

// verify-otp post request
export const verifyOtpNetworkRequest = async (phone, pin) => {
    const response = await fetch(`${API_BASE_URL}verifyotp/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "phone": `${phone}`,
                "otp_code": `${pin}`,
                "first_name": "",
                "last_name": "",
                "gender": "",
                "date_of_birth": "",
                "is_onboarded": "false"
            }
        )
    });

    return response
}

// resend-otp post request
export const resendOtpNetworkRequest = async (phone, isZero) => {
    const response = await fetch(`${API_BASE_URL}resendotp/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "phone": `${phone}`,
                "isZero": `${isZero}`,
            }
        )
    });

    return response
}

// refresh token post request
export const refreshTokenNetworkRequest = async (token) => {
    const response = fetch(`${API_BASE_URL}token/refresh/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "refresh": `${token}`
            }
        )
    });

    return response
}

// get request to get logged in user profile details
export const getUserProfileNetworkRequest = async (token) => {
    const response = await fetch(`${API_BASE_URL}user/profile/`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    return response
}

// put request to update user profile details
export const updateUserProfileNetworkRequest = async (data, access) => {
    const response = await fetch(`${API_BASE_URL}user/profile/`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`
        },
        body: JSON.stringify(
            {
                "id": `${data.id}`,
                "phone": `${data.phone}`,
                "first_name": `${data.firstName}`,
                "last_name": `${data.lastName}`,
                "gender": `${data.gender}`,
                "date_of_birth": `${data.dateOfBirth}`,
                "is_onboarded": `${data.isOnBoarded}`
            }
        )
    });

    return response
}

