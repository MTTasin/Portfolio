from django.contrib import admin
from .models import pro_Pic, about_me, my_background, my_hobby_and_interest, portfolio, social_link, featured_portfolio, image, technology

# Register your models here.



@admin.register(technology)
class technologyAdmin(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(pro_Pic)
class pro_PicAdmin(admin.ModelAdmin):
    list_display = ('pro_pic',)

@admin.register(image)
class imageAdmin(admin.ModelAdmin):
    list_display = ('image',)

@admin.register(about_me)
class about_meAdmin(admin.ModelAdmin):
    list_display = ('about',)

@admin.register(my_background)
class my_backgroundAdmin(admin.ModelAdmin):
    list_display = ('background',)

@admin.register(my_hobby_and_interest)
class my_hobby_and_interestAdmin(admin.ModelAdmin):
    list_display = ('hobbies',)

@admin.register(portfolio)
class portfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'position')

@admin.register(social_link)
class social_linkAdmin(admin.ModelAdmin):
    list_display = ('facebook', 'twitter', 'linkedin', 'github')

@admin.register(featured_portfolio)
class featured_portfolioAdmin(admin.ModelAdmin):
    list_display = ('title',)