from django.contrib import admin
from .models import Client
from django import forms
from phonenumber_field.widgets import PhoneNumberPrefixWidget

# Register your models here.

class ContactForm(forms.ModelForm):
    class Meta:
        widgets = {
            'phone_number': PhoneNumberPrefixWidget(),
        }

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    form = ContactForm
    list_display = ('id', 'name', 'phone_number', 'created_at', 'updated_at', 'checked')
