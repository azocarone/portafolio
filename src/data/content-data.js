const author = `&copy; 2022-${new Date().getFullYear()} José Antonio Azócar Marcano.`;

export const Content = {
    es: {
        nav: {
            title: "Portafolio",
            about: "Perfil",
            education: "Formación",
            services: "Consultoría",
            projects: "Proyectos",
            contact: "Contacto",
        },
        profile: {
            title: "Ing. Informático | Consultor I&O: Infraestructura y Ops.",
            linkTitle: "Haga clic para ver Currículum"
        },
        about: {
            title: "Perfil Profesional",
            description: `
                <p>¡Hola! 👋 Soy <strong>Profesional de Tecnología de la Información y Sistemas</strong>, apasionado por garantizar la continuidad operativa, la estabilidad de la infraestructura de TI y la optimización de procesos a través de soluciones tecnológicas.</p>
                <p>A lo largo de mi trayectoria, me he enfocado en liderar la disponibilidad 24/7 de entornos tecnológicos críticos, administrando sistemas ERP, redes y flujos de datos para asegurar que la información estratégica fluya de manera segura e ininterrumpida.</p>
                <p>🚀 <strong>Mis principales fortalezas incluyen:</strong></p>
                <ul class="about__list">
                    <li><strong>Infraestructura y Redes:</strong> Supervisión y mantenimiento de redes, seguridad de redes, monitoreo de plataformas y observabilidad de sistemas.</li>
                    <li><strong>Sistemas ERP e Integración de Datos:</strong> Administración y parametrización de sistemas ERP, flujos de datos (<em>data pipelines</em>), procesos ETL e integración de APIs.</li>
                    <li><strong>Gestión de Operaciones y Seguridad:</strong> Implementación de buenas prácticas de seguridad, gestión de accesos (IAM) y soporte técnico a dispositivos en campo.</li>
                    <li><strong>Gestión de Proyectos y Personas:</strong> Coordinación con partes interesadas (<em>stakeholders</em>), adaptabilidad al cambio y comunicación efectiva con equipos multidisciplinarios.</li>
                </ul>
                <p>Me enfoco en conectar la tecnología con la eficiencia operativa del negocio. Si buscas optimizar la infraestructura de TI o implementar proyectos de integración de sistemas, ¡estemos en contacto! 📩</p>
            `
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
            title: "Consultor de Infraestructura & Operaciones IT",
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
            title: "Soluciones & Proyectos",
            items: {
                resume: {
                    title: "Currículum",
                    description: "CV digital: Estilo Harvard, compatible ATS, multilingüe, JS."
                },
                portfolio: {
                    title: "Portafolio",
                    description: "Vitrina online - Profesional IT."
                }
            },
        },
        contact: {
            title: "Contacto",
            promo: `
                <p><em>¿Necesita un especialista en Tecnologías de la Información para su próximo proyecto?</em></p>
                <p><em>Le invito a completar el formulario. A la brevedad, me comunicaré con usted para concertar una entrevista.</em></p>
            `,
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
            projects: "Projects",
            contact: "Contact",
        },
        profile: {
            title: "Computer Engineer | I&O Consultant: Infrastructure & Ops.",
            linkTitle: "Click to view Résumé"
        },
        about: {
            title: "Professional profile",
            description: `
                <p>Hi! 👋 I am an <strong>Information Technology and Systems Professional</strong>, passionate about ensuring operational continuity, IT infrastructure stability, and process optimization through technology solutions.</p>
                <p>Throughout my career, I have focused on leading 24/7 availability for critical technology environments, managing ERP systems, networks, and data flows to ensure strategic information flows securely and uninterruptedly.</p>
                <p>🚀 <strong>Key Strengths & Competencies:</strong></p>
                <ul class="about__list">
                    <li><strong>Infrastructure & Networking:</strong> Network supervision and maintenance, network security, platform monitoring, and system observability.</li>
                    <li><strong>ERP Systems & Data Integration:</strong> ERP administration and parameterization, data pipelines, ETL processes, and API integrations.</li>
                    <li><strong>Operations & Security Management:</strong> Security best practices implementation, Identity and Access Management (IAM), and technical support for field devices.</li>
                    <li><strong>Project & Team Leadership:</strong> Stakeholder management, adaptability to change, and effective communication with multidisciplinary teams.</li>
                </ul>
                <p>I focus on aligning technology with business operational efficiency. If you are looking to optimize your IT infrastructure or implement system integration projects, let's connect! 📩</p>
            `
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
            title: "Solutions & Projects",
            items: {
                resume: {
                    title: "Curriculum",
                    description: "Digital CV: Harvard style, ATS-friendly, multilingual, JS."
                },
                portfolio: {
                    title: "Portfolio",
                    description: "Online showcase - IT Professional."
                }
            },
        },
        contact: {
            title: "Contact",
            promo: `
                <p><em>Do you need an Information Technology specialist for your next project?</em></p>
                <p><em>I invite you to complete the form. I will contact you shortly to arrange an interview.</em></p>
            `,
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