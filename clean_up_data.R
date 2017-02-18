# dataset=read.csv("dataset/diabetes-training.csv")

encoding <- function (dataset, col_name, from, to) {
  new_col <- as.numeric(factor(dataset$race),
                        levels = from,
                        labels = to)
  return (new_col)
}