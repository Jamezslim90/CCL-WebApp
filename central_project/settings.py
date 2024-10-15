
from pathlib import Path
import os
import helpers.cloudflare.settings

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-pis0j&rsl*2h*--199!)mjdm-lclp0^#8b4=6+7bv=w-$4(=b^'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# ALLOWED_HOSTS = ["*"]
ALLOWED_HOSTS = ["*", "localhost", "0.0.0.0", "127.0.0.1", "ccl-6v3u.onrender.com"]



# Application definition

INSTALLED_APPS = [
    # 'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'pages.apps.PagesConfig',
    'projects',
    'team',
    'products',
    "django_minify_html",
     'django_crontab',

]

MIDDLEWARE = [

    'django.middleware.security.SecurityMiddleware',
    # "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "django_minify_html.middleware.MinifyHtmlMiddleware",
]

ROOT_URLCONF = 'central_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
                    os.path.join(BASE_DIR, 'templates')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'central_project.wsgi.application'



DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'central contractors ltd',
    'USER': 'jamezslim90',
    'PASSWORD': 'zmgHh7aNwQk9',
    'HOST': 'ep-cold-leaf-25567838.us-west-2.aws.neon.tech',
    'PORT': '5432',
  }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Lagos'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')

# MEDIA_URL = '/media/' # new
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # new

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

STORAGES = {
    "default": {
        "BACKEND": "helpers.cloudflare.storages.MediaFileStorage",
        "OPTIONS": helpers.cloudflare.settings.CLOUDFLARE_R2_CONFIG_OPTIONS,
    },
    "staticfiles": {
        "BACKEND": "helpers.cloudflare.storages.StaticFileStorage",
        "OPTIONS": helpers.cloudflare.settings.CLOUDFLARE_R2_CONFIG_OPTIONS,
    },
}


# JAZZMIN_SETTINGS = {

#         "site_title": "Central Contractors Ltd",
#         "site_header": "Central Contractors Ltd",
#         "site_brand": "CCL Admin",
#         # "site_logo": "img/logo/ma-logo.png",
#         # "login_logo": "img/logo/ma-logo.png",
#         "site_icon": "img/logo/ma-logo.png",
#         # Welcome text on the login screen
#         "welcome_sign": "Welcome to Central Contractors Admin",

#         # Copyright on the footer
#         "copyright": "Central Contractors Ltd",

#         # The model admin to search from the search bar, search bar omitted if excluded
#         "search_model": "auth.User",
# }


# # UserUpload images Settings

# DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# AWS_ACCESS_KEY_ID = 'AKIA5WSB2IR7BNA3LW7X'
# AWS_SECRET_ACCESS_KEY = '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'
# AWS_STORAGE_BUCKET_NAME = 'django-cat-bucket'
# AWS_QUERYSTRING_AUTH = False
# AWS_SECURITY_TOKEN_IGNORE_ENVIRONMENT = True
# AWS_IGNORE_ENVIRONMENT_CREDENTIALS = True