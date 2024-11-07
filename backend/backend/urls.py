"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from app.views import *
from django.views.generic import TemplateView


router = routers.DefaultRouter()

router.register(r'pro_pic', pro_PicViewSet)
router.register(r'about_me', about_meViewSet)
router.register(r'my_background', my_backgroundViewSet)
router.register(r'my_hobby_and_interest', my_hobby_and_interestViewSet)
router.register(r'portfolio', portfolioViewSet)
router.register(r'social_link', social_linkViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path("", include(router.urls)),
    path("ckeditor5/", include('django_ckeditor_5.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]