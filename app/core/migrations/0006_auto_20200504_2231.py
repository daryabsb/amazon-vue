# Generated by Django 2.2 on 2020-05-04 19:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_shipment_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='shipment',
            name='date_added',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shipment',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
