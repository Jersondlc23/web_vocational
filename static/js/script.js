const preguntas = [
    "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.",
    "Criar, cuidar y tratar animales domésticos y de campo.",
    "Investigar sobre áreas verdes, medio ambiente y cambios climáticos.",
    "Ilustrar, dibujar y animar digitalmente.",
    "Seleccionar, capacitar y motivar al personal de una organización/empresa.",
    "Realizar excavaciones para descubrir restos del pasado.",
    "Resolver problemas de cálculo para construir un puente.",
    "Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.",
    "Tocar un instrumento y componer música.",
    "Planificar metas de una organización pública o privada a mediano y largo plazo.",
    "Diseñar y planificar la producción masiva de artículos como muebles, autos, etc.",
    "Diseñar logotipos y portadas de una revista.",
    "Organizar eventos y atender a sus asistentes.",
    "Atender la salud de personas enfermas.",
    "Controlar ingresos y egresos de fondos y presentar el balance final.",
    "Hacer experimentos con plantas (frutas, árboles, flores).",
    "Concebir planos para viviendas, edificios y ciudadelas.",
    "Investigar y probar nuevos productos farmacéuticos.",
    "Formular estrategias para aprovechar las relaciones económicas entre países.",
    "Pintar, hacer esculturas, ilustrar libros de arte, etc.",
    "Elaborar campañas para introducir un nuevo producto al mercado.",
    "Examinar y tratar los problemas visuales.",
    "Defender a clientes individuales o empresas en juicios.",
    "Diseñar máquinas que puedan simular actividades humanas.",
    "Investigar las causas y efectos de los trastornos emocionales.",
    "Supervisar las ventas de un centro comercial.",
    "Atender a personas con limitaciones físicas o problemas de lenguaje.",
    "Prepararse para ser modelo profesional.",
    "Aconsejar sobre planes de ahorro e inversiones.",
    "Elaborar mapas, planos e imágenes para análisis geográficos.",
    "Diseñar juegos interactivos electrónicos para computadora.",
    "Realizar el control de calidad de los alimentos.",
    "Tener un negocio propio de tipo comercial.",
    "Escribir artículos, cuentos, novelas y otros.",
    "Redactar guiones para televisión.",
    "Organizar distribución y venta en un gran almacén.",
    "Estudiar diversidad cultural en áreas rurales y urbanas.",
    "Gestionar convenios internacionales de desarrollo social.",
    "Crear campañas publicitarias.",
    "Investigar reproducción de peces, camarones y animales marinos.",
    "Fabricar productos alimenticios de consumo masivo.",
    "Gestionar proyectos en una institución educativa o fundación.",
    "Rediseñar y decorar espacios físicos.",
    "Administrar empresa de turismo o agencia de viajes.",
    "Aplicar métodos alternativos a la medicina tradicional.",
    "Diseñar ropa para diferentes edades.",
    "Investigar organismos vivos para elaborar vacunas.",
    "Dar mantenimiento a dispositivos tecnológicos de barcos o aviones.",
    "Estudiar idiomas para hacer traducción.",
    "Restaurar piezas y obras de arte.",
    "Revisar y mantener artefactos eléctricos y electrónicos.",
    "Enseñar a niños de 0 a 5 años.",
    "Sondear nuevos mercados.",
    "Atender la salud dental de las personas.",
    "Tratar a personas con problemas psicológicos.",
    "Promover productos peruanos en el mercado internacional.",
    "Recomendar dietas a personas con problemas de salud.",
    "Trabajar en una empresa petrolera como técnico.",
    "Administrar una empresa pública, privada o familiar.",
    "Tener un taller de reparación de carros, tractores, etc.",
    "Ejecutar proyectos de extracción minera y metalúrgica.",
    "Asistir a directivos de multinacionales con varios idiomas.",
    "Diseñar programas educativos para niños con discapacidad.",
    "Aplicar estadística en investigaciones.",
    "Fotografiar hechos históricos, lugares, paisajes, etc.",
    "Trabajar en museos y bibliotecas nacionales o internacionales.",
    "Ser parte de un grupo de teatro.",
    "Producir cortometrajes, spots, programas educativos o de ficción.",
    "Estudiar corrientes marinas y su impacto climático.",
    "Conocer religiones, filosofías y transmitirlas a la comunidad.",
    "Asesorar a inversionistas en compra de bienes o acciones.",
    "Estudiar grupos étnicos y compartir sus vivencias.",
    "Explorar el espacio sideral, planetas y sus características.",
    "Mejorar la imagen facial y corporal de las personas.",
    "Decorar jardines públicos y privados.",
    "Administrar menúes en un hotel o restaurante.",
    "Ser presentador, locutor o animador de programas culturales.",
    "Diseñar y ejecutar programas de turismo.",
    "Planificar el uso del espacio en ciudades y países.",
    "Organizar y administrar centros educativos."
]

