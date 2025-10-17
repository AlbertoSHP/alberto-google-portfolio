import type { CV } from "./interfaces";

export const CVData: CV = {
    personalData: {
        name: "Alberto Sánchez-Heredero Pérez",
        title: "Senior Frontend Developer",
        linkedin: "https://www.linkedin.com/in/alberto-s%C3%A1nchez-heredero-p%C3%A9rez-43698337/",
        github: "https://github.com/AlbertoSHP"
    },
    experiences: [
        {
            id: 1,
            company: "one.O Otto Group",
            position: "Senior Frontend Developer",
            startDate: new Date("2020-01-01"),
            endDate: null,
            description: "Development of web applications for Hermes GmbH using React, Mobx, Redux, TypeScript, and Material-UI styled components. Collaboration with cross-functional teams to deliver high-quality Logistics products.",
            keywords: ["React", "TypeScript", "Vue", "Material-UI", "Redux", "Mobx", "Frontend", "JavaScript", "CSS3", "HTML5","one.O","Logistics","Otto Group", "Fullstack", "Scrum", "Vite", "Vitest", "Jest", "Logistics", "RESTful APIs"],
            imageSrc: "/companies/oneO.svg",
            url: "https://www.og1o.com/",
            skillIds: [2, 3, 20, 19, 21, 5, 6, 10, 8, 9, 11, 25, 32],
            projectsIds: [3, 2, 1],
            label: "oneO"
        },
        {
            id: 2,
            company: "Accelya Group",
            position: "Senior Software Engineer",
            startDate: new Date("2019-11-01"),
            endDate: new Date("2021-01-01"),
            description: "Involved in the development of a web-based platform for airline industry clients using Angular and Spring Boot.",
            keywords: ["Angular", "TypeScript", "Spring Boot", "Postgres", "Java", "Frontend", "Backend", "JavaScript", "CSS3", "HTML5","Accelya","Airline", "Scrum", "JUnit", "Mockito", "Swagger", "RESTful APIs"],
            imageSrc: "/companies/accelya.svg",
            url: "https://w3.accelya.com/",
            skillIds: [1, 4, 5, 6, 7,12, 13, 14, 15, 16, 11, 32],
            projectsIds: [4],
            label: "Accelya"
        },
        {
            id: 3,
            company: "Alten Spain",
            position: "Java Analyst Developer",
            startDate: new Date("2018-05-01"),
            endDate: new Date("2019-11-01"),
            description: "Involved in the development of Java-based applications and services for DIA.",
            keywords: ["Java", "Spring Boot", "Backend","JPA", "Hibernate", "Oracle", "SQL", "Alten", "DIA", "Scrum", "Mockito", "JUnit", "Swagger", "Logistics", "RESTful APIs"],
            imageSrc: "/companies/alten.svg",
            url: "https://www.alten.es/",
            skillIds: [1, 18, 7, 12, 14, 15, 16, 13, 11],
            projectsIds: [5],
            label: "Alten"
        },
        {
            id: 4,
            company: "CAS Training",
            position: "JAVA/JavaScript Analyst Developer",
            startDate: new Date("2017-02-01"),
            endDate: new Date("2018-05-01"),
            description: "Involved in the development of web applications using Java and JavaScript for Indra - Space Observation.",
            keywords: ["Java", "JavaScript", "HTML5", "CSS3", "Postgres", "Hibernate", "Frontend", "Backend", "SQL", "CAS Training", "Indra", "Space", "GWT", "OpenLayers", "RESTful APIs"],
            imageSrc: "/companies/cas.svg",
            url: "https://www.cas-training.com/",
            skillIds: [1, 5, 6, 7, 23, 24, 27, 29, 32],
            projectsIds: [6, 7],
            label: "CAS"
        },
        {
            id: 5,
            company: "Isdefe",
            position: "System Engineer",
            startDate: new Date("2014-07-02"),
            endDate: new Date("2017-01-01"),
            description: "Involved in the development of software solutions for the Ministry of Defense using Java and related technologies for Human Resources. Also involved in cybersecurity projects.",
            keywords: ["Java", "Hibernate", "MySQL", "Isdefe", "Ministry of Defense", "Swagger", "SQL Server", "VMware"],
            imageSrc: "/companies/isdefe.svg",
            url: "https://www.isdefe.es/",
            skillIds: [1, 14, 15, 16, 7, 28, 29],
            projectsIds: [8],
            label: "Isdefe"
        },
        {
            id: 6,
            company: "BBVA",
            position: "Sharepoint Developer",
            startDate: new Date("2013-07-01"),
            endDate: new Date("2014-07-01"),
            description: "Assisted in the development and maintenance of internal banking applications using Web technologies such as HTML5, JQuery, CSS3, JavaScript, Sharepoint model objects, CamlQuery.",
            keywords: ["HTML5", "JQuery", "CSS3", "JavaScript", "Sharepoint", "CamlQuery", "BBVA", "Banking"],
            imageSrc: "/companies/bbva.svg",
            url: "https://www.bbva.es/",
            skillIds: [5, 6, 7, 26, 27, 30, 32],
            projectsIds: [9],
            label: "BBVA"
        },
        {
            id: 7,
            company: "BBVA - Innovation Center",
            position: "Internship",
            startDate: new Date("2012-01-01"),
            endDate: new Date("2012-12-31"),
            description: "Monitoring the proper functioning of ATMs ABIL new generation, and working closely with NCR, one of the most important companies in maintaining technology product generating reports in Excel.",
            keywords: ["ATM", "NCR", "BBVA", "Banking"],
            imageSrc: "/companies/bbva.svg",
            url: "https://www.bbva.es/",
            skillIds: [31],
            projectsIds: [10],
            label: "BBVA-IC"
        }
    ],
    education: [
        {
            institution: "Universidad Carlos III de Madrid",
            title: "Ingeniería Técnica en Informática de Gestión",
            startDate: new Date("2005-01-01"),
            endDate: new Date("2010-12-31"),
            type: "degree",
            url: "https://www.uc3m.es/",
            keywords: ["Universidad Carlos III de Madrid", "UC3M", "Engineering", "Computer Science"],
            imageSrc: "/education/uc3m.png",
            label: "UC3M-degree1"
        },
        {
            institution: "Universidad Carlos III de Madrid",
            title: "Grado en Ingeniería Informática",
            startDate: new Date("2010-01-01"),
            endDate: new Date("2011-12-31"),
            type: "degree",
            url: "https://www.uc3m.es/",
            keywords: ["Universidad Carlos III de Madrid", "UC3M", "Engineering", "Computer Science"],
            imageSrc: "/education/uc3m.png",
            label: "UC3M-degree2"
        },
        {
            institution: "Grupo Atrium",
            title: "Advanced J2EE Development Master: Ajax, Spring-Hibernate, Ibatis, JSF's, Struts 2 and Agile Methodologies",
            startDate: new Date("2012-01-01"),
            endDate: new Date("2012-12-31"),
            type: "master",
            url: "https://www.grupoatrium.com/",
            keywords: ["Grupo Atrium", "Master", "Java", "J2EE", "Spring", "Hibernate", "Agile", "Scrum"],
            imageSrc: "/education/grupo-atrium.png",
            label: "Atrium"
        },
        {
            institution: "Udemy",
            title: "React: from zero to expert",
            startDate: new Date("2023-01-01"),
            endDate: new Date("2024-12-31"),
            type: "course",
            url: "https://www.udemy.com/",
            keywords: ["Udemy", "React", "TypeScript", "Frontend", "Hooks", "Vite", "Vitest", "Jest"],
            imageSrc: "/education/udemy.webp",
            label: "Udemy-beginner"
        },
        {
            institution: "Udemy",
            title: "React PRO: advanced React course",
            startDate: new Date("2024-01-01"),
            endDate: new Date("2025-12-31"),
            type: "course",
            url: "https://www.udemy.com/",
            keywords: ["Udemy", "React", "TypeScript", "Frontend", "Hooks", "Vite", "Vitest", "Jest", "Functional Components", ],
            imageSrc: "/education/udemy.webp",
            label: "Udemy-pro"
        },
        {
            institution: "Udemy",
            title: "SOLID principles and Clean Code",
            startDate: new Date("2025-01-01"),
            endDate: new Date("2025-12-31"),
            type: "course",
            url: "https://www.udemy.com/",
            keywords: ["Udemy", "SOLID", "Clean Code", "Best Practices", "Software Development"],
            imageSrc: "/education/udemy.webp",
            label: "Udemy-clean"
        }
    ],
    skills: [
        {
            id: 1,
            name: "Java",
            level: "intermediate",
            keywords: ["Java", "J2EE", "Spring Boot"],
            imageSrc: "/skills/java.png",
            type: "backend",
            label: "Java"
        },
        {
            id: 2,
            name: "TypeScript",
            level: "advanced",
            keywords: ["TypeScript", "JavaScript", "ES6"],
            imageSrc: "/skills/typescript.svg",
            type: "frontend",
            label: "TypeScript"
        },
        {
            id: 3,
            name: "React",
            level: "advanced",
            keywords: ["React", "Redux", "Mobx", "Hooks", "Vite", "Vitest", "Jest"],
            imageSrc: "/skills/react.png",
            type: "frontend",
            label: "React"

        },
        {
            id: 4,
            name: "Angular",
            level: "intermediate",
            keywords: ["Angular", "RxJS", "NgRx"],
            imageSrc: "/skills/angular.png",
            type: "frontend",
            label: "Angular"
        },
        {
            id: 5,
            name: "HTML5",
            level: "expert",
            keywords: ["HTML5", "Web"],
            imageSrc: "/skills/html5.webp",
            type: "frontend",
            label: "HTML5"
        },
        {
            id: 6,
            name: "CSS3",
            level: "expert",
            keywords: ["CSS3", "SASS", "Styled Components", "Material-UI"],
            imageSrc: "/skills/css3.svg",
            type: "frontend",
            label: "CSS3"
        },
        {
            id: 7,
            name: "SQL",
            level: "intermediate",
            keywords: ["SQL", "Postgres", "MySQL", "Oracle", "SQL Server"],
            imageSrc: "/skills/sql.png",
            type: "backend",
            label: "SQL"
        },
        {
            id: 8,
            name: "Vite",
            level: "intermediate",
            keywords: ["Vite", "Frontend", "Build Tools"],
            imageSrc: "/skills/vite.svg",
            type: "frontend",
            label: "Vite"
        },
        {
            id: 9,
            name: "Vitest",
            level: "intermediate",
            keywords: ["Vitest", "Testing", "Unit Testing"],
            imageSrc: "/skills/vitest.svg",
            type: "frontend",
            label: "Vitest"
        },
        {
            id: 10,
            name: "Jest",
            level: "intermediate",
            keywords: ["Jest", "Testing", "Unit Testing"],
            imageSrc: "/skills/jest.svg",
            type: "frontend",
            label: "Jest"
        },
        {
            id: 11,
            name: "Git",
            level: "advanced",
            keywords: ["Git", "Version Control"],
            imageSrc: "/skills/git.png",
            type: "fullstack",
            label: "Git"
        },
        {
            id: 12,
            name: "Scrum",
            level: "intermediate",
            keywords: ["Agile", "Scrum", "Kanban"],
            imageSrc: "/skills/scrum.png",
            type: "other",
            label: "Scrum"
        },
        {
            id: 13,
            name: "RESTful APIs",
            level: "advanced",
            keywords: ["REST", "APIs", "Backend"],
            imageSrc: "/skills/api_rest.png",
            type: "other",
            label: "RESTful"
        },
        {
            id: 14,
            name: "JUnit",
            level: "intermediate",
            keywords: ["JUnit", "Testing", "Unit Testing"],
            imageSrc: "/skills/junit.png",
            type: "backend",
            label: "JUnit"
        },
        {
            id: 15,
            name: "Mockito",
            level: "intermediate",
            keywords: ["Mockito", "Testing", "Unit Testing"],
            imageSrc: "/skills/mockito.png",
            type: "backend",
            label: "Mockito"
        },
        {
            id: 16,
            name: "Swagger",
            level: "intermediate",
            keywords: ["Swagger", "API Documentation"],
            imageSrc: "/skills/swagger.png",
            type: "backend",
            label: "Swagger"
        },
        {
            id: 17,
            name: "Python",
            level: "beginner",
            keywords: ["Python", "Scripting"],
            imageSrc: "/skills/python.png",
            type: "fullstack",
            label: "Python"
        },
        {
            id: 18,
            name: "Spring Boot",
            level: "intermediate",
            keywords: ["Spring Boot", "Java", "Backend"],
            imageSrc: "/skills/spring-boot.svg",
            type: "backend",
            label: "SpringBoot"
        },
        {
            id: 19,
            name: "Mobx",
            level: "intermediate",
            keywords: ["Mobx", "State Management", "React"],
            imageSrc: "/skills/mobx.png",
            type: "frontend",
            label: "Mobx"
        },
        {
            id: 20,
            name: "Redux",
            level: "intermediate",
            keywords: ["Redux", "State Management", "React"],
            imageSrc: "/skills/redux.png",
            type: "frontend",
            label: "Redux"
        },
        {
            id: 21,
            name: "Material-UI",
            level: "intermediate",
            keywords: ["Material-UI", "React", "UI Components"],
            imageSrc: "/skills/material-ui.png",
            type: "frontend",
            label: "MUI"
        },
        {
            id: 22,
            name: "SonarQube",
            level: "beginner",
            keywords: ["SonarQube", "Code Quality", "Static Analysis"],
            imageSrc: "/skills/sonarqube.svg",
            type: "devops",
            label: "SonarQube"
        },
        {
            id: 23,
            name: "Google Web Toolkit",
            level: "beginner",
            keywords: ["GWT", "Web Development"],
            imageSrc: "/skills/gwt.png",
            type: "frontend",
            label: "GWT"
        },
        {
            id: 24,
            name: "OpenLayers",
            level: "beginner",
            keywords: ["OpenLayers", "Geographic Data", "Mapping"],
            imageSrc: "/skills/openlayers.png",
            type: "frontend",
            label: "OpenLayers"
        },
        {
            id: 25,
            name: "Vue",
            level: "beginner",
            keywords: ["Vue", "Frontend", "JavaScript"],
            imageSrc: "/skills/vue.png",
            type: "frontend",
            label: "Vue"
        },
        {
            id: 26,
            name: "Sharepoint",
            level: "beginner",
            keywords: ["Sharepoint", "Web Development"],
            imageSrc: "/skills/sharepoint.webp",
            type: "fullstack",
            label: "Sharepoint"
        },
        {
            id: 27,
            name: "JQuery",
            level: "intermediate",
            keywords: ["JQuery", "JavaScript", "Frontend"],
            imageSrc: "/skills/jquery.gif",
            type: "frontend",
            label: "JQuery"
        },
        {
            id: 28,
            name: "VMWare",
            level: "beginner",
            keywords: ["VMWare", "Virtualization"],
            imageSrc: "/skills/vmware.png",
            type: "devops",
            label: "VMWare"
        },
        {
            id: 29,
            name: "Hibernate",
            level: "intermediate",
            keywords: ["Hibernate", "Java", "ORM"],
            imageSrc: "/skills/hibernate.png",
            type: "backend",
            label: "Hibernate"
        },
        {
            id: 30,
            name: "CamlQuery",
            level: "beginner",
            keywords: ["CamlQuery", "SharePoint", "Query"],
            imageSrc: "/skills/camlquery.webp",
            type: "frontend",
            label: "CamlQuery"
        },
        {
            id: 31,
            name: "Excel",
            level: "intermediate",
            keywords: ["Excel", "Spreadsheets", "Reports"],
            imageSrc: "/skills/excel.webp",
            type: "other",
            label: "Excel"
        },
        {
            id: 32,
            name: "Javascript",
            level: "advanced",
            keywords: ["JavaScript", "ES6", "Frontend"],
            imageSrc: "/skills/JS.png",
            type: "frontend",
            label: "JavaScript"
        }
    ],
    projects: [
        {
            id: 1,
            companyId: 1,
            name: "Hermes Digital Transformation projects",
            description: "Involvement in various digital transformation projects for Hermes GmbH, focusing on improving logistics and delivery processes.",
            keywords: ["Digital Transformation", "Logistics", "Hermes GmbH", "E-commerce", "React", "TypeScript", "Frontend", "JavaScript", "CSS3", "HTML5","one.O","Otto Group", "Scrum", "RESTful APIs", "Vite", "Vitest", "Jest", "Mobx"],
            label: "Hermes",
            imageSrc: "/companies/hermes.png"
        },
        {
            id: 2,
            companyId: 1,
            name: "Otto Liveshopping Platform",
            description: "Development of a live shopping platform using React, TypeScript, and Material-UI.",
            url: "https://advertising.otto.de/live-shopping/",
            keywords: ["React", "TypeScript", "Material-UI", "one.O", "Otto Group", "E-commerce", "Live Shopping", "Frontend", "JavaScript", "CSS3", "HTML5", "Scrum"],
            label: "Otto",
            imageSrc: "/companies/oneO.svg"
        },
        {
            id: 3,
            companyId: 1,
            name: "Developing solutions for E-commerce logistics",
            description: "Development of web applications using React, Mobx, Redux, TypeScript, and Material-UI styled components. Collaboration with cross-functional teams to deliver high-quality Logistics products.",
            keywords: ["Vue", "TypeScript", "Frontend", "JavaScript", "CSS3", "HTML5","one.O","E-commerce","Otto Group", "Fullstack", "Scrum", "RESTful APIs"],
            label: "E-commerce",
            imageSrc: "/companies/oneO.svg"
        },
        {
            id: 4,
            companyId: 2,
            name: "Airline Industry Platform",
            description: "Development of a web-based platform for airline industry clients using Angular and Spring Boot.",
            keywords: ["Angular", "TypeScript", "Spring Boot", "Postgres", "Java", "Frontend", "Backend", "JavaScript", "CSS3", "HTML5","Accelya","Airline", "Scrum", "JUnit", "Mockito", "Swagger", "RESTful APIs"],
            label: "Airline",
            imageSrc: "/companies/accelya.svg"
        },
        {
            id: 5,
            companyId: 3,
            name: "Digital transformation for Industry sector company DIA",
            description: "Development of a web-based platform for managing inventory, orders, and customer data using Java and Spring Boot.",
            keywords: ["Java", "Spring Boot", "Backend","JPA", "Hibernate", "Oracle", "SQL", "Alten", "DIA", "Logistics", "Scrum", "JUnit", "Mockito", "Swagger", "RESTful APIs"],
            label: "DIA",
            imageSrc: "/companies/dia.png"
        },
        {
            id: 6,
            companyId: 4,
            name: "USP Project and Space Observation",
            description: "Project at Indra: Web Service Platform for acquisition, cataloguing, production and dissemination of satellite images: PAZ, TS-X, Ingenio.",
            keywords: ["Indra", "Cas", "Google Web Toolkit", "Java", "HTML5", "CSS3", "Postgres", "Hibernate", "Frontend", "Backend", "SQL", "Space", "GWT", "OpenLayers", "RESTful APIs"],
            label: "IndraEspacio",
            imageSrc: "/companies/indra.png"
        },
        {
            id: 7,
            companyId: 4,
            name: "Instituto Geográfico Nacional",
            description: "Project at Indra: A web application for managing and visualizing geographic data, developed using JavaScript, HTML5, and CSS3.",
            keywords: ["JavaScript", "HTML5", "CSS3", "Indra", "Geographic Data", "OpenLayers"],
            label: "Indra",
            imageSrc: "/companies/indra.png"
        },
        {
            id: 8,
            companyId: 5,
            name: "Human Resources Management System",
            description: "A Java-based system for managing human resources, including employee records, payroll, and performance evaluations.",
            keywords: ["Java", "Hibernate", "MySQL", "Isdefe", "Ministry of Defense"],
            label: "HR",
            imageSrc: "/companies/isdefe.svg"
        },
        {
            id: 9,
            companyId: 6,
            name: "Economic capital calculator",
            description: "A web application for calculating the economic capital of financial products, developed using HTML5, JQuery, CSS3, and JavaScript in SharePoint.",
            keywords: ["HTML5", "JQuery", "CSS3", "JavaScript", "SharePoint", "BBVA", "Banking"],
            label: "BBVA",
            imageSrc: "/companies/bbva.svg"
        },
        {
            id: 10,
            companyId: 7,
            name: "Monitoring the proper functioning of ATMs ABIL new generation",
            description: "Monitoring the proper functioning of ATMs ABIL new generation, and working closely with NCR, one of the most important companies in maintaining technology product.",
            keywords: ["ATM", "NCR", "BBVA - Innovation Center", "Banking"],
            label: "BBVA-IC",
            imageSrc: "/companies/bbva.svg"
        },
    ]
}