from django.db.models.signals import pre_delete, pre_save, m2m_changed
from django.dispatch import receiver
from .models import portfolio, image
import logging

logger = logging.getLogger(__name__)

@receiver(pre_delete, sender=portfolio)
def delete_portfolio_images(sender, instance, **kwargs):
    if instance.thumbnail:
        instance.thumbnail.delete(False)
    
    for img in instance.images.all():
        img.image.delete(False)

@receiver(pre_save, sender=portfolio)
def delete_old_thumbnail(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_instance = sender.objects.get(pk=instance.pk)
        except sender.DoesNotExist:
            return
        if old_instance.thumbnail and old_instance.thumbnail != instance.thumbnail:
            logger.info(f"Deleting old thumbnail: {old_instance.thumbnail.path}")
            old_instance.thumbnail.delete(False)

@receiver(m2m_changed, sender=portfolio.images.through)
def delete_unused_images(sender, instance, action, reverse, model, pk_set, **kwargs):
    if action == "post_remove":
        for img_id in pk_set:
            try:
                img = model.objects.get(pk=img_id)
                if not portfolio.objects.filter(images__id=img.id).exists():
                    logger.info(f"Deleting unused image: {img.image.path}")
                    img.image.delete(False)
                    img.delete()
            except model.DoesNotExist:
                continue

@receiver(pre_delete, sender=image)
def delete_image_file(sender, instance, **kwargs):
    if instance.image:
        logger.info(f"Deleting image file: {instance.image.path}")
        instance.image.delete(False)
