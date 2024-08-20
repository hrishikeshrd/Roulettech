from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Ingredient)
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipes/', null=True, blank=True)

    def __str__(self):
        return self.title
    

class UserRecipe(models.Model):
    username = models.CharField(max_length=255,default = 'admin')
    dishname = models.TextField(default = 'Dosa')
    ingredients = models.TextField(default = "Rice batter, water, salt, curd")
    instructions = models.TextField(default= "mix well and cook on low flame")

    def __str__(self):
        return f"{self.username}'s {self.dishname}"



# from cook_day_app.models import UserRecipe

# # Sample recipe entries
# recipes = [
#     {
#         "username": "John Doe",
#         "dishname": "Spaghetti Carbonara",
#         "ingredients": "Spaghetti, Eggs, Parmesan, Bacon, Black Pepper",
#         "instructions": "Boil pasta. Cook bacon. Mix eggs and parmesan. Combine all with pasta. Serve hot.",
#     },
#     {
#         "username": "Jane Smith",
#         "dishname": "Chicken Curry",
#         "ingredients": "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
#         "instructions": "Sauté onions, garlic, and ginger. Add chicken and curry powder. Stir in coconut milk. Simmer until cooked.",
#     },
#     {
#         "username": "Alice Johnson",
#         "dishname": "Avocado Toast",
#         "ingredients": "Bread, Avocado, Lemon, Salt, Pepper, Olive Oil",
#         "instructions": "Toast bread. Mash avocado with lemon, salt, and pepper. Spread on toast. Drizzle with olive oil.",
#     },
#     {
#         "username": "Bob Brown",
#         "dishname": "Vegetable Stir-fry",
#         "ingredients": "Broccoli, Carrots, Bell Peppers, Soy Sauce, Garlic, Ginger",
#         "instructions": "Sauté garlic and ginger. Add vegetables. Stir in soy sauce. Cook until vegetables are tender.",
#     },
#     {
#         "username": "Charlie Davis",
#         "dishname": "Blueberry Pancakes",
#         "ingredients": "Flour, Eggs, Milk, Blueberries, Baking Powder, Sugar",
#         "instructions": "Mix flour, baking powder, sugar. Add eggs and milk. Fold in blueberries. Cook on griddle.",
#     },
# ]

# # Save these recipes to the database
# for recipe in recipes:
#     UserRecipe.objects.create(**recipe)
