from django.conf import settings
import requests


def my_scheduled_job():

    try:
        response = requests.get(settings.API_URL)
        if response.status_code == 200:
            print('Successfully fetched the URL')
        else:
            print(f'Failed to fetch the URL. Status code: {response.status_code}')
    except requests.RequestException as e:
            print(f'Error occurred: {str(e)}')

