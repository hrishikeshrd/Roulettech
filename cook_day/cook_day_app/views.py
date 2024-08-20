# from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Recipe, Ingredient, Category, UserRecipe
from .serializers import RecipeSerializer, IngredientSerializer, CategorySerializer, UserRecipeSerializer
from rest_framework import status

import logging

logger = logging.getLogger(__name__)

# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello, world!"})


@api_view(['GET'])
def get_user_recipes(request):
    try:
        user_recipes = UserRecipe.objects.all()
        serializer = UserRecipeSerializer(user_recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def submit_recipe(request):
    try:
        data = request.data

        # Create a new UserRecipe object with the provided data
        user_recipe = UserRecipe(
            username=data.get('username'),
            dishname=data.get('dishname'),
            ingredients=data.get('ingredients'),  # Now just storing as plain text
            instructions=data.get('instructions'),
        )
        user_recipe.save()

        return Response({"message": "Recipe submitted successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        logger.error(f"Error submitting recipe: {e}")

        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
