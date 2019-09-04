from django.urls import path

from . import views


urlpatterns = [
	path('recycle/<number>/', views.get_number),

]