const preguntasPorPagina = 20
let paginaActual = 0
const respuestas = {}

const carrerasPorArea = {
    "Arte y Creatividad": "Diseño Gráfico, Diseño y Decoración de Interiores, Diseño de Jardines, Diseño de Modas, Diseño de Joyas, Artes Plásticas (Pintura, Escultura, Danza, Teatro, Artesanía, Cerámica), Dibujo Publicitario, Restauración y Museología, Modelaje, Fotografía, Fotografía Digital, Gestión Gráfica y Publicitaria, Locución y Publicidad, Actuación, Camarografía, Arte Industrial, Producción Audiovisual y Multimedia, Comunicación y Producción en Radio y Televisión, Diseño del Paisaje, Cine y Video, Comunicación Escénica para televisión.",
    "Ciencias Sociales": "Psicología en general, Trabajo Social, Idiomas, Educación Internacional, Historia y Geografía, Periodismo, Periodismo Digital, Derecho, Ciencias Políticas, Sociología, Antropología, Arqueología, Gestión Social y Desarrollo, Consejería Familiar, Comunicación y Publicidad, Administración Educativa, Educación Especial, Psicopedagogía, Estimulación Temprana, Traducción Simultánea, Lingüística, Educación de Párvulos, Bibliotecología, Museología, Relaciones Internacionales y Diplomacia, Comunicación Social con mención en Marketing y Gestión de Empresas, Redacción Creativa y Publicitaria, Relaciones Públicas y Comunicación Organizacional, Hotelería y Turismo, Teología, Institución Sacerdotal.",
    "Económica, Administrativa y Financiera": "Administración de Empresas, Contabilidad, Auditoría, Ventas, Marketing Estratégico, Gestión y Negocios Internacionales, Gestión Empresarial, Gestión Financiera, Ingeniería Comercial, Comercio Exterior, Banca y Finanzas, Gestión de Recursos Humanos, Comunicaciones Integradas en Marketing, Administración de Empresas Ecoturísticas y de Hospitalidad, Ciencias Económicas y Financieras, Administración y Ciencias Políticas, Ciencias Empresariales, Comercio Electrónico, Emprendedores, Gestión de Organismos Públicos (Municipios, Ministerios, etcétera), Gestión de Centros Educativos.",
    "Ciencia y Tecnología": "Ingeniería en Sistemas Computacionales, Geología, Ingeniería Civil, Arquitectura, Electrónica, Telemática, Telecomunicaciones, Ingeniería Mecatrónica (Robótica), Imagen y Sonido, Minas, Petróleo y Metalurgia, Ingeniería Mecánica, Ingeniería Industrial, Física, Matemáticas Aplicadas, Ingeniería en Estadística, Ingeniería Automotriz, Biotecnología Ambiental, Ingeniería Geográfica, Carreras Militares (Marina, Aviación, Ejército), Ingeniería en Costas y Obras Portuarias, Estadística Informática, Programación y Desarrollo de Sistemas, Tecnología en Informática Educativa, Astronomía, Ingeniería en Ciencias Geográficas y Desarrollo Sustentable.",
    "Ciencias Ecológicas, Biológicas y de la Salud": "Biología, Bioquímica, Farmacia, Biología Marina, Bioanálisis, Biotecnología, Ciencias Ambientales, Zootecnia, Veterinaria, Nutrición y Estética, Cosmetología, Dietética y Estética, Medicina, Obstetricia, Urgencias Médicas, Odontología, Enfermería, Tecnología, Oceanografía y Ciencias Ambientales, Médica, Agronomía, Horticultura y Fruticultura, Ingeniería de Alimentos, Gastronomía, Chef, Cultura Física, Deportes y Rehabilitación, Gestión Ambiental, Ingeniería Ambiental, Optometría, Homeopatía, Reflexología."
}

