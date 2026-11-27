from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def dashboard_stats(request):
    return Response({
        "system_name": "KBC MCR Demo",
        "message": "Django API is working successfully",
        "total_learners": 128,
        "attendance_rate": 92,
        "open_tickets": 7,
    })