from django.db import models


class PlaceCommon(models.Model):
    class Meta:
        db_table = 'place_common'

    common_no = models.BigAutoField(primary_key=True)
    content_id = models.TextField(null=True, blank=True)
    content_type_id = models.TextField(null=True, blank=True)
    tel = models.TextField(null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    first_image1 = models.TextField(null=True, blank=True)
    first_image2 = models.TextField(null=True, blank=True)
    cat1 = models.TextField(null=True, blank=True)
    cat2 = models.TextField(null=True, blank=True)
    cat3 = models.TextField(null=True, blank=True)
    addr1 = models.TextField(null=True, blank=True)
    addr2 = models.TextField(null=True, blank=True)
    mapx = models.TextField(null=True, blank=True)
    mapy = models.TextField(null=True, blank=True)
    mlevel = models.TextField(null=True, blank=True)
    area_code = models.TextField(null=True, blank=True)
    sigungu_code = models.TextField(null=True, blank=True)


class ShoppingDetail(models.Model):
    class Meta:
        db_table = 'shopping_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    chk_creditcard = models.TextField(null=True, blank=True)
    chk_pet = models.TextField(null=True, blank=True)
    culture_center = models.TextField(null=True, blank=True)
    fair_day = models.TextField(null=True, blank=True)
    info_center = models.TextField(null=True, blank=True)
    open_date = models.TextField(null=True, blank=True)
    open_time = models.TextField(null=True, blank=True)
    parking = models.TextField(null=True, blank=True)
    rest_date = models.TextField(null=True, blank=True)
    rest_room = models.TextField(null=True, blank=True)
    sale_item = models.TextField(null=True, blank=True)
    sale_item_cost = models.TextField(null=True, blank=True)
    scale = models.TextField(null=True, blank=True)
    shop_guide = models.TextField(null=True, blank=True)


class RestaurantDetail(models.Model):
    class Meta:
        db_table = 'restaurant_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    chk_creditcard = models.TextField(null=True, blank=True)
    info_center = models.TextField(null=True, blank=True)
    first_menu = models.TextField(null=True, blank=True)
    open_date = models.TextField(null=True, blank=True)
    open_time = models.TextField(null=True, blank=True)
    packing = models.TextField(null=True, blank=True)
    parking = models.TextField(null=True, blank=True)
    reservation = models.TextField(null=True, blank=True)
    rest_date = models.TextField(null=True, blank=True)
    scale = models.TextField(null=True, blank=True)
    seat = models.TextField(null=True, blank=True)
    smoking = models.TextField(null=True, blank=True)
    treat_menu = models.TextField(null=True, blank=True)


class FestivalDetail(models.Model):
    class Meta:
        db_table = 'festival_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    start_date = models.TextField(null=True, blank=True)
    end_date = models.TextField(null=True, blank=True)
    place = models.TextField(null=True, blank=True)
    festival_grade = models.TextField(null=True, blank=True)
    place_info = models.TextField(null=True, blank=True)
    program = models.TextField(null=True, blank=True)
    play_time = models.TextField(null=True, blank=True)
    spend_time = models.TextField(null=True, blank=True)
    use_time = models.TextField(null=True, blank=True)


class CultureDetail(models.Model):
    class Meta:
        db_table = 'culture_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    chk_creditcard = models.TextField(null=True, blank=True)
    chk_pet = models.TextField(null=True, blank=True)
    parking = models.TextField(null=True, blank=True)
    rest_date = models.TextField(null=True, blank=True)
    use_fee = models.TextField(null=True, blank=True)
    use_time = models.TextField(null=True, blank=True)
    scale = models.TextField(null=True, blank=True)
    spend_time = models.TextField(null=True, blank=True)


class TouristSpotDetail(models.Model):
    class Meta:
        db_table = 'tourist_spot_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    accom_count = models.TextField(null=True, blank=True)
    chk_creditcard = models.TextField(null=True, blank=True)
    chk_pet = models.TextField(null=True, blank=True)
    heritage1 = models.TextField(null=True, blank=True)
    heritage2 = models.TextField(null=True, blank=True)
    heritage3 = models.TextField(null=True, blank=True)
    open_date = models.TextField(null=True, blank=True)
    parking = models.TextField(null=True, blank=True)
    rest_date = models.TextField(null=True, blank=True)
    use_season = models.TextField(null=True, blank=True)
    use_time = models.TextField(null=True, blank=True)


class LeisureDetail(models.Model):
    class Meta:
        db_table = 'leisure_detail'

    common_no = models.ForeignKey(PlaceCommon, primary_key=True, on_delete=models.CASCADE, db_column='common_no')
    accom_count = models.TextField(null=True, blank=True)
    chk_creditcard = models.TextField(null=True, blank=True)
    chk_pet = models.TextField(null=True, blank=True)
    info_center = models.TextField(null=True, blank=True)
    open_period = models.TextField(null=True, blank=True)
    parking = models.TextField(null=True, blank=True)
    use_time = models.TextField(null=True, blank=True)