function mostrarPreguntas() {
    const container = document.getElementById('preguntasContainer')
    container.innerHTML = ''

    const inicio = paginaActual * preguntasPorPagina
    const fin = Math.min(inicio + preguntasPorPagina, preguntas.length)

    const row = document.createElement('div')
    row.className = 'row'

    const col1 = document.createElement('div')
    col1.className = 'col-md-6'
    const col2 = document.createElement('div')
    col2.className = 'col-md-6'

    for (let i = inicio; i < fin; i++) {
        const html = `
            <div class="mb-3">
                <label class="form-label">${i + 1}. ${preguntas[i]}</label>
                <select id="P${i + 1}" class="form-select" required>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="1">No me interesa</option>
                    <option value="5">Me interesa</option>
                </select>
            </div>
        `
        if (i - inicio < 10) {
            col1.innerHTML += html
        } else {
            col2.innerHTML += html
        }
    }

    row.appendChild(col1)
    row.appendChild(col2)
    container.appendChild(row)

    document.getElementById('btnAnterior').disabled = paginaActual === 0
    document.getElementById('btnSiguiente').classList.toggle('d-none', fin === preguntas.length)
    document.getElementById('btnEnviar').classList.toggle('d-none', fin !== preguntas.length)
}

function guardarRespuestas() {
    const inicio = paginaActual * preguntasPorPagina
    const fin = Math.min(inicio + preguntasPorPagina, preguntas.length)

    for (let i = inicio; i < fin; i++) {
        respuestas[`P${i + 1}`] = parseInt(document.getElementById(`P${i + 1}`).value)
    }
}

document.getElementById('btnSiguiente').addEventListener('click', () => {
    const inicio = paginaActual * preguntasPorPagina
    const fin = Math.min(inicio + preguntasPorPagina, preguntas.length)
    let incompletas = []

    for (let i = inicio; i < fin; i++) {
        if (!document.getElementById(`P${i + 1}`).value) {
            incompletas.push(i + 1)
        }
    }

    if (incompletas.length > 0) {
        alert(`⚠️ Responde todas las preguntas antes de continuar.\nFaltan: ${incompletas.join(', ')}`)
        return
    }

    guardarRespuestas()
    paginaActual++
    mostrarPreguntas()
})

document.getElementById('btnAnterior').addEventListener('click', () => {
    paginaActual--
    mostrarPreguntas()
})

document.getElementById('formularioTest').addEventListener('submit', async function (e) {
    e.preventDefault()
    guardarRespuestas()

    const response = await fetch('/predecir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ respuestas })
    })

    const data = await response.json()
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('d-none')

    const perfiles = data.perfiles
    let html = ''

    if (perfiles.length === 1) {
        const perfil = perfiles[0]
        html = `
            <div class="card border-warning bg-light-subtle p-3">
                <div class="card-body">
                    <h5 class="card-title text-success">
                        ✅ Tu perfil vocacional es: <strong>${perfil}</strong>
                    </h5>
                    <p class="card-text mt-3">
                        <span class="text-primary">📘 Carreras afines:</span><br>
                        ${carrerasPorArea[perfil] || "<em>No disponible</em>"}
                    </p>
                </div>
            </div>
        `
    } else {
        html = `
            <div class="card border-info bg-light-subtle p-3">
                <div class="card-body">
                    <h5 class="card-title text-success">✅ Tus perfiles vocacionales son:</h5>
                    <ul>
                        ${perfiles.map(p => `<li><strong>${p}</strong></li>`).join("")}
                    </ul>
                    ${perfiles.map(p => `
                        <p class="mt-2">
                            <span class="text-primary">📘 Carreras afines a <strong>${p}</strong>:</span><br>
                            ${carrerasPorArea[p] || "<em>No disponible</em>"}
                        </p>
                    `).join("")}
                </div>
            </div>
        `
    }

    resultado.innerHTML = html
})

mostrarPreguntas()


