# Generated by Django 2.2 on 2020-05-04 06:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200504_0652'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='product',
            new_name='cart',
        ),
    ]