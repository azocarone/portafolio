const author = `&copy; 2022-${new Date().getFullYear()} José Antonio Azócar Marcano.`;

export const Content = {
    es: {
        nav: {
            title: "Portafolio",
            about: "Perfil",
            services: "Servicios",
            education: "Educación",
            projects: "Proyectos",
            contact: "Contacto",
        },
        profile: {
            title: "Ing. en Informática | Especialista en Agentes de IA, Cloud & Automatización",
            linkTitle: "Haga clic para ver Currículum"
        },
        about: {
            title: "Perfil Profesional",
            description: `
                <p>¡Hola! 👋 Bienvenido a mi espacio digital. Soy Ingeniero en Informática con una visión integral que une la ingeniería de software clásica con las tecnologías más disruptivas de la actualidad.</p>
                <p>Tras años fortaleciendo mis competencias en desarrollo, bases de datos y entornos cloud, mi enfoque principal se centra en la <strong><em>Inteligencia Artificial y la Automatización Avanzada</em></strong>. Como profesional certificado por Oracle, hoy diseño ecosistemas multiagente con LangGraph, integro modelos de lenguaje con LangChain y optimizo flujos operativos complejos utilizando n8n y arquitecturas RAG.</p>
                <p>Si buscas automatizar procesos, escalar operaciones o potenciar la toma de decisiones con tecnología de punta, estás en el lugar indicado. ¡Me encantará conectar contigo y construir grandes soluciones!</p>
            `
        },
        services: {
            title: "Servicios & Especialidades",
            sub1: {
                title: "Inteligencia Artificial & Automatización Avanzada",
                items: {
                    agents: {
                        title: "Sistemas Multiagente",
                        tag: '"Autonomía inteligente"',
                        description: "Diseño e implementación de sistemas multiagente avanzados con LangGraph que simulan flujos de trabajo colaborativos, optimizando la toma de decisiones complejas y reduciendo la intervención manual en procesos de negocio."
                    },
                    generative: {
                        title: "Arquitectura RAG",
                        tag: '"Conocimiento conectado"',
                        description: "Orquestación de Grandes Modelos de Lenguaje (LLMs) mediante LangChain y despliegue de arquitecturas RAG, conectando los datos internos de tu organización con respuestas precisas, contextuales y en tiempo real."
                    },
                    automation: {
                        title: "Workflows Inteligentes",
                        tag: '"Sincronización continua"',
                        description: "Automatización integral de procesos operativos y sincronización de plataformas mediante n8n, enlazando bases de datos, APIs y sistemas corporativos para acelerar la productividad y eliminar fricciones operativas."
                    }
                }
            },
            sub2: {
                title: "Infraestructura & Operaciones IT",
                items: {
                    networks: {
                        title: "Ingeniería de Redes",
                        tag: '"Observabilidad total"',
                        description: "Diseño e implemento redes LAN y cableado estructurado de baja latencia bajo normas técnicas, integrando monitoreo continuo para asegurar la transmisión fluida y segura de tus flujos de datos estratégicos."
                    },
                    systems: {
                        title: "Administración de Sistemas",
                        tag: '"Eficiencia integrada"',
                        description: "Optimizo la estabilidad de tus servidores Linux, sistemas ERP e integración de datos, conectando la infraestructura tecnológica con la eficiencia del negocio para acelerar la toma de decisiones."
                    },
                    security: {
                        title: "Ciberseguridad Perimetral",
                        tag: '"Disponibilidad 24/7"',
                        description: "Aseguro la continuidad operativa de tu negocio mediante análisis forense, seguridad perimetral y gestión de accesos (IAM), blindando la infraestructura y resolviendo incidentes críticos para garantizar un entorno 100% disponible."
                    }
                }
            }
        },
        education: {
            title: "Educación Académica & Certificaciones",
            items: {
                uc3m: {
                    degree: "Máster en Comercio Electrónico",
                    institution: 'Universidad "Carlos III de Madrid"'
                },
                uah: {
                    degree: "Ingeniero en Informática",
                    institution: 'Universidad "Alejandro de Humboldt"' 
                },
                iunp: {
                    degree: "TSU en Computación",
                    institution: 'Instituto Universitario de "Nuevas Profesiones"'
                },
                oracle: {
                    degree: "OCI AI Foundations Associate",
                    institution: 'Universidad de Oracle'
                }
            }
        },
        projects: {
            title: "Proyectos & Soluciones",
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
                <p>🤝 <em>¿Interesado en conectar o explorar oportunidades de colaboración en IA, Cloud Computing o transformación digital? ¡Escríbeme y conversemos!</em></p>
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
            services: "Services",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
        },
        profile: {
            title: "Computer Engineer | AI Agent Engineering, Cloud & Automation Specialist",
            linkTitle: "Click to view Résumé"
        },
        about: {
            title: "Professional profile",
            description: `
                <p>Hello! 👋 Welcome to my digital space. I am a Computer Engineer with a comprehensive vision that bridges traditional software engineering with today's most disruptive technologies.</p>
                <p>After years of strengthening my skills in development, databases, and cloud environments, my main focus centers on <strong><em>Artificial Intelligence and Advanced Automation</em></strong>. As an Oracle-certified professional, I currently design multi-agent ecosystems with LangGraph, integrate language models using LangChain, and optimize complex operational workflows using n8n and RAG architectures.</p>
                <p>If you are looking to automate processes, scale operations, or enhance decision-making with cutting-edge technology, you are in the right place. I’d love to connect with you and build great solutions together!</p>
            `
        },
        services: {
            title: "Services & Specialties",
            sub1: {
                title: "AI & Advanced Automation",
                items: {
                    agents: {
                        title: "Multi-Agent Systems",
                        tag: '"Intelligent autonomy"',
                        description: "Design and implementation of advanced multi-agent systems using LangGraph that simulate collaborative workflows, optimizing complex decision-making and minimizing manual intervention in business processes."
                    },
                    generative: {
                        title: "RAG Architecture",
                        tag: '"Connected knowledge"',
                        description: "Orchestration of Large Language Models (LLMs) via LangChain and deployment of RAG architectures, connecting your organization's internal data with precise, contextual, and real-time responses."
                    },
                    automation: {
                        title: "Intelligent Workflows",
                        tag: '"Continuous synchronization"',
                        description: "End-to-end automation of operational processes and platform synchronization using n8n, linking databases, APIs, and enterprise systems to accelerate productivity and eliminate operational friction."
                    }
                }
            },
            sub2: {
                title: "IT Infrastructure & Operations",
                items: {
                    networks: {
                        title: "Network Engineering",
                        tag: '"Total observability"',
                        description: "Design and implementation of low-latency LAN networks and structured cabling under technical standards, integrating continuous monitoring to ensure the smooth and secure transmission of your strategic data flows."
                    },
                    systems: {
                        title: "Systems Administration",
                        tag: '"Integrated efficiency"',
                        description: "Optimization of Linux server stability, ERP systems, and data integration, connecting technological infrastructure with business efficiency to accelerate decision-making."
                    },
                    security: {
                        title: "Perimeter Cybersecurity",
                        tag: '"24/7 Availability"',
                        description: "Ensuring business operational continuity through forensic analysis, perimeter security, and Identity and Access Management (IAM), hardening infrastructure and resolving critical incidents to guarantee a 100% available environment."
                    }
                }
            }
        },       
        education: {
            title: "Academic Education & Certifications",
            items: {
                uc3m: {
                    degree: "Master's in E-commerce",
                    institution: 'University "Carlos III de Madrid"'
                },
                uah: {
                    degree: "B.S. in Computer Engineering",
                    institution: 'University "Alejandro de Humboldt"'
                },
                iunp: {
                    degree: "A.S. in Computer Technology",
                    institution: 'University Institute of "Nuevas Profesiones"'
                },
                oracle: {
                    degree: "OCI AI Foundations Associate",
                    institution: 'Oracle University'
                }
            }
        },
        projects: {
            title: "Projects & Solutions",
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
                <p>🤝 <em>Interested in connecting or collaborating on AI Engineering, Cloud Computing, or Digital Transformation projects? Let's connect!</em></p>
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