from django.contrib import admin
from .models import Recipe, Ingredient, Category, UserRecipe

# Register your models here.
admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Category)
admin.site.register(UserRecipe)