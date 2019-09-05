from django.urls import path

from . import views


urlpatterns = [
	path('makefile/', views.makefile),
	path('increase_depth/<id>/<depth>/', views.increase_depth),
]
