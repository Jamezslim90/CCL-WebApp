# build_files.sh

pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput
python manage.py crontab remove  #
python manage.py crontab add