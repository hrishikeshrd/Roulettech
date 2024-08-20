from rest_framework import serializers
from .models import Recipe, Ingredient, Category, UserRecipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class UserRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecipe
        fields = '__all__'  # Or specify the fields you want to expose
