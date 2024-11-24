# Generated by Django 5.1.3 on 2024-11-23 06:05

import django.db.models.deletion
import django_ckeditor_5.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='about_me',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Text')),
            ],
        ),
        migrations.CreateModel(
            name='image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='portfolio/images/')),
            ],
        ),
        migrations.CreateModel(
            name='my_background',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('background', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Text')),
            ],
        ),
        migrations.CreateModel(
            name='my_hobby_and_interest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hobbies', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Text')),
            ],
        ),
        migrations.CreateModel(
            name='pro_Pic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pro_pic', models.ImageField(upload_to='profile/')),
            ],
        ),
        migrations.CreateModel(
            name='social_link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facebook', models.URLField(blank=True)),
                ('twitter', models.URLField(blank=True)),
                ('linkedin', models.URLField(blank=True)),
                ('github', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='technology',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('tagline', models.CharField(max_length=100)),
                ('thumbnail', models.ImageField(upload_to='portfolio/thumbnail/')),
                ('url', models.URLField(blank=True)),
                ('description', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Text')),
                ('date_time', models.DateTimeField(auto_now_add=True)),
                ('images', models.ManyToManyField(blank=True, to='app.image')),
                ('technologies', models.ManyToManyField(blank=True, to='app.technology')),
            ],
        ),
        migrations.CreateModel(
            name='featured_portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='app.portfolio', verbose_name='Portfolio')),
                ('technologies_used', models.ManyToManyField(blank=True, to='app.technology')),
            ],
        ),
    ]
