# dataset=read.csv("dataset/diabetes-training.csv")

encoding <- function (dataset, col_name, from, to) {
  new_col <- as.numeric(factor(dataset[[col_name]]),
                        levels = from,
                        labels = to)
  return (new_col)
}