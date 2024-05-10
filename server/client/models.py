from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=60)
    phone_number = PhoneNumberField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    checked = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.id} => {self.name}"

    class Meta:
        verbose_name = 'Mijoz'
        verbose_name_plural = 'Mijozlar'
