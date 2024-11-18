from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.


class pro_Pic(models.Model):
    pro_pic = models.ImageField(upload_to='profile/')

class about_me(models.Model):
    about = CKEditor5Field('Text', config_name='extends')

class my_background(models.Model):
    background = CKEditor5Field('Text', config_name='extends')

class my_hobby_and_interest(models.Model):
    hobbies = CKEditor5Field('Text', config_name='extends')

class image(models.Model):
    image = models.ImageField(upload_to='portfolio/images/')

class technology(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    

class portfolio(models.Model):
    title = models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to='portfolio/thumbnail/')
    images = models.ManyToManyField('image', blank=True)
    url = models.URLField(blank=True)
    description = CKEditor5Field('Text', config_name='extends')
    technologies = models.ManyToManyField('technology', blank=True)
    date_time = models.DateTimeField(auto_now_add=True)

    

    def __str__(self):
        return self.title
    

class featured_portfolio(models.Model):
    title = models.ForeignKey("portfolio", verbose_name=("Portfolio"), blank=True, on_delete=models.CASCADE)
    technologies_used = models.ManyToManyField('technology', blank=True)

    


class social_link(models.Model):
    facebook = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)

    def __str__(self):
        return self.facebook
    

