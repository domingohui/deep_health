# deep_health


This repo contains two parts: 

* [```training_model```](https://github.com/domingohui/deep_health/tree/master/training_model)
contains the [raw datasets](https://github.com/domingohui/deep_health/tree/master/training_model/dataset), R code for cleaning up the datasets, jupyter notebooks, and 
[metadata.txt](https://github.com/domingohui/deep_health/blob/master/training_model/metadata.txt) for the encoded/cleaned 
up dataset.

 * I'm still experimenting with different models in the [jupyter notebook files](https://github.com/domingohui/deep_health/blob/master/training_model/random_forest.ipynb).

* [```app_doctor```](https://github.com/domingohui/deep_health/tree/master/app_doctor) is a web app for doctors. 
It uses results of the trained models to predict hospitalization time, admission and disposition statuses of a patient. 

# #
### To clean up the dataset

simply run [```clean_up_raw_data.R```](https://github.com/domingohui/deep_health/blob/master/training_model/clean_up_raw_data.R)
for training data
and [```clean_up_problem_set_do_not_drop_rows.R```]
(https://github.com/domingohui/deep_health/blob/master/training_model/clean_up_problem_set_do_not_drop_rows.R)
for input problem set. 

# #
### To train a model

Follow one of the jupyter notebooks :)

# #
### To run the webapp
within [```app_doctor```](https://github.com/domingohui/deep_health/tree/master/app_doctor)
```
npm install
npm run build
npm start
```
[http://localhost:5000](http://localhost:5000)

All input variables are set to their default values.

Note: the app only outputs a dummy result for now. 

WIP: trying to optimize the model. 
