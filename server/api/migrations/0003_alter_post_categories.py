# Generated by Django 4.0.3 on 2022-05-04 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_category_options_alter_post_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='categories',
            field=models.ManyToManyField(null=True, related_name='posts', to='api.category'),
        ),
    ]
