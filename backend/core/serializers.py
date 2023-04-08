from rest_framework import serializers

from .models import Profile


class ProfileDetailsViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile

        fields = ('id', 'phone', 'first_name',
                  'last_name', 'gender', 'date_of_birth', 'is_onboarded')

    def validate(self, data):
        return data
