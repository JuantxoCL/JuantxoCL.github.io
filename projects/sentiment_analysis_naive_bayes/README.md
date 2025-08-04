# App Store Review Sentiment Analysis
## Clasificación de Sentimientos con Naive Bayes

Este proyecto presenta un modelo de clasificación de sentimientos aplicado a reseñas de usuarios en la Google Play Store, utilizando el algoritmo de Naive Bayes.

### 🔍 Objetivo

Desarrollar un modelo que clasifique automáticamente reseñas como positivas/negativas (`1`) o neutras (`0`), permitiendo entender mejor la percepción de los usuarios sobre distintas aplicaciones móviles.

### 🧠 Enfoque

- Limpieza y preprocesamiento de texto (eliminación de signos, minúsculas, stopwords).
- Vectorización con `CountVectorizer`.
- Entrenamiento con `MultinomialNB`.
- Optimización con Laplace smoothing y pruebas con otras variables (como `package_name`).
- Evaluación del modelo mediante `accuracy`, `f1-score`, `matriz de confusión`.

### 📝 Dataset

El conjunto de datos contiene:
- `package_name`: nombre del paquete de la app.
- `review`: texto de la reseña del usuario.
- `polarity`: etiqueta de sentimiento (1 = polaridad clara, 0 = neutral).

### 📊 Resultados

El modelo alcanzó una precisión decente diferenciando claramente las reseñas con polaridad definida frente a aquellas neutras. Se exploran las limitaciones del dataset y posibles mejoras futuras.

### 🔗 Enlaces

- 📓 [Abrir Notebook en Google Colab](https://colab.research.google.com/drive/1JvuQFFh0AXDWhOUbRdaF0OxUitivXKSx?usp=sharing)
