from django.shortcuts import render
from server.models import *
# Create your views here.

from django.http import HttpResponse
import json

base_url='http://34.97.49.139:8000/'
def clean(request, id):
	queryset = Place.objects.get(ID=id)
	queryset.CONTENT_DEPTH=0
	queryset.save()

def increase_depth(request,id, depth):
	queryset = Place.objects.get(ID=id)
	queryset.CONTENT_DEPTH=depth
	queryset.save()

def makefile(request):
	queryset = Place.objects.all()
	data_list=[]
	for row in queryset:
		for i in range(0,row.CONTENT_DEPTH):
			data_dict={}
			data_dict["lat"]=float(row.GPSX)
			data_dict["lng"]=float(row.GPSY)
			data_list.append(data_dict)	
	f=open("/opt/elastic/frontend/src/data/generated-data.json","w")
	result=json.dumps(data_list)
	f.write(result)
	f.close()
	return HttpResponse(result)
