# 🐴 Equine Survival Prediction with Neural Networks

This project explores the use of neural networks to predict the survival outcome of horses suffering from colic based on clinical and physiological data.

## 📋 Project Description

The dataset includes real-world veterinary records with features such as heart rate, respiratory rate, mucous membrane color, pain level, and total protein. The goal is to predict whether the horse will **survive**, **die**, or be **euthanized**.

The approach combines data preprocessing, exploratory analysis, feature engineering, and neural network modeling using TensorFlow and Keras.

---

## 🧪 Steps Covered

- Handling of missing values (some features had over 30% missing)
- Exploratory data analysis (EDA) with seaborn and matplotlib
- One-Hot Encoding of categorical variables
- Feature normalization using MinMaxScaler
- Design of a dense neural network with:
  - ReLU activation in hidden layers
  - Softmax output for 3-class classification
  - EarlyStopping to prevent overfitting
- Evaluation with:
  - Accuracy
  - F1-Score
  - ROC AUC Score
  - Confusion matrix and classification report

---

## 📈 Results

- **Test accuracy:** ~73%
- The model revealed that **total protein** and **heart rate** were among the most influential features.
- EarlyStopping was triggered appropriately, preventing overfitting while preserving generalization.

---

## 🔧 Tools Used

- Python 3  
- Pandas, NumPy  
- Matplotlib, Seaborn  
- Scikit-learn  
- TensorFlow / Keras

---

## 📁 Files

- `equine_survival_prediction.ipynb`: Main notebook with all code and visualizations.
- `preview.png`: Visual summary for the portfolio card (e.g. confusion matrix or learning curves).

---

## ✅ Status

✔️ Completed and tested  
🧠 Potential improvements: Try alternative models (e.g. Random Forest, XGBoost), apply SMOTE for class balancing, or deploy the model.

---

## 📬 Author

Juan Andrés Bórquez  
[LinkedIn](https://www.linkedin.com/in/jabsit) | [GitHub](https://github.com/JuantxoCL)
