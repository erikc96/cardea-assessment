# Generated by Django 3.1.1 on 2021-02-18 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lists', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='list',
            name='image',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='list',
            name='listCurator',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='list',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
