"""cook_day URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path
from cook_day_app.views import hello_world
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cook_day_app.views import RecipeViewSet, IngredientViewSet, CategoryViewSet
from django.conf import settings
from django.conf.urls.static import static
from cook_day_app.views import *

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('api/', include(router.urls)),
    path('api/hello/', hello_world),
    path('api/submit-recipe/', submit_recipe, name='submit-recipe'),
    path('api/user-recipes/', get_user_recipes, name='user-recipes'), 

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)