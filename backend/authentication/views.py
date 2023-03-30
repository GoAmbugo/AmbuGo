from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from twilio.rest import Client

from .models import *
from .serializers import *
import os
import re

# Create your views here.


class SendOtp(APIView):

    def post(self, request):

        if 'phone' in request.data:

            phone = request.data['phone']

            check_phone = re.search(r"^(\+91-)[6-9]\d{9}$", phone)

            if not check_phone:
                return Response({'message': 'Incorrect format for phone', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

            phone = os.environ['verified_number']
            account_sid = os.environ['account_sid']
            auth_token = os.environ['auth_token']
            verify_sid = os.environ['verify_sid']

            client = Client(account_sid, auth_token)

            try:
                message = client.verify.v2.services(verify_sid).verifications.create(
                    to=phone, channel="sms"
                )

                if message.status == 'pending':
                    return Response({'message': 'OTP sent successfully', 'success': 'true'}, status=status.HTTP_200_OK)
                else:
                    return Response({'message': 'Some error occurred. Please try again.', 'success': 'false'}, status=status.HTTP_404_NOT_FOUND)
            except:
                # too many requests -> 429 status code
                return Response({'message': 'Maximum limit reached and OTP not sent', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        else:
            return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)


class ResendOtp(APIView):

    def post(self, request):

        if 'phone' in request.data:

            if 'isZero' in request.data:

                phone = request.data['phone']
                isZero = request.data['isZero']

                check_phone = re.search(r"^(\+91-)[6-9]\d{9}$", phone)

                if not check_phone:
                    return Response({'message': 'Incorrect format for phone', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                if isZero != "true":
                    return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                phone = os.environ['verified_number']
                account_sid = os.environ['account_sid']
                auth_token = os.environ['auth_token']
                verify_sid = os.environ['verify_sid']

                client = Client(account_sid, auth_token)

                try:
                    message = client.verify.v2.services(verify_sid).verifications.create(
                        to=phone, channel="sms"
                    )

                    if message.status == 'pending':
                        return Response({'message': 'OTP resent successfully', 'success': 'true'}, status=status.HTTP_200_OK)
                    else:
                        return Response({'message': 'Some error occurred. Please try again.', 'success': 'false'}, status=status.HTTP_404_NOT_FOUND)
                except:
                    # too many requests -> 429 status code
                    return Response({'message': 'Maximum limit reached and OTP not sent. Try again after some time', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            else:
                return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)


class VerifyOtp(APIView):

    def post(self, request):

        if 'phone' in request.data:

            if 'otp-code' in request.data:

                phone = request.data['phone']
                otp = request.data['otp-code']

                check_phone = re.search(r"^(\+91-)[6-9]\d{9}$", phone)
                check_otp = re.search(r"^\d{6}$", otp)

                if not check_phone:
                    return Response({'message': 'Incorrect format for phone', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                if not check_otp:
                    return Response({'message': 'Incorrect format for otp', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                phone = os.environ['verified_number']
                account_sid = os.environ['account_sid']
                auth_token = os.environ['auth_token']
                verify_sid = os.environ['verify_sid']

                client = Client(account_sid, auth_token)

                try:
                    verification_check = client.verify.v2.services(verify_sid) \
                        .verification_checks \
                        .create(to=phone, code=otp)

                    print(verification_check)

                    if verification_check.status == 'approved':
                        return Response({'message': 'Successfully verified', 'success': 'true'}, status=status.HTTP_200_OK)
                    else:
                        return Response({'message': 'Incorrect OTP code or something went wrong.', 'success': 'false'}, status=status.HTTP_401_UNAUTHORIZED)
                except:
                    return Response({'message': 'OTP expired or Internal server error', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            else:
                return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
