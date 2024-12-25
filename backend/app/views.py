from django.shortcuts import render
from .permission import IsOwnerOrReadOnly
from .models import pro_Pic, about_me, my_background, my_hobby_and_interest, portfolio, social_link, featured_portfolio
from rest_framework import viewsets
from .serializers import *
from rest_framework import generics
# Create your views here.

    
    



class pro_PicViewSet(viewsets.ModelViewSet):
    queryset = pro_Pic.objects.all()
    serializer_class = pro_PicSerializer
    permission_classes = [IsOwnerOrReadOnly]




class about_meViewSet(viewsets.ModelViewSet):
    queryset = about_me.objects.all()
    serializer_class = about_meSerializer
    permission_classes = [IsOwnerOrReadOnly]




class my_backgroundViewSet(viewsets.ModelViewSet):
    queryset = my_background.objects.all()
    serializer_class = my_backgroundSerializer
    permission_classes = [IsOwnerOrReadOnly]




class my_hobby_and_interestViewSet(viewsets.ModelViewSet):
    queryset = my_hobby_and_interest.objects.all()
    serializer_class = my_hobby_and_interestSerializer
    permission_classes = [IsOwnerOrReadOnly]




class portfolioViewSet(viewsets.ModelViewSet):
    queryset = portfolio.objects.all().order_by('-position')
    serializer_class = portfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]





class social_linkViewSet(viewsets.ModelViewSet):
    queryset = social_link.objects.all()
    serializer_class = social_linkSerializer
    permission_classes = [IsOwnerOrReadOnly]


class featured_portfolioViewSet(viewsets.ModelViewSet):
    queryset = featured_portfolio.objects.all()
    serializer_class = featured_portfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]


