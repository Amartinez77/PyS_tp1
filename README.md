# Be | Strong - Sitio Web de Fitness

[![Preview del Sitio](https://i.postimg.cc/wMrqhNwB/image.png)](https://be-strong1.netlify.app/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🏋️‍♂️ Descripción
Sitio web para gimnasio con enfoque en usabilidad y diseño responsive. Incluye:
- Páginas informativas (clases, entrenadores, planes)
- Blog interactivo
- Modo claro/oscuro

## 🎨 Decisiones de Diseño
### Paleta de Colores
| Color               | Uso                  | Accesibilidad |
|---------------------|----------------------|---------------|
| `#e63946` (Rojo)    | Botones, acentos     | WCAG AA       |
| `#1a1a2e` (Azul)    | Fondos oscuros       | WCAG AAA      |
| `#f8f9fa` (Blanco)  | Fondo principal      | -             |

![Paleta de Colores](https://via.placeholder.com/400x100/e63946,1a1a2e,f8f9fa/ffffff?text=Be|Strong+Colors)

### Tipografía
- **Arial (Sans-serif)**: Optimizada para legibilidad en pantallas
- **Tamaños**: 
  - Desktop: 1.2rem (cuerpo), 2.5rem (títulos)
  - Mobile: 1rem (cuerpo), 1.8rem (títulos)

## 🏗 Estructura del Proyecto
```bash
.
├── index.html          # Página principal
├── pages/              # Páginas secundarias
│   ├── clases.html
│   ├── entrenadores.html
│   ├── planes.html
│   ├── blog.html
│   └── contacto.html
└── assets/
    ├── css/
    │   └── style.css   # Estilos globales
    └── js/
        └── main.js     # Lógica principal

```

## 🛠 Tecnologías Utilizadas
| Tecnología       | Versión | Uso                          |
|------------------|---------|------------------------------|
| HTML5            | -       | Estructura semántica         |
| CSS3             | -       | Estilos y animaciones        |
| JavaScript (ES6) | -       | Interactividad               |
| Font Awesome     | 6.4.0   | Íconos                       |
| Google Fonts     | -       | Tipografía                   |

## ✨ Features Técnicas
### 1. Modo Claro/Oscuro

// main.js
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

Ventajas:

Sin dependencias externas

Cambio instantáneo

Estilos centralizados en CSS

### 2. Menú Hamburguesa

/* Mobile-first approach */
@media (max-width: 768px) {
  .nav-list {
    transform: translateX(100%);
  }
}

### Blog con CSS Grid

.blog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

## 🚀 Cómo Ejecutar Localmente

### 1. Clona el repositorio

git clone https://github.com/tuusuario/be-strong.git

### 2. Abre con servidor local:

python -m http.server 8000

### Accede en:

http://localhost:8000
