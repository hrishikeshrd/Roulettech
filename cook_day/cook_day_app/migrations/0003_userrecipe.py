# Generated by Django 4.2.15 on 2024-08-20 05:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("cook_day_app", "0002_recipe_image"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserRecipe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=255)),
                ("instructions", models.TextField()),
                (
                    "dish_category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="cook_day_app.category",
                    ),
                ),
                ("ingredients", models.ManyToManyField(to="cook_day_app.ingredient")),
            ],
        ),
    ]
