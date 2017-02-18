# TODO: Need to find a way to map each value to a numeric factor in a customized order
encoding <- function (dataset, col_name, from, to) {
  new_col <- factor(dataset[[col_name]],
                        levels = from,
                        labels = to)
  return (new_col)
}

dataset <- read.csv("dataset/diabetes-training.csv")

# Remove empty rows
dataset <- dataset[!is.na(dataset$encounter_id),]

# Drop columns with >5% of missing data
dataset$weight <- NULL
dataset$medical_specialty <- NULL
dataset$payer_code <- NULL

# Drop rows with unknown gender
dataset <- dataset[dataset$gender!='Unknown/Invalid',]

# TODO: encode race diag-1, diag-2, diag-3 columns

# Encode columns
dataset$gender <- encoding(dataset, 'gender', c('Female', 'Male'), c(1,2))
dataset$age <- encoding(dataset, 'age', unique(dataset$age), 1:length(unique(dataset$age)))
dataset$max_glu_serum <- encoding(dataset, 'max_glu_serum', c('None', 'Normal', '>200', '>300'), c(1,2,3,4))
dataset$A1Cresult <- encoding(dataset, 'A1Cresult', c('None', 'Norm', '>7', '>8'), c(1,2,3,4))
dataset$metformin <- encoding(dataset, 'metformin', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$repaglinide <- encoding(dataset, 'repaglinide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$nateglinide <- encoding(dataset, 'nateglinide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$chlorpropamide <- encoding(dataset, 'chlorpropamide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glimepiride <- encoding(dataset, 'glimepiride', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$acetohexamide <- encoding(dataset, 'acetohexamide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glipizide <- encoding(dataset, 'glipizide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glyburide <- encoding(dataset, 'glyburide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$tolbutamide <- encoding(dataset, 'tolbutamide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$pioglitazone <- encoding(dataset, 'pioglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$rosiglitazone <- encoding(dataset, 'rosiglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$acarbose <- encoding(dataset, 'acarbose', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$miglitol <- encoding(dataset, 'miglitol', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$troglitazone <- encoding(dataset, 'troglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$tolazamide <- encoding(dataset, 'tolazamide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$insulin <- encoding(dataset, 'insulin', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glyburide.metformin <- encoding(dataset, 'glyburide.metformin', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glipizide.metformin <- encoding(dataset, 'glipizide.metformin', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$glimepiride.pioglitazone <- encoding(dataset, 'glimepiride.pioglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$metformin.rosiglitazone <- encoding(dataset, 'metformin.rosiglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$change <- encoding(dataset, 'change', c('No', 'Ch'), c(0,1))
dataset$diabetesMed <- encoding(dataset, 'diabetesMed', c('No', 'Yes'), c(0,1))
dataset$readmitted <- encoding(dataset, 'readmitted', c( 'NO', '<30', '>30'), c(0,1,2))
dataset$citoglipton <- encoding(dataset, 'citoglipton', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$metformin.pioglitazone <- encoding(dataset, 'metformin.pioglitazone', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))
dataset$examide <- encoding(dataset, 'examide', c('No', 'Down', 'Steady', 'Up'), c(1,2,3,4))