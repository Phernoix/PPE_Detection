# Generated by Django 2.0 on 2022-07-26 08:37

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='accesstoken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tokenStr', models.CharField(max_length=100)),
                ('isValid', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='channel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('channelStr', models.CharField(max_length=100)),
                ('isValid', models.BooleanField(default=True)),
                ('tokenStr', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='equipment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('equipmentName', models.CharField(max_length=100)),
                ('equipmentIcon', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='log',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.TextField()),
                ('time', models.DateTimeField()),
                ('objectsDetected', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('objectsViolated', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='ppeselection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now=True)),
                ('selectionEquipment', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='tensorflow2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField()),
                ('condition', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('confidence', models.FloatField()),
            ],
        ),
    ]
