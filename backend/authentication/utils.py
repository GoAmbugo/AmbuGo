from rest_framework_simplejwt.tokens import RefreshToken
import jwt

from backend.settings import SECRET_KEY
from core.models import Profile


def generateToken(current_user: Profile):
    refresh = RefreshToken.for_user(current_user)

    # print(jwt.decode(str(refresh.access_token),
    #       key=SECRET_KEY, algorithms="HS256"))

    # print(current_user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    }
