from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework import status
from twilio.rest import Client


from .models import *
from .serializers import *
from core.models import Profile
from .utils import generateToken
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

        user_data = JSONParser().parse(request)

        if 'phone' in user_data:

            if 'otp_code' in user_data:

                # print(request.user)

                check_phone = re.search(
                    r"^(\+91-)[6-9]\d{9}$", user_data['phone'])
                check_otp = re.search(r"^\d{6}$", user_data['otp_code'])

                if not check_phone:
                    return Response({'message': 'Incorrect format for phone', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                if not check_otp:
                    return Response({'message': 'Incorrect format for otp', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)

                # change this to user_data['phone]
                phone = os.environ['verified_number']
                account_sid = os.environ['account_sid']
                auth_token = os.environ['auth_token']
                verify_sid = os.environ['verify_sid']

                client = Client(account_sid, auth_token)

                try:

                    verification_check = client.verify.v2.services(verify_sid) \
                        .verification_checks \
                        .create(to=phone, code=user_data['otp_code'])

                    print(verification_check)

                    if verification_check.status == 'approved':

                        # checks user is new or already present in database
                        phone_num = phone[0:3] + '-' + \
                            phone[3:]  # has to be changed

                        user_exists = Profile.objects.filter(
                            phone=phone_num).exists()

                        if user_exists:
                            # generate token
                            current_user = Profile.objects.get(phone=phone_num)
                            tokens = generateToken(current_user=current_user)

                            return Response({'success': 'true', 'token': tokens, 'onBoarded': False, 'isNew': False}, status=status.HTTP_200_OK)
                        else:
                            new_user_serializer = ProfileSerializer(
                                data=user_data)

                            if new_user_serializer.is_valid():
                                new_user_serializer.save()
                                new_user = Profile.objects.get(phone=phone_num)
                                tokens = generateToken(current_user=new_user)
                                return Response({'success': 'true', 'token': tokens, 'onBoarded': False, 'isNew': True}, status=status.HTTP_201_CREATED)
                            else:
                                return Response({'message': new_user_serializer.errors, 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        return Response({'message': 'Incorrect OTP code or something went wrong.', 'success': 'false'}, status=status.HTTP_401_UNAUTHORIZED)
                except:
                    # too many requests -> 429 status code -> change it later
                    return Response({'message': 'Something went wrong', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            else:
                return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid request', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
