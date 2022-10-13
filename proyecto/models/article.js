const mongoose = require("mongoose");
const { marked } = require("marked");
// SLUG = {
//     es lo que viene después de nuestro dominio
//     ej: http://midominio.com/SLUG/ y se refiere
//     a una página o publicación especifica
// }
const slugify = require("slugify");
// DOMPurify = desinfecta un fragmento de HTML eliminando cargas
// útiles XSS(cross site scripting)
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

// Es una herramienta que nos permite recrear un DOM donde no existe el DOM
// En nuestro entorno en el que no contamos con un navegador
const dompurify = createDOMPurify(new JSDOM().window);

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    markdown: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      require: true,
      // Construye indices únicos pero no es una validación
      unique: true,
      unique: true,
    },
    sanitizedhtml: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

// Middleware .pre()
articleSchema.pre("validate", function (next) {
  if (this.title) {
    // lower: convertir texto en minúscula
    // strict: eliminar caracteres especiales
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  if (this.markdown) {
    // Se convierte el documento HTML y luego limpiar el documento que se pasa y se deshace
    // de cualquier código malisioso
    this.sanitizedhtml = dompurify.sanitize(marked(this.markdown));
  }
  next();
});

module.exports = mongoose.model("Article", articleSchema);
