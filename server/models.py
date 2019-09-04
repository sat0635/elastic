from django.db import models

# Create your models here.

class Place(models.Model):
	id = models.IntegerField(primary_key=True)
	
	def __str__(self):
		return self.id
