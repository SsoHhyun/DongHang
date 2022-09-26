from rest_framework import serializers
from .models import *

class PlaceCommonSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceCommon
        fields = [
            'common_no',
            'content_id',
            'content_type_id',
            'tel',
            'title',
            'first_image1',
            'first_image2',
            'cat1',
            'cat2',
            'cat3',
            'addr1',
            'addr2',
            'mapx',
            'mapy',
            'mlevel',
            'area_code'
        ]
