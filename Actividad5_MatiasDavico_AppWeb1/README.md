# Actividad 5 — Sitio web básico (HTML) para un cliente comitente ficticio

**Joaquín Baigorria — Aplicaciones Web 1 — IES**

---

## 1. Prompt utilizado

El siguiente prompt fue utilizado en Gemini para generar el brief de requerimientos y los textos del sitio, en el rol de cliente comitente:

> Actúa como un cliente comitente (un profesional independiente) que quiere encargar el desarrollo de su sitio web. Tu objetivo es proporcionarme el brief de requerimientos y los textos para que YO cree el sitio web usando HTML básico. Genera la información respetando exactamente los siguientes puntos: 1) Perfil del Cliente Comitente, 2) Protopersona, 3) Historia de Usuario, 4) Restricciones del Proyecto Web (solo 2 páginas, sin CSS ni JavaScript), 5) Requerimientos Funcionales y Contenido Real (textos completos para ambas páginas, sin Lorem Ipsum). Reglas: no generar código HTML ni etiquetas, no hacer preguntas finales, finalizar la respuesta inmediatamente después de entregar los textos.

## 2. Respuesta original de la IA (Gemini)

### 2.1 Perfil del cliente comitente
- **Nombre y profesión:** Mateo Rivas, Consultor en Sostenibilidad Corporativa.
- **Contexto y objetivo:** asesora a pymes para adaptar sus modelos de negocio a prácticas más ecológicas y sostenibles. El objetivo del sitio es tener una presencia digital profesional que sirva de carta de presentación.

### 2.2 Protopersona
Laura Fernández, 45 años, Gerente de Operaciones de una pyme manufacturera. Necesita adaptarse a nuevas normativas ambientales y mejorar su reputación pública, pero no tiene conocimientos técnicos para iniciar la transición.

### 2.3 Historia de usuario
> Como Laura Fernández, quiero leer el detalle de los servicios de consultoría y la experiencia del profesional para decidir si tiene la capacidad de ayudar a mi empresa a cumplir con las regulaciones ambientales.

### 2.4 Restricciones del proyecto
- El sitio consta de únicamente 2 páginas: **Página 1** (Quién soy / Servicios) y **Página 2** (Formulario de Contacto).
- Restricción técnica: solo HTML básico, sin CSS ni JavaScript.

### 2.5 Contenido propuesto por la IA
- **Página 1:** título, presentación, trayectoria y lista de 4 servicios (Auditoría Ambiental, Estrategia de Descarbonización, Capacitación Corporativa, Reportes de Sostenibilidad).
- **Página 2:** texto introductorio y 5 campos de formulario sugeridos: nombre completo (text), correo corporativo (email), nombre de la empresa (text), tamaño de la empresa (select), motivo de la consulta (textarea) y botón de envío (submit).

## 3. Auditoría de la respuesta

La respuesta de Gemini respetó la estructura de los 5 puntos solicitados, sin incluir código HTML ni preguntas de seguimiento, cumpliendo las restricciones indicadas en el prompt.

Al revisar el contenido, detecté que los párrafos de presentación y trayectoria usaban un lenguaje genérico y frases hechas típicas de texto generado por IA (por ejemplo, "enfoque práctico, personalizado y orientado a resultados medibles"), además de cifras redondas poco creíbles ("10 años", "40 empresas"). Reescribí esos fragmentos con un tono más natural y cifras más específicas. También acorté el texto introductorio del formulario para que resultara menos publicitario y más directo.

El resto del contenido —la lista de servicios, los campos del formulario y los tipos de input sugeridos— se mantuvo, ya que cumplía correctamente los requerimientos técnicos pedidos.

## 4. Textos finales ajustados (usados para el maquetado)

### Página 1 — Quién soy / Servicios

**Título principal:**
Mateo Rivas – Consultoría en Sostenibilidad Corporativa

**Presentación:**
Soy Mateo Rivas, consultor en sostenibilidad corporativa. Ayudo a pymes a adaptar su operación a las nuevas exigencias ambientales sin perder rentabilidad en el camino. Sé que este proceso puede parecer complicado si nunca lo enfrentaste antes; por eso trabajo de forma cercana, con pasos concretos y objetivos medibles desde el primer mes.

**Trayectoria:**
Llevo 7 años trabajando con empresas industriales y logísticas de la región, acompañando procesos de adaptación ambiental. Soy Licenciado en Ciencias Ambientales, con formación en gestión de sostenibilidad y medición de huella de carbono.

**Servicios:**
- Auditoría Ambiental: evaluación del estado actual de la empresa frente a las normativas vigentes.
- Estrategia de Descarbonización: plan de acción para reducir las emisiones de la cadena de valor.
- Capacitación Corporativa: talleres para empleados y directivos sobre prácticas sostenibles.
- Reportes de Sostenibilidad: informes anuales de impacto para inversores, clientes y autoridades.

### Página 2 — Formulario de Contacto

**Texto introductorio:**
Contame brevemente sobre tu empresa y qué desafío ambiental están enfrentando. Te respondo en 48 horas para coordinar una primera reunión sin costo.

**Campos del formulario:**
- Nombre completo del contacto — `input type="text"`
- Correo electrónico corporativo — `input type="email"`
- Nombre de la empresa — `input type="text"`
- Tamaño de la empresa — `select` (opciones: "1 a 10 empleados", "11 a 50 empleados", "Más de 50 empleados")
- Motivo de la consulta o desafío principal — `textarea`
- Botón para enviar el mensaje — `input type="submit"`

## 5. Archivos del proyecto

- `index.html` — Página 1: Quién soy / Servicios
- `contacto.html` — Página 2: Formulario de Contacto
- `recursos/imagenes/` — imagen de perfil utilizada en `index.html`
