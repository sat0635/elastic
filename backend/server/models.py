from django.db import models

# Create your models here.

class Place(models.Model):
	ID = models.IntegerField(primary_key=True)
	GPSX=models.CharField(max_length=50,default="")
	GPSY=models.CharField(max_length=50,default="")
	NAME=models.CharField(max_length=50,default="")
	CONTENT_DEPTH=models.IntegerField(default=0)	
	def __str__(self):
		return self.NAME
