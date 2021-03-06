# Generated by Django 3.1.1 on 2021-02-16 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobTitle', models.CharField(max_length=50)),
                ('company', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=50)),
                ('salaryMin', models.DecimalField(decimal_places=2, max_digits=10)),
                ('salaryMax', models.DecimalField(decimal_places=2, max_digits=10)),
                ('applyLink', models.CharField(max_length=50)),
                ('lists', models.CharField(max_length=50)),
            ],
        ),
    ]
