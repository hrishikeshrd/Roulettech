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
