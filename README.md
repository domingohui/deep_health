# deep_health


This repo contains two parts: 

* [```training_model```](https://github.com/domingohui/deep_health/tree/master/training_model)
contains the [raw datasets](https://github.com/domingohui/deep_health/tree/master/training_model/dataset), R code for cleaning up the datasets, jupyter notebooks, and 
[metadata.txt](https://github.com/domingohui/deep_health/blob/master/training_model/metadata.txt) for the encoded/cleaned 
up dataset.

 * I'm still experimenting with different models in the [jupyter notebook files](https://github.com/domingohui/deep_health/blob/master/training_model/random_forest.ipynb).

* [```app_doctor```](https://github.com/domingohui/deep_health/tree/master/app_doctor) is a web app for doctors. 
It uses results of the trained models to predict hospitalization time, admission and disposition statuses of a patient. 
