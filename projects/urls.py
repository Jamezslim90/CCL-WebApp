from django.urls import path
from .views import  ProjectListView, ProjectDetailView

urlpatterns = [

path('',  ProjectListView.as_view() , name='projects'),
path('<int:pk>/', ProjectDetailView.as_view() , name='project_detail'),

]