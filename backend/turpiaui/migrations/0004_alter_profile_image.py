# Generated by Django 5.2 on 2025-04-30 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('turpiaui', '0003_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='profile/'),
        ),
    ]
