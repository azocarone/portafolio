const author = `&copy; 2022-${new Date().getFullYear()} José Antonio Azócar Marcano.`;

export const Content = {
    es: {
        nav: {
            title: "Portafolio",
            about: "Perfil",
            education: "Formación",
            services: "Consultoría",
            projects: "Desarrollo",
            contact: "Contacto",
        },
        profile: {
            title: "Ing. Informático | Consultor I&O: Infraestructura y Ops.",
            linkTitle: "Haga clic para ver Currículum"
        },
        about: {
            title: "Perfil Profesional",
            description1: "Soy <strong>Ingeniero en Informática y Máster en e-Commerce</strong>, con una identidad profesional definida por la pasión hacia la infraestructura y el hábito de trabajar sobre el terreno operacional. Durante más de veinte años, he transformado la tecnología en un activo estratégico, evolucionando desde los fundamentos del comercio electrónico y la gestión de sistemas críticos hacia la consultoría independiente iniciada en 2010.",
            description2: "Mi trayectoria en entornos de alta responsabilidad, como la logística portuaria, me ha demostrado que la excelencia operativa nace de dos pilares independientes pero complementarios: el <strong>Clean Code</strong> para un software mantenible y la <strong>arquitectura física</strong> ejecutada con precisión técnica.",
            description3: "Sobre esta base de rigor operativo, mi valor diferencial reside en la capacidad de incorporar la versatilidad del <strong>IoT</strong> para dotar de inteligencia a la infraestructura convencional, diseñando soluciones a medida en escenarios donde las herramientas tradicionales resultan insuficientes.",
        },
        education: {
            title: "Formación Académica",
            items: {
                uc3m: {
                    degree: "Máster en Comercio Electrónico",
                    institution: 'Universidad "Carlos III de Madrid"'
                },
                uah: {
                    degree: "Ingeniería en Informática",
                    institution: 'Universidad "Alejandro de Humboldt"' 
                },
                iunp: {
                    degree: "Técnico Superior en Computación",
                    institution: 'Instituto Universitario de "Nuevas Profesiones"'
                },
            }
        },
        services: {
            title: "Consultor de Infraestructura y Operaciones IT",
            items: {
                networks: {
                    title: "Arquitectura Técnica",
                    tag: '"Infraestructura de Alto Rendimiento"',
                    description: "Diseño y despliego <strong>redes LAN</strong> de baja latencia, supervisando desde el <strong>cableado estructurado</strong> hasta las <strong>instalaciones eléctricas especializadas</strong>. Si el hardware no tiene una base sólida, el software no puede brillar."
                },
                systems: {
                    title: "Continuidad de Procesos",
                    tag: '"Operaciones Críticas"',
                    description: "Administro entornos <strong>GNU/Linux</strong> y gestiono el ciclo de vida completo de sus <strong>activos digitales</strong>. Mi fuerte es la <strong>resolución de incidentes Nivel 2 y 3</strong>, garantizando que sus servicios permanezcan disponibles cuando más se necesitan."
                },
                security: {
                    title: "Blindaje del Ecosistema",
                    tag: '"Ciberseguridad y Resiliencia"',
                    description: "No solo implemento <strong>seguridad perimetral</strong>; ejecuto <strong>análisis forenses</strong> tras incidentes para cerrar brechas y mitigar vulnerabilidades reales mediante un enfoque preventivo y reactivo."
                }
            }
        },
        projects: {
            title: "Desarrollo Web",
            items: {
                resume: {
                    title: "Currículum",
                    description: "CV digital: Estilo Harvard, compatible ATS, multilingüe, JS."
                },
                portfolio: {
                    title: "Portafolio",
                    description: "Vitrina online de un Profesional IT."
                }
            },
        },
        contact: {
            title: "Contacto",
            promo1: "¿Necesita un especialista en Tecnologías de la Información para su próximo proyecto?",
            promo2: "Le invito a completar el formulario. A la brevedad, me comunicaré con usted para concertar una entrevista.",
            form: {
                name: {
                    label: "Nombre",
                    placeholder: "Nombre completo.",
                    errors: {
                        valueMissing: "El nombre no puede estar vacío.",
                        patternMismatch: "El nombre no puede contener solo espacios."
                    }
                },
                email: {
                    label: "e-mail",
                    placeholder: "Dirección de correo.",
                    errors: {
                        valueMissing: "El e-mail no puede estar vacío.",
                        typeMismatch: "Ingrese un e-mail válido."
                    }
                },
                subject: {
                    label: "Asunto",
                    placeholder: "Motivo de su contacto.",
                    errors: {
                        valueMissing: "El asunto no puede estar vacío.",
                        patternMismatch: "El asunto no puede contener solo espacios."
                    }
                },
                message: {
                    label: "Mensaje",
                    placeholder: "Escriba su mensaje...",
                    errors: {
                        valueMissing: "El mensaje no puede estar vacío.",
                        customError: "El mensaje no puede contener solo espacios."
                    }
                },
                submit: "Enviar a WhatsApp"
            }
        },
        footer: {
            copyRight: `${author} Todos los derechos reservados.`
        }
    },
    en: {
        nav: {
            title: "Portfolio",
            about: "Profile",
            education: "Education",
            services: "Consulting",
            projects: "Development",
            contact: "Contact",
        },
        profile: {
            title: "Computer Engineer | I&O Consultant: Infrastructure & Ops.",
            linkTitle: "Click to view Résumé"
        },
        about: {
            title: "Professional profile",
            description1: "I am a Computer Science Engineer with a Master’s in e-Commerce, possessing a professional identity defined by a passion for infrastructure and a hands-on approach to operational challenges. Over more than twenty years, I have transformed technology into a strategic asset, evolving from the foundations of e-commerce and critical systems management into independent consulting, established in 2010.",
            description2: "My experience in high-stakes environments, such as port logistics, has demonstrated that operational excellence is built upon two independent yet complementary pillars: Clean Code for maintainable software and physical architecture executed with technical precision.",
            description3: "Building on this foundation of operational rigor, my unique value lies in the ability to integrate the versatility of IoT to bring intelligence to conventional infrastructure, designing bespoke solutions for scenarios where standard tools fall short.",
        },
        education: {
            title: "Academic Education",
            items: {
                uc3m: {
                    degree: "Master's in E-commerce",
                    institution: 'University "Carlos III de Madrid"'
                },
                uah: {
                    degree: "Computer Engineering",
                    institution: 'University "Alejandro de Humboldt"'
                },
                iunp: {
                    degree: "Advanced Technician in Computing",
                    institution: 'University Institute of "Nuevas Profesiones"'
                },
            }
        },
        services: {
            title: "IT Infrastructure & Operations Consultant",
            items: {
                networks: {
                    title: "Technical Architecture",
                    tag: '"High-Performance Infrastructure"',
                    description: "I design and deploy low-latency <strong>LAN networks</strong>, overseeing everything from <strong>structured cabling</strong> to <strong>specialized electrical installations</strong>. If the hardware lacks a solid foundation, the software cannot shine."
                },
                systems: {
                    title: "Process Continuity",
                    tag: '"Critical Operations"',
                    description: "I manage <strong>GNU/Linux</strong> environments and oversee the full lifecycle of your <strong>digital assets</strong>. My expertise lies in <strong>Tier 2 and 3 incident resolution</strong>, ensuring your services remain available when they are needed most."
                },
                security: {
                    title: "Ecosystem Shielding",
                    tag: '"Cybersecurity & Resilience"',
                    description: "I do more than just implement <strong>perimeter security</strong>; I perform post-incident <strong>forensic analysis</strong> to close gaps and mitigate real-world vulnerabilities through both preventive and reactive approaches."
                }
            }
        },
        projects: {
            title: "Web Development",
            items: {
                resume: {
                    title: "Curriculum",
                    description: "Digital CV: Harvard style, ATS-friendly, multilingual, JS."
                },
                portfolio: {
                    title: "Portfolio",
                    description: "Online portfolio for an IT Professional."
                }
            },
        },
        contact: {
            title: "Contact",
            promo1: "Do you need an Information Technology specialist for your next project?",
            promo2: "I invite you to complete the form. I will contact you shortly to arrange an interview.",
            form: {
                name: {
                    label: "Name",
                    placeholder: "Full name.",
                    errors: {
                        valueMissing: "The name cannot be empty.",
                        patternMismatch: "The name cannot contain only spaces."
                    }
                },
                email: {
                    label: "e-mail",
                    placeholder: "Email address.",
                    errors: {
                        valueMissing: "The e-mail cannot be empty.",
                        typeMismatch: "Please enter a valid e-mail address."
                    }
                },
                subject: {
                    label: "Subject",
                    placeholder: "Reason for your contact.",
                    errors: {
                        valueMissing: "The subject cannot be empty.",
                        patternMismatch: "The subject cannot contain only spaces."
                    }
                },
                message: {
                    label: "Message",
                    placeholder: "Write your message...",
                    errors: {
                        valueMissing: "The message cannot be empty.",
                        customError: "The message cannot contain only spaces."
                    }
                },
                submit: "Send to WhatsApp"
            }
        },
        footer: {
            copyRight: `${author} All rights reserved.`
        }
    }
}