# 🚗 Car Insurance Claim Prediction with XGBoost & SHAP

Este proyecto explora la predicción de reclamaciones de seguros de auto usando aprendizaje automático avanzado. El objetivo es anticipar si un asegurado realizará una reclamación en los próximos seis meses, basándose en características de la póliza, del vehículo y del titular.

## 📂 Dataset
- Más de 58,000 pólizas (train) y 39,000 (test).
- Variables: antigüedad de la póliza, edad del auto, segmento, ciudad, potencia, tipo de dirección, combustible, equipamiento, etc.
- Variable objetivo: `is_claim` (1 = hará reclamo, 0 = no).

## 🔎 Pipeline del Proyecto

1. **Análisis exploratorio de datos (EDA):** Histogramas, boxplots, heatmaps de correlación y análisis de outliers.
2. **Transformación y selección de variables:** 
   - Conversión de variables binarias (Yes/No → 1/0)
   - One-Hot Encoding para categóricas relevantes
   - Extracción de valores numéricos de columnas de texto (ej: potencia, torque)
   - Normalización de numéricas y limpieza de outliers
3. **Pruebas estadísticas:** Chi-square, ANOVA, Kruskal-Wallis para evaluar la relevancia de features.
4. **Balanceo de clases:** SMOTE para resolver el fuerte desbalance de la variable objetivo.
5. **Modelado:** 
   - Entrenamiento y ajuste de hiperparámetros con **XGBoost** y **Random Forest**
   - Validación con GridSearchCV, ROC-AUC, matriz de confusión, classification report
6. **Interpretabilidad:** 
   - Análisis de importancia de variables y explicaciones con **SHAP values**

## 📈 Resultados

- El modelo XGBoost balanceado logró un excelente ROC-AUC (>0.95 en validación), pero la predicción de la clase minoritaria (claims reales) sigue siendo un reto típico en datasets desbalanceados.
- Variables como `policy_tenure`, `age_of_car`, `is_adjustable_steering`, `max_torque_Nm`, tipo de combustible y segmento son críticas para la predicción, según SHAP.
- Se comparó el rendimiento de XGBoost con Random Forest, confirmando la ventaja de XGBoost con un pipeline bien ajustado.

## 📌 Notas

- Incluye código reproducible, visualizaciones y explicación de cada paso.
- [Ver notebook en Google Colab](https://drive.google.com/file/d/1UtRSxLXqFWIbHfcIvFadiEkzdgEC1hyT/view?usp=sharing)

---

<div align="center">
  <img src="preview.png" alt="Preview del proyecto" width="720">
</div>
