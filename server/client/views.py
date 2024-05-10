from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Client

# Create your views here.

@api_view(['POST'])
def append_client_api(request):
    data = request.data
    name = data.get('name')
    phone_number = data.get('phone_number')
    Client.objects.create(
        name=name, phone_number=phone_number
    )
    return Response(
        {
            'status': True,
           
        }
    )
