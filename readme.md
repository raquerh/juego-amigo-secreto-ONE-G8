# Challenge Amigo Secreto - ONE G8 - Alura Latam

Este proyecto es parte de un **challenge** propuesto por [Alura Latam](https://www.aluracursos.com/) para practicar lógica de programación con **JavaScript**.

El objetivo principal es desarrollar una aplicación que permita a los usuarios ingresar nombres de amigos en una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

El usuario puede agregar nombres mediante un campo de texto y un botón **"Añadir"**. Los nombres ingresados se mostrarán en una lista visible en la página y, al finalizar, un botón **"Sortear Amigo"** seleccionará un nombre de forma aleatoria, mostrando el resultado en pantalla.

El **HTML y CSS** fueron provistos como base por **ONE - Alura Latam**, mientras que la lógica del proyecto fue completamente desarrollada por mí.

---

## 🚀 Funcionalidades  

### 1️⃣ **Agregar nombres**
- Los usuarios pueden ingresar nombres en un campo de texto.
- Los nombres se añaden a una lista visible al presionar el botón **Añadir** o la tecla **Enter**.

### 2️⃣ **Validación de entrada**
- Si el campo de texto está vacío, el sistema muestra una alerta pidiendo un nombre válido.

### 3️⃣ **Visualización de la lista**
- Los nombres ingresados se muestran en una lista debajo del campo de entrada a medida que se van agregando.

### 4️⃣ **Sorteo aleatorio**
- Al presionar el botón **"Sortear amigo"**, se selecciona aleatoriamente un nombre de la lista y se muestra en pantalla.
- Posee validación: si la lista está vacía, el sistema muestra una alerta indicando que se deben agregar amigos antes de sortear.

### 5️⃣ **Mejoras implementadas**
- Se permite presionar **Enter** como alternativa al botón **Añadir**, mejorando la experiencia del usuario.  
- Se agregó **focus automático** al campo de ingreso de nombres. Después de agregar un nombre o tras una entrada inválida, el cursor vuelve al campo de texto automáticamente.  
- Se añadió un botón **Eliminar**, que permite quitar un nombre de la lista. La lista se actualiza inmediatamente después de eliminar un nombre.  
- Se añadió un botón **Reiniciar Sorteo**, que borra la lista de nombres y el resultado del sorteo, permitiendo comenzar nuevamente sin necesidad de recargar la página. Además, restablece el campo de entrada para seguir agregando nombres de inmediato.  

---

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura base provista por **ONE - Alura Latam**, con algunas modificaciones realizadas por mí.  
- **CSS3**: Estilos y diseño responsivo provistos por **ONE - Alura Latam**, con mejoras para aplicar nuevas funcionalidades.  
- **JavaScript**: Desarrollo de la lógica del proyecto y manipulación del DOM.  

---

## 🔗 Probar el proyecto  

### ▶️ **GitHub Pages**  

El proyecto está desplegado en GitHub Pages. Puedes probarlo haciendo clic en el siguiente enlace:  

👉 **[Amigo Secreto - Desplegado en GitHub Pages](https://raquerh.github.io/juego-amigo-secreto-ONE-G8/)**  

### 🖥️ **Ejecutar de manera local**  

Si prefieres ejecutar el proyecto en tu computadora:  

1️⃣ Clona este repositorio usando Git Bash:  

git clone https://github.com/raquerh/juego-amigo-secreto-ONE-G8

2️⃣ Abre el archivo `index.html` en tu navegador:  


### Ve a la carpeta donde clonaste el proyecto
cd nombre-de-tu-repositorio

### Abre el archivo index.html en tu navegador
- start index.html  # En Windows
- open index.html   # En macOS
- xdg-open index.html  # En Linux


## 📌 Posibles mejoras  

1️⃣ **Guardar nombres**: Implementar almacenamiento local para guardar la lista de nombres.

2️⃣ **Mostrar un historial de sorteos**: Guardar y mostrar los resultados de sorteos anteriores para que los usuarios puedan ver quién fue el "amigo secreto" en ediciones anteriores.

3️⃣ **Verificación de duplicados**: Evitar que se agreguen nombres duplicados. Si el usuario intenta agregar un nombre que ya está en la lista, muestra una alerta indicando que ya existe.

4️⃣ **Hacer que el sorteo sea "secreto"**: Cuando se hace el sorteo, cada usuario debería recibir un mensaje privado con el nombre del amigo secreto asignado, y los demás no deberían poder ver esta información.

5️⃣ **Opción de "Asignar amigo secreto manualmente"**: Permitir que el usuario asigne un amigo secreto manualmente a cada persona de la lista, en lugar de realizar un sorteo aleatorio.

6️⃣ **Agregar animaciones o efectos visuales**: Agregar transiciones, efectos o animaciones para mostrar los resultados del sorteo o cuando se agregan nuevos amigos.

7️⃣ **Opción de exportar la lista de amigos a un archivo**: Permitir al usuario exportar la lista de amigos y los resultados del sorteo a un archivo CSV o PDF.

8️⃣ **Hacer que el botón "Sortear Amigo" se desactive hasta que haya al menos 3 amigos en la lista**: Esto asegura que no se pueda hacer el sorteo sin suficientes participantes.



