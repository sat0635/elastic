from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
import json


def get_number(request,number):

	return HttpResponse(result,content_type=u"application/json; charset=utf-8")
