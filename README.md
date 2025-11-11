# Sistema de Programación de Citas — Clínica BIOSANUM

Aplicación web desarrollada con **arquitectura monolítica** bajo el patrón **MVC (Modelo – Vista – Controlador)**, utilizando **Node.js**, **Express**, **EJS** y **MongoDB**.

---

## Arquitectura del Sistema

El proyecto está estructurado por capas, aplicando el patrón arquitectónico **MVC**:

### Capa de Presentación (Vistas)
- Interactúa con el usuario final.  
- Construida con **HTML**, **CSS**, **Bootstrap** y **EJS**.  
- Muestra formularios, listados de citas, perfil, calendario y login.  

### Capa de Negocio (Controladores)
- Contiene la lógica principal del sistema.  
- Valida datos, crea, edita, elimina citas y procesa la autenticación.  
- Se comunica con los modelos y responde a las rutas.  

### Capa de Persistencia (Modelos)
- Administra la estructura y el acceso a los datos.  
- Implementada con **Mongoose**.  
- Gestiona colecciones como **Usuarios** y **Citas** en **MongoDB**.  

---

## Estructura del Proyecto

```text
src/
 ├── config/         → Configuración general, conexión a MongoDB.
 ├── controllers/    → Controladores de la aplicación.
 ├── models/         → Modelos de la base de datos (Mongoose).
 ├── public/         → Archivos estáticos (CSS, JS, imágenes).
 ├── routes/         → Definición de rutas de Express.
 ├── utils/          → Funciones genéricas y herramientas auxiliares.
 ├── views/          → Plantillas EJS que definen la interfaz visual.
 ├── middlewares/    → Autenticación, control de roles y manejo de errores.
 └── server.js       → Archivo principal, inicialización del servidor Express.
```

---

## Tecnologías Utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| **Node.js** | Entorno de ejecución del lado del servidor. |
| **Express** | Framework para gestionar rutas y peticiones HTTP. |
| **MongoDB** | Base de datos NoSQL para almacenamiento de información. |
| **Mongoose** | ODM para manejar modelos y colecciones de MongoDB. |
| **EJS** | Motor de plantillas para renderizar vistas dinámicas. |
| **Bootstrap** | Librería CSS para estilos y componentes del frontend. |

---

## Operaciones Principales

### **Usuarios**
- Inicio de sesión.  
- Cierre de sesión.  

### **Gestión citas**
- Crear, ver, editar, eliminar y listar citas.  
- Asignación de paciente y estado (pendiente, confirmada, cancelada).  

### **Gestión usuarios**
- Crear, ver, editar, eliminar y listar citas.

### **Perfil**
- Ver y actualizar información del usuario.  

---

## Flujo General de la Aplicación

```text
Usuario
   ↓
Ruta HTTP (GET, POST, PUT, DELETE)
   ↓
Controlador (recibe la solicitud, valida y procesa)
   ↓
Modelo (estructura de datos, conexión con MongoDB)
   ↓
Base de Datos (guardar, actualizar, borrar o consultar)
   ↓
Vista (respuesta renderizada con EJS)
   ↓
Usuario recibe la respuesta en el navegador
```

## Autor y Propósito

**Proyecto académico:** Sistema de gestión y programación de citas médicas.  
**Desarrollado para:** *Clínica BIOSANUM.*  
**Tecnologías:** Node.js, Express, EJS y MongoDB.  

