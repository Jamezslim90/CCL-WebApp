# Generated by Django 4.2.6 on 2023-11-01 15:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image',
            new_name='featured_image',
        ),
    ]