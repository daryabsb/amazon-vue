# Generated by Django 3.0.3 on 2020-04-16 19:49

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(null=True, upload_to=core.models.product_image_file_path),
        ),
    ]
