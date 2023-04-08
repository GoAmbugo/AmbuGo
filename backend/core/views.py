from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.parsers import JSONParser

from core.models import Profile
from .serializers import ProfileDetailsViewSerializer


# Create your views here.


class ProfileDetailsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        try:
            current_user = ProfileDetailsViewSerializer(request.user)

            return Response({'data': current_user.data, 'success': 'true'}, status=status.HTTP_200_OK)
        except:
            return Response({'message': 'Something went wrong', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        try:
            user_data = JSONParser().parse(request)
            profile = Profile.objects.get(phone=user_data['phone'])
            user_serializer = ProfileDetailsViewSerializer(
                profile, data=user_data)

            if user_serializer.is_valid():
                user_serializer.save()
                return Response({'data': user_serializer.data, 'success': 'true'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Invalid Data', 'success': 'false'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'message': 'Invalid data', 'success': 'false'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
