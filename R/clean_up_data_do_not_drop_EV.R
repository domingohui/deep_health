setwd('~/deep_health/R/dataset')

encoding <- function (dataset, col_name, from, to) {
  new_col <- factor(dataset[[col_name]],
                        levels = from,
                        labels = to)
  return (new_col)
}

func <- function(x) {
  x <- as.double(x)
  if (x >= 1 && x <= 139)
    return (1)
  else if (x >= 140 && x <= 239)
    return (2)
  else if (x >= 240 && x <= 248)
    return (3)
  else if (x >= 249 && x <= 250)
    return (4)
  else if (x >= 250.01 && x <= 250.99)
    return(5)
  else if (x >= 251 && x <= 279)
    return (3)
  else if (x >= 280 && x <= 289)
    return (6)
  else if (x >= 290 && x <= 319)
    return (7)
  else if (x >= 320 && x <= 359)
    return (8)
  else if (x >= 360 && x <= 389)
    return (9)
  else if (x >= 390 && x <= 459)
    return (10)
  else if (x >= 460 && x <= 519)
    return (11)
  else if (x >= 520 && x <= 579)
    return (12)
  else if (x >= 580 && x <= 629)
    return (13)
  else if (x >= 630 && x <= 679)
    return (14)
  else if (x >= 680 && x <= 709)
    return (15)
  else if (x >= 710 && x <= 739)
    return (16)
  else if (x >= 740 && x <= 759)
    return (17)
  else if (x >= 760 && x <= 779)
    return (18)
  else if (x >= 780 && x <= 799)
    return (19)
  else if (x >= 800 && x <= 999)
    return (20)
  else 
    return (0)
}

encodeDiagCategories <- function (dataset, col_name) {
  return (lapply(dataset[[col_name]], func))
}

# Read data
dataset <- read.csv("diabetes-problem-1.csv")

# Remove empty rows
dataset <- dataset[!is.na(dataset$encounter_id),]

# Drop columns with >5% of missing data
dataset$weight <- NULL
dataset$medical_specialty <- NULL
dataset$payer_code <- NULL

# Encode and categorize diag_1, diag_2, diag_3
# 1) Since problem set contains no V's or E's conditions, we can ignore rows with those categories

# 2) Replace ? with '0' category
levels(dataset$diag_1)[match('?', levels(dataset$diag_1))] <- 0
levels(dataset$diag_2)[match('?', levels(dataset$diag_2))] <- 0
levels(dataset$diag_3)[match('?', levels(dataset$diag_3))] <- 0


dataset$diag_1[(substr(dataset$diag_1, 0,1)=='E' | substr(dataset$diag_1, 0,1)=='V')] <- 0
dataset$diag_2[(substr(dataset$diag_2, 0,1)=='E' | substr(dataset$diag_2, 0,1)=='V')] <- 0
dataset$diag_3[(substr(dataset$diag_3, 0,1)=='E' | substr(dataset$diag_3, 0,1)=='V')] <- 0

# 3) Encode categories into broader categories
dataset$diag_1<-unlist(lapply(as.vector(dataset$diag_1),func))
dataset$diag_2<-unlist(lapply(as.vector(dataset$diag_2),func))
dataset$diag_3<-unlist(lapply(as.vector(dataset$diag_3),func))


# Encode columns
dataset$gender <- encoding(dataset, 'gender', c('Female', 'Male'), c(1,2))
dataset$age <- encoding(dataset, 'age', unique(dataset$age), 1:length(unique(dataset$age)))
dataset$race <- encoding(dataset, 'race', c('AfricanAmerican', 'Asian', 'Caucasian', 'Hispanic', 'Other'), c(1,2,3,4,5))
dataset$max_glu_serum <- encoding(dataset, 'max_glu_serum', c('None', 'Norm', '>200', '>300'), c(1,2,3,4))
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

# Tally total visits
dataset$total_visits <- dataset$number_inpatient + dataset$number_outpatient + dataset$number_emergency