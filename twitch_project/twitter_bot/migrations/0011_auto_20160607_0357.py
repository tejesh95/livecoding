# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-07 03:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('twitter_bot', '0010_auto_20160607_0347'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='keywordsearchsuggest',
            options={'verbose_name': 'retweet and favorite result', 'verbose_name_plural': 'retweet and favorite results'},
        ),
        migrations.AlterModelOptions(
            name='livecodinghandle',
            options={'verbose_name': 'favorite search result', 'verbose_name_plural': 'favorite search results'},
        ),
    ]
