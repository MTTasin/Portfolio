from .models import pro_Pic, about_me, my_background, my_hobby_and_interest, portfolio, social_link, featured_portfolio
from rest_framework import serializers



class pro_PicSerializer(serializers.ModelSerializer):
    class Meta:
        model = pro_Pic
        fields = '__all__'


class about_meSerializer(serializers.ModelSerializer):
    class Meta:
        model = about_me
        fields = '__all__'


class my_backgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_background
        fields = '__all__'


class my_hobby_and_interestSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_hobby_and_interest
        fields = '__all__'


class portfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = portfolio
        fields = '__all__'


class social_linkSerializer(serializers.ModelSerializer):
    class Meta:
        model = social_link
        fields = '__all__'


class featured_portfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = featured_portfolio
        fields = '__all__'