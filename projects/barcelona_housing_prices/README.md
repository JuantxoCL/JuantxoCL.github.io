# 🏠 Predicting Rental Prices per Square Meter in Barcelona

This project focuses on building predictive models to estimate **rental prices per square meter** in Barcelona using property listing data. The dataset includes features such as square meters, number of rooms and bathrooms, location, and more.

---

## 📊 Project Overview

The goal was to generate a target variable `price_per_sq_meter` and develop machine learning models that could predict it accurately. The process included extensive exploratory analysis, feature engineering, and the implementation of multiple regression models.

### Key Steps:
- Created a new variable: `price_per_sq_meter` = rental price / surface area
- Normalized features like rooms and bathrooms per m²
- Performed exploratory data analysis with histograms, scatterplots, and correlation heatmaps
- Applied PCA and ANOVA to study variable importance
- Handled missing values, normalized numeric data, and encoded categorical features

---

## 🔧 Models Trained

Three regression models were built and compared:

- **Bagging Regressor** with hyperparameter tuning (GridSearchCV + 10-fold CV)
- **Random Forest Regressor**, which delivered the best performance
- **CatBoost Regressor**, combined with **SHAP value analysis** for model interpretability

### 🔍 SHAP Analysis:
The SHAP interpretation from the CatBoost model revealed that **surface area**, **district**, and **number of rooms per square meter** had the strongest influence on rental price predictions.

---

## 📈 Performance

- **Best model**: Random Forest Regressor  
- **Metric**: R² score  
- **Conclusion**: The model shows moderate predictive ability and provides valuable insights into key pricing factors in the Barcelona housing market.

---

## 📁 Files

- `barcelona_housing_prices.ipynb`: Main notebook with code and results  
- `preview.png`: Image preview for the portfolio card (e.g. SHAP plot or correlation heatmap)

---

## 🚀 Run the Notebook

- [💻 View on GitHub](https://github.com/JuantxoCL/JuantxoCL.github.io/blob/main/projects/barcelona_housing_prices/barcelona_housing_prices.ipynb)  
- [📊 Open in Google Colab](https://colab.research.google.com/drive/10vrFo-QAxGdctyDTtVUciD2tQLNYldvW?usp=sharing)

---

## 🛠️ Tools Used

- Python 3  
- Pandas, NumPy  
- Scikit-learn  
- CatBoost  
- SHAP  
- Matplotlib & Seaborn

---

## 📬 Author

Juan Andrés Bórquez  
[LinkedIn](https://www.linkedin.com/in/jabsit) | [GitHub](https://github.com/JuantxoCL)
