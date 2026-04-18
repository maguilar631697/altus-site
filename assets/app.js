// ========== Altus Energy — interactive JS ==========

// Spanish translations
const translations = {
  es: {
    // Nav & CTAs
    cta_capabilities: "Nuestras Capacidades",
    cta_contact: "Contáctenos",

    // Hero
    hero_eyebrow: "Manufactura desde El Salvador · Puerta CAFTA-DR",
    hero_title: 'Arneses de Cable y Ensamblaje Avanzado, <span class="accent">Diseñados para las Américas</span>',
    hero_sub: "Altus Energy entrega arneses de cable, ensamblajes y cajas de desconexión de grado industrial a clientes en Norteamérica, Centroamérica y Sudamérica — con equipos modernos, sistemas estrictos de calidad, y la ventaja arancelaria de CAFTA-DR.",

    stat_jobs: "Empleos Calificados",
    stat_ops: "Operación Dos Turnos",
    stat_tariff: "Arancel a EE.UU. (CAFTA-DR)",
    stat_quality: "Estándar IPC/WHMA",

    // Trust bar
    trust_title: "Excelencia en Manufactura Basada en Estándares Comprobados",
    trust_iso: "Alineado con ISO 9001",
    trust_ipc: "Conforme con IPC/WHMA-A-620",
    trust_cafta: "Calificado bajo CAFTA-DR",
    trust_rohs: "RoHS y REACH",

    // Capabilities
    cap_eyebrow: "Lo Que Construimos",
    cap_title: "Siete Capacidades de Producción Integradas",
    cap_sub: "Una sola planta, equipos modernos, y operarios capacitados entregando desde componentes en bruto hasta ensamblajes terminados y probados.",
    cap1_title: "Procesamiento de Cable",
    cap1_body: "Operaciones automatizadas de corte, pelado y crimpado en máquinas BOZWANG y equivalentes de alta velocidad. Longitudes de precisión para ensamblajes multiconductores complejos.",
    cap2_title: "Moldeo por Inyección",
    cap2_body: "Doce celdas de moldeo por inyección produciendo conectores sobremoldeados, terminaciones y sellos ambientales para aplicaciones industriales y de servicios públicos.",
    cap3_title: "Crimpado",
    cap3_body: "Crimpadoras automáticas alimentadas por carrete, prensas neumáticas PENNTEC y celdas automáticas cerradas para integridad de crimp consistente y validada a escala.",
    cap4_title: "Ensamblaje",
    cap4_body: "Soldadura ultrasónica Schleuniger, ensamblaje de conectores JCWelec, y estaciones de precisión de prensaestopa y torque — ensamblados y verificados según especificación de ingeniería.",
    cap5_title: "Líneas Automáticas",
    cap5_body: "Líneas de enrollado, producción de jumpers e indexado rotativo para ensamblajes repetitivos de alto volumen que requieren takt time consistente.",
    cap6_title: "Control de Calidad",
    cap6_body: "Inspectores QC dedicados con autoridad para detener la línea. Validación de continuidad eléctrica, hi-pot y prueba de tracción en cada ensamblaje. Trazabilidad completa a planos de ingeniería.",
    cap7_title: "Cajas de Desconexión y Ensamblaje Final",
    cap7_body: "Líneas de banca de ensamblaje escalables donde componentes pre-crimpados y pre-moldeados se integran en cajas de desconexión terminadas, etiquetadas, probadas y empacadas para envío — iniciando con cuatro bancas y expandiéndose a ocho.",

    // Quality
    q_eyebrow: "Calidad Primero",
    q_title: "La Calidad No Es un Departamento. Es una Disciplina.",
    q_body1: "Cada turno cuenta con un inspector QC dedicado con autoridad explícita para detener la línea de producción por defectos o desviaciones de especificación. Construimos bajo estándares IPC/WHMA-A-620 — el referente global en manufactura de arneses — y validamos cada ensamblaje con equipos de continuidad eléctrica, hi-pot y prueba mecánica de tracción.",
    q_body2: "Nuestros operarios de soldadura ultrasónica Schleuniger son especialistas dedicados sin rotación. Nuestros Ingenieros de Manufactura son expertos en cambios de molde, diagnóstico PLC y mantenimiento preventivo. Esta combinación de estándares, equipos y personas es cómo entregamos arneses que funcionan en el campo.",
    q_point1: "Estándares de manufactura IPC/WHMA-A-620",
    q_point2: "Inspector QC dedicado por turno con autoridad para detener línea",
    q_point3: "Cobertura de prueba eléctrica y mecánica al 100%",
    q_point4: "Trazabilidad completa a revisión de plano de ingeniería",
    q_point5: "Gestión de calidad alineada con ISO 9001",
    q_point6: "Cumplimiento RoHS y REACH",

    // Markets
    m_eyebrow: "A Quiénes Servimos",
    m_title: "Construido para Industrias Exigentes",
    m_sub: "Los arneses de cable y ensamblajes son invisibles cuando funcionan — y costosos cuando fallan. Nuestros clientes no pueden permitirse ninguno de esos resultados.",
    m1_title: "Servicios Públicos y Energía",
    m1_body: "Infraestructura de red, cableado de subestaciones, conductores de transformadores de distribución y ensamblajes de cajas de desconexión para clientes de servicios públicos que requieren confiabilidad bajo condiciones extremas.",
    m2_title: "Energías Renovables",
    m2_body: "Arneses de cajas combinadoras solares, cableado para sistemas de almacenamiento de energía (BESS), conexiones de inversores y ensamblajes de motores de seguimiento para proyectos renovables a escala utility.",
    m3_title: "OEM Industrial",
    m3_body: "Arneses personalizados para fabricantes de equipos industriales — controles de motor, redes de sensores, paneles HMI y ensamblajes de gabinetes de control según plano del cliente.",
    m4_title: "Transporte y Flotas",
    m4_body: "Arneses de iluminación de vehículos comerciales, cableado para telemática de flotas y ensamblajes de conectores de alta resistencia para aplicaciones viales, ferroviarias y todo terreno.",
    m5_title: "Infraestructura Comercial",
    m5_body: "Arneses de distribución eléctrica para edificios, cableado de centros de datos, sistemas de iluminación de emergencia y ensamblajes de iluminación industrial especializada.",
    m6_title: "Personalizado y por Contrato",
    m6_body: "Manufactura por contrato para OEMs, proveedores EMS e integradores especializados que necesitan un socio confiable, impulsado por la calidad y competitivo en costo.",

    // CAFTA
    c_eyebrow: "Ventaja Estratégica",
    c_title: "El Salvador: Su Puerta al Acceso Libre de Aranceles a EE.UU.",
    c_body1: "Bajo el Tratado de Libre Comercio entre República Dominicana, Centroamérica y Estados Unidos (CAFTA-DR), los arneses de cable y ensamblajes manufacturados en El Salvador ingresan a los Estados Unidos <strong>libres de aranceles</strong> bajo la clasificación HTS 8544 — siempre que se cumpla la regla de cambio arancelario.",
    c_body2: "La estrategia de aprovisionamiento y manufactura de Altus Energy está diseñada específicamente para calificar: obtenemos materias primas de proveedores de origen CAFTA-DR y NAFTA, y realizamos transformación sustancial en El Salvador. El resultado es una cadena de suministro competitiva en costo y libre de aranceles hacia el mercado de consumo más grande de las Américas.",
    c_feat1_title: "Acceso al Puerto de Acajutla",
    c_feat1_body: "Carga de contenedores el mismo día. Zarpes semanales a puertos del Golfo y Costa Este de EE.UU.",
    c_feat2_title: "Cadena de Suministro Calificada CAFTA-DR",
    c_feat2_body: "Varilla de aluminio mexicana serie 8000, conductor de cobre origen CAFTA, componentes regionales.",
    c_feat3_title: "Mano de Obra Calificada y Competitiva",
    c_feat3_body: "Sólido talento técnico, personal de ingeniería bilingüe, zona horaria alineada con Centro de EE.UU.",
    map_location: "Zona Franca Concordia",

    // Company
    co_eyebrow: "Sobre Altus",
    co_title: "Una Inversión en El Salvador, una Alianza para las Américas",
    co_sub: "Altus Energy fue establecida para traer manufactura de arneses de grado industrial a Centroamérica, crear 80 empleos técnicos de alta calidad, y darles a clientes estadounidenses y regionales una cadena de suministro confiable, con ventaja arancelaria, y geográficamente cercana.",
    cs_jobs: "Empleos Directos",
    cs_jobs_note: "40 turno diurno · 40 turno nocturno · capacitación técnica incluida",
    cs_time: "Días a Operación",
    cs_time_note: "Desde listo de planta hasta primer envío de producción",
    cs_areas: "Áreas de Producción",
    cs_areas_note: "Manufactura integrada en una sola planta",
    cs_scale: "Capacidad de Expansión",
    cs_scale_note: "Líneas de banca diseñadas para duplicar personal según demanda",

    // Contact
    ct_eyebrow: "Contáctenos",
    ct_title: "Construyamos su Cadena de Suministro",
    ct_sub: "Ya sea que esté evaluando un nuevo socio de manufactura, explorando los beneficios de CAFTA-DR, o buscando calificar a Altus para un programa específico, nos gustaría saber de usted. Un miembro de nuestro equipo responderá dentro de un día hábil.",
    ct_email_label: "Consultas Generales",
    ct_biz_label: "Desarrollo de Negocio",
    ct_loc_label: "Ubicación",

    // Footer
    ft_tagline: "Manufactura de arneses de cable y ensamblajes. El Salvador. Para las Américas.",
    ft_company: "Compañía",
    ft_about: "Nosotros",
    ft_caps: "Capacidades",
    ft_markets: "Mercados",
    ft_quality: "Calidad",
    ft_connect: "Conectar",
    ft_contact: "Contacto",
    ft_legal: "Todos los derechos reservados",
  }
};

// Save English defaults on first load
const englishDefaults = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  englishDefaults[key] = el.innerHTML;
});

let currentLang = localStorage.getItem('altus-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('altus-lang', lang);
  document.documentElement.lang = lang;

  const map = lang === 'es' ? translations.es : englishDefaults;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (map[key]) {
      el.innerHTML = map[key];
    }
  });

  // Update toggle button label
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  if (currentLang === 'es') setLanguage('es');

  // Language toggle
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'es' : 'en');
    });
  }

  // Mobile nav toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Smooth scroll already handled by CSS scroll-behavior
});
