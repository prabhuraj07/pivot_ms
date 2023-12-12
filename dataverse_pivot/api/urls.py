from django.urls import path

from api.views import Pivot

urlpatterns = [
    path('pivot/', Pivot.as_view(), name="pivot"),
]