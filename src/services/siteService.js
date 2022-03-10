const site = {
    BR: {
        information: [
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-envelope-o',
                title: 'E-mail',
                content: 'ricardo.tecnology@gmail.com',
                link: 'mailto:ricardo.tecnology@gmail.com'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-phone',
                title: 'Telefone',
                content: '+55 (11) 992494597',
                link: 'tel:5511992494597'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-map-marker',
                title: 'Localização',
                content: 'Brasil, São Paulo',
                link: 'https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6815314,-46.8754974,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571'
            },
    
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-linkedin-square',
                title: 'Linkedin',
                content: '',
                link: 'https://www.linkedin.com/in/ricardo-souza-web-dev/'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-github',
                title: 'Github',
                content: '',
                link: 'https://github.com/ricardowebdev'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-whatsapp',
                title: 'WhatsApp',
                content: '',
                link: 'https://api.whatsapp.com/send?phone=5511992494597&text=Ol%C3%A1%20Ricardo%20estive%20em%20seu%20site%20e%20gostaria%20de%20conversar%20contigo'
            },
        ],
        menu: [
            { label: "Habilidades",  link: '#skills' },
            { label: "Experiências", link: '#experiences' },
            { label: "Formação",     link: '#formation' }
        ],
        about: {
            title: "Sobre",
            content: "Solteiro, 31 anos sou apaixonado por tecnologia. Atuo a mais de 10 anos com TI sendo 7 anos como programador. Tenho como objetivo atual a busca por uma oportunidade de emprego no exterior seja remota ou presencial. Como Hobbies amo viagens, filmes, series, video games, ciclismo e sempre que possível se reunir com os amigos e ter divertidas conversas."
        },
        competences: [
            { title: "PHP", level: 4 },
            { title: "JavaScript", level: 4 },
            { title: "Mysql", level: 4 },
            { title: "Linux", level: 3 },
            { title: "Devops", level: 2 },
            { title: "Laravel", level: 3 },
            { title: "React", level: 3 },
            { title: "Angular", level: 3 },
            { title: "NodeJS", level: 3 },
            { title: "Agile", level: 3 },
            { title: "Inglês", level: 4 },
            { title: "Frances", level: 2 },
            
        ],
        experiences: [
            {
                title: "Desenvolvedor Full Stack Senior",
                company: "Movida Aluguel de carros",
                duration: "Duração: 3 anos e 1 mês",
                location: "São Paulo, Brasil",
                description: "Atuava com o desenvolvimento Backend e frontend da squad seminovos com as Stacks (Angular / PHP - Lumen e sistemas legados). Desenvolvendo integrações com parceiros, novas features e ou projetos. Era o desenvolvedor com mais tempo de experiência na empresa, dessa forma eu atuava parcialmente como Coordenador/Techleader, Orientando a equipe com as tomadas de decisões e também realizava o planejamento de novas features ou orientava na  delegação de tarefas entre os membros e sempre que possível tirando duvidas / realizando code review.  Era responsável pelo acompanhamento das implementações das tasks no periodo noturno por validar a parte técnica e indiretamente responsável pela criação dos ambientes de testes da squad."
            },
            {
                title: "Desenvolvedor Full Stack",
                company: "Pravaler",
                duration: "Duração: 8 meses",
                location: "São Paulo, Brasil",
                description: "Desenvolvimento e manutenção de sistemas sejam eles legados ou novos. Ajudei na definição de quebra de microserviços para a reescrita de sistemas da empresa. As principais stacks que eram utilizadas estavam divididas entre Angular no frontend e PHP Symfony no backend. Atuei a maior parte do tempo no front-end mas também auxiliei no backend con criação de um api-gateway e também definição de documentos em um banco nosql que iria armazenar informações parciais."
            },
            {
                title: "Programador PHP",
                company: "Tmontec",
                duration: "Duração: 7 meses",
                location: "Mauá, Brasil",
                description: "Manutenção de sistemas legados e desenvolvimento de novos sistemas utilizando algumas stacks diversificadas como Delphi, PHP, Angular, Jquery, Vue. Era responsável também pela sustentação de chamados e manutenção de servidores de testes.                "
            }
        ],
        formation: [
            {
                school: "Universidade nove de julho",
                course: "Tecnologia em banco de dados",
                duration: "01/2014 - 07/2016",
                description: "Conceitos de bancos de dados Relacionais, estruturas, relacionamentos, tunning, bancos de dados NOSql..."
            },
            {
                school: "4 Linux",
                course: "Formação Linux",
                duration: "04/2018 - 07/2018",
                description: "Comandos Básicos do terminal, permissionamento, introdução a redes, introdução a ShellScript, noções de auditoria e devops."
            },
            {
                school: "Udemy",
                course: "Angular / NodeJS",
                duration: "01/2019 - 07/2019",
                description: "ES6, Typescript, Estrutura dos frameworks, Componentes reutilizaveis, Requisições HTTP gerenciamento de estruturas de bancos de dados NOSql (MongoDB)"
            },

            {
                school: "4 Linux",
                course: "Infraestrutura Ágil",
                duration: "03/2020 - 04/2020",
                description: "Conceitos Devops usando diferentes ferramentas como: Docker, Git, Jenkins, Ansible"
            },
            {
                school: "CNA Idiomas",
                course: "Ingles",
                duration: "01/2009 - 07/2014",
                description: ""
            },
            {
                school: "Frances",
                course: "Aulas particulares de frances",
                duration: "03/2020 - até o momento",
                description: ""
            }
        ],
        portifolio: [
            {
                title: "Movendo rent a movie",
                description: "Um projeto que criei durante os meus estudos de react simulando um gerenciamento de uma locadora, foi construido com react no frontend e no backend php8 e laravel com mysql<br /> <b>Usuario:</b> admin@admin.com<br /> <b>Senha:</b> 123456",
                foto: "movendo",
                link: "https://movendo-frontend.herokuapp.com/login"
            },
            {
                title: "English Review",
                description: "Projeto que construi por estudos de webcomponents e também para auxiliar minha sobrinha nas aulas de ingles possibilitando revisar as palavras aprendidas, feito com apenas webcomponents com JS puro ",
                foto: "englishreview",
                link: "https://englishreview.netlify.app"
            },
            {
                title: "Meu github",
                description: "Um app construido com angular consumindo a api publica do github filtrando usuarios mostrando suas informações, mostrando seus repositorios, seguidores e mais algumas informações<br /> <b>Meu usuario para testes:</b> ricardowebdev<br />",
                foto: "github",
                link: "https://ricardowebdev-github.netlify.app"
            }            
        ],
        footer: {
            copyright: "@ 2022 Todos os direitos reservados por: Ricardo dos Santos Souza",
            links: [
                {
                    icon: "fa-linkedin-square",
                    link: "https://www.linkedin.com/in/ricardo-souza-web-dev",
                    alt: "Linkedin"
                },
                {
                    icon: "fa-github",
                    link: "https://www.linkedin.com/in/ricardo-souza-web-dev",
                    alt: "Github"
                },
                {
                    icon: "fa-envelope",
                    link: "mailto:ricardo.tecnology@gmail.com",
                    alt: "E-mail"
                },
                {
                    icon: "fa-whatsapp",
                    link: "https://api.whatsapp.com/send?phone=5511992494597&text=Ol%C3%A1%20Ricardo%20estive%20em%20seu%20site%20e%20gostaria%20de%20conversar%20contigo",
                    alt: "Whatsapp"
                }
            ]
        }
    },
    EN: {
        information: [
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-envelope-o',
                title: 'E-mail',
                content: 'ricardo.tecnology@gmail.com',
                link: 'mailto:ricardo.tecnology@gmail.com'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-phone',
                title: 'Phone',
                content: '+55 (11) 992494597',
                link: 'tel:5511992494597'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-map-marker',
                title: 'Location',
                content: 'Brazil, São Paulo',
                link: 'https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6815314,-46.8754974,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571'
            },
    
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-linkedin-square',
                title: 'Linkedin',
                content: '',
                link: 'https://www.linkedin.com/in/ricardo-souza-web-dev/'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-github',
                title: 'Github',
                content: '',
                link: 'https://github.com/ricardowebdev'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-whatsapp',
                title: 'WhatsApp',
                content: '',
                link: 'https://api.whatsapp.com/send?phone=5511992494597&text=Hey%20there%20Ricardo%2C%20i%20was%20in%20your%20website%20and%20i%20would%20like%20to%20talk%20to%20you'
            },
        ],
        menu: [
            { label: "Skills",      link: '#skills' },
            { label: "Experiences", link: '#experiences' },
            { label: "Formation",   link: '#formation' }
        ],
        about: {
            title: "About",
            content: "Single, 31 years old, Technology adicted. I work with IT about 10 years and 7 of them as a developer. In this year i put to myself the goal to travel abroad, probably to Canada and to look for a job oportunity outside Brazil, working from home officer or even presencial. On the other hand to my personal life i have a lot of hobbies that i would like to share like watching movies, series, videogames, cycling, travel and go out to have a nice chat with my friends whenever is possible."
        },
        competences: [
            { title: "PHP", level: 4 },
            { title: "JavaScript", level: 4 },
            { title: "Mysql", level: 4 },
            { title: "Linux", level: 3 },
            { title: "Devops", level: 2 },
            { title: "Laravel", level: 3 },
            { title: "React", level: 3 },
            { title: "Angular", level: 3 },
            { title: "NodeJS", level: 3 },
            { title: "Agile", level: 3 },
            { title: "English", level: 4 },
            { title: "French", level: 2 },
            
        ],
        experiences: [
            {
                title: "Full Stack Developer",
                company: "Movida Rent a car",
                duration: "Duration: 3 years and 1 month",
                location: "São Paulo, Brazil",
                description: "I worked as a fullstack developer from a team who is responsible for the used cars sales of the company, using the main stacks (Angular / PHP). I developed a lot of integrations with partners, new features or even new projects. For being the developer with more time at the company i started having more responsabilities, like being the TechLeader or even doing manager´s tasks sometimes. Helping the team with Technical orientation or even doubts about process and so on. I learned a lot with that, because it was my first experience with managing people, demanding tasks, reviewing them and also bein the responsible for validating the technical part of the tasks when it goes online. There were also sometimes  that i needed to create and manage development servers.                "
            },
            {
                title: "Full Stack Developer",
                company: "Pravaler",
                duration: "Duration: 8 months",
                location: "São Paulo, Brazil",
                description: "I´ve developed part of a new system who would replace the old one. Using the concept of microservices with the stacks PHP with symfony and Angular. I also were responsible for giving suport and maintenance to the old systems, I worked for the first time with the concept of agile development doing the ceremonies as daily, retro, review, planning and so on."
            },
            {
                title: "PHP Developer",
                company: "Tmontec",
                duration: "Duration: 7 months",
                location: "Mauá, Brazil",
                description: "Work here was a good chalenge there was a lot of work to do, in a small company with good co-workers i gave maintenance to old systems and developed new ones using diferents stacks as Delphi, PHP, Angular, Jquery, Vue. And sometimes giving suport to the customers also."
            }
        ],
        formation: [
            {
                school: "Universidade nove de julho",
                course: "Technology in Databases",
                duration: "01/2014 - 07/2016",
                description: "I´ve learned concepts of relationals databases, structures, relations, tunning, NoSql databases and so on."
            },
            {
                school: "4 Linux",
                course: "Linux formation",
                duration: "04/2018 - 07/2018",
                description: "Commands on terminal, permission, basics of networks in linux, basics of ShellScript,  Audit and devops concepts."
            },
            {
                school: "Udemy",
                course: "Angular / NodeJS",
                duration: "01/2019 - 07/2019",
                description: "ES6, Typescript, The frameworks structures, reusable Components, HTTP request, authentication, authorization, managing Nosql databases as mongoDB"
            },
            {
                school: "4 Linux",
                course: "Agile infrastructure",
                duration: "03/2020 - 04/2020",
                description: "Devops concepts using diferents tools like Docker, Git, Jenkins, Ansible"
            },
            {
                school: "CNA Idiomas",
                course: "English",
                duration: "01/2009 - 07/2014",
                description: ""
            },
            {
                school: "Private Classes",
                course: "French",
                duration: "03/2020 - until nowadays",
                description: ""
            }
        ],
        portifolio: [
            {
                title: "Movendo rent a movie",
                description: "I created this project to use my knowledge during my studies of react. It simulates the management of a movierental company, It was built with react in frontend and for backend i used php8, laravel with mysql database<br /> <b>User:</b> admin@admin.com<br /> <b>Password:</b> 123456",
                foto: "movendo",
                link: "https://movendo-frontend.herokuapp.com/login"
            },
            {
                title: "English Review",
                description: "This is a project that i built to study webcomponents with pure js and also to help my niece to remember the words used in our clases",
                foto: "englishreview",
                link: "https://englishreview.netlify.app"
            },
            {
                title: "Meu github",
                description: "A web app built with angular just as an example of an Angular project it consomes the official github api filtering users, showing their repositories and also the bio, followers and so on.<br /> <b>My user for test search for:</b> ricardowebdev<br />",
                foto: "github",
                link: "https://ricardowebdev-github.netlify.app"
            }            
        ],
        footer: {
            copyright: "@copyright 2022 All rights for: Ricardo dos Santos Souza",
            links: [
                {
                    icon: "fa-linkedin-square",
                    link: "https://www.linkedin.com/in/ricardo-souza-web-dev",
                    alt: "Linkedin"
                },
                {
                    icon: "fa-github",
                    link: "https://www.linkedin.com/in/ricardo-souza-web-dev",
                    alt: "Github"
                },
                {
                    icon: "fa-envelope",
                    link: "mailto:ricardo.tecnology@gmail.com",
                    alt: "E-mail"
                },
                {
                    icon: "fa-whatsapp",
                    link: "https://api.whatsapp.com/send?phone=5511992494597&text=Hey%20there%20Ricardo%2C%20i%20was%20in%20your%20website%20and%20i%20would%20like%20to%20talk%20to%20you",
                    alt: "Whatsapp"
                }
            ]
        }
    },
    FR: {
        information: [
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-envelope-o',
                title: 'Email',
                content: 'ricardo.tecnology@gmail.com',
                link: 'mailto:ricardo.tecnology@gmail.com'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-phone',
                title: 'Telephone',
                content: '+55 (11) 992494597',
                link: 'tel:5511992494597'
            },
            {
                classTitle: 'm-4 fs-14 mt-15 fc-primary',
                classIcon: 'fa-map-marker',
                title: 'Localization',
                content: 'Brésil, São Paulo',
                link: 'https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6815314,-46.8754974,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571'
            },
    
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-linkedin-square',
                title: 'Linkedin',
                content: '',
                link: 'https://www.linkedin.com/in/ricardo-souza-web-dev/'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-github',
                title: 'Github',
                content: '',
                link: 'https://github.com/ricardowebdev'
            },
            {
                classTitle: 'm-4 fs-16 mb-15 mt-15 fc-primary',
                classIcon: 'fa-whatsapp',
                title: 'WhatsApp',
                content: '',
                link: 'https://api.whatsapp.com/send?phone=5511992494597&text=Bonjour%20monsieur%20Ricardo%20j%C2%B4ai%20%C3%A9te%20dans%20votre%20site%20online%20et%20je%20voudrais%20parler%20avec%20toi'
            },
        ],
        menu: [
            { label: "Compétences", link: '#skills' },
            { label: "Expériences", link: '#experiences' },
            { label: "Formation",   link: '#formation' }
        ],
        about: {
            title: "Sur",
            content: "Celibataire, 31 ans, Je suis passionné de technologie. Je travaille avec l'informatique depuis que 10 ans ou 7 d´entre eux comment un developper. Dans cette année je veux voyager a l´exterior pour les pays comment Canada ou les Estats-Unis, peut-être reencontrer un tele-travail ou un travail a là-bas. Et pour finir et parle de moi J´ai beacoup de passe-temps comment regarde des films et series, jeu video, voyager fait du velo et sortir avec mes amis pour pendre de bonne temps avec eux."
        },
        competences: [
            { title: "PHP", level: 4 },
            { title: "JavaScript", level: 4 },
            { title: "Mysql", level: 4 },
            { title: "Linux", level: 3 },
            { title: "Devops", level: 2 },
            { title: "Laravel", level: 3 },
            { title: "React", level: 3 },
            { title: "Angular", level: 3 },
            { title: "NodeJS", level: 3 },
            { title: "Agile", level: 3 },
            { title: "Anglais", level: 4 },
            { title: "Français", level: 2 },
            
        ],
        experiences: [
            {
                title: "Full Stack Developper",
                company: "Movida Loyer de voitures",
                duration: "Durée: 3 ans et 1 moin",
                location: "São Paulo, Brésil",
                description: "J'ai travaillé comment un fullstack developper avec une équipe quel est responsable pour les vendres de voitures d´occasion. Nous travaillons en utilisant les technologies suivant (Angular / PHP). J´ai dévelopé beacoup d´integracions avec des enterprises partenaires, Nouvelles fonctions et nouvelles projects. j´ai beacoup de temps a l´interprise alors j´ai gagné beacoup d´autres responsabilites comment travaille eb tant que techleader et quelque fois comment un coordinateur, J´ai eu besoin d´aide l´equipe avec les doutes techniques et aussi les doutes du projet. J´en ai beacoup appris car c´´etait ma première experience pour travailler comment un chef, déléguer des tâches, reviewing et fait de révision et aussi faire la validation technique quand l´es taches c´est online. Il y a des temps aussi que j´ai eu besoin de gerer les serveurs de développement."
            },
            {
                title: "Full Stack Developper",
                company: "Pravaler",
                duration: "Durée: 8 moins",
                location: "São Paulo, Brésil",
                description: "I´ve developed part of a new system who would replace the old one. Using the concept of microservices with the stacks PHP with symfony and Angular. I also were responsable for giving suport and maintenance to the old systems, I worked for the first time with the concept of agile development doing the ceremonies as daily, retro, review, planning and so on."
            },
            {
                title: "PHP Developer",
                company: "Tmontec",
                duration: "Durée: 7 moins",
                location: "Mauá, Brésil",
                description: "Travaillers ici c'était un grand défi parce que il y avait beacoup de travail c'est une petit enterprise comment une startup, Mes collegues étaient gentils et tout le monde s'est aidé. J'ai maintenu des systèmes vieux et aussi developper des nouvelles utilisant diferents stacks comment Delphi, PHP, Angular, Jquery, Vue. J'ai aussi fourni un support les clients."
            }
        ],
        formation: [
            {
                school: "Université nove de julho",
                course: "Technologie dans base de données",
                duration: "01/2014 - 07/2016",
                description: "J'ai appris tout les notions de base de données, des relations, la performance, la langage SQL, base de donnes non SQL et d'autres choses  "
            },
            {
                school: "4 Linux",
                course: "Linux formation",
                duration: "04/2018 - 07/2018",
                description: "Des Commandes du terminal, permission, basics de réseau informatique dans le linux, basics de ShellScript,  Le Audit, et notions devops."
            },
            {
                school: "Udemy",
                course: "Angular / NodeJS",
                duration: "01/2019 - 07/2019",
                description: "ES6, Typescript, les structures des Frameworks, composant qui son réutilisables, réquisition HTTP, authentification et autorisation, utilise base de données Nosql (mongoDB)"
            },
            {
                school: "4 Linux",
                course: "Infrastructure agile",
                duration: "03/2020 - 04/2020",
                description: "Les notions Devops pour utilisez votres différents technologies comment Docker, Git, Jenkins, Ansible"
            },
            {
                school: "CNA Idiomas",
                course: "Anglais",
                duration: "01/2009 - 07/2014",
                description: ""
            },
            {
                school: "Classes privées",
                course: "Français",
                duration: "03/2020 - jusqu´a L´instant",
                description: ""
            }
        ],
        portifolio: [
            {
                title: "Movendo rent a movie",
                description: "C'est un projet que je créé pour mes études de React. Simule une entreprise de location de films, C'est créé avec react dans le frontend et php8 et laravel dans le backend sa base de donnes c'est mysql<br /> <b>Utilisateur:</b> admin@admin.com<br /> <b>Mot de passe:</b> 123456",
                foto: "movendo",
                link: "https://movendo-frontend.herokuapp.com/login"
            },
            {
                title: "English Review",
                description: "C'est un projet que je créé pour mes études de webcomponents et auxi pour aide ma nièce avec sa etudies d'anglais ou elle peut revoir les mots de notre classes, Utilise solement Javascript pur",
                foto: "englishreview",
                link: "https://englishreview.netlify.app"
            },
            {
                title: "Meu github",
                description: "Un webapp que j'ai créé avec angular et il consomme l'api public de github et montrant les informations de l'utilisateurs avec ses projets, langues les followers et un peu plus d'informations<br /> <b>Mon utilisateur:</b> ricardowebdev<br />",
                foto: "github",
                link: "https://ricardowebdev-github.netlify.app"
            }            
        ],        
        footer: {
            copyright: "@copyright 2022 Tout les droits: Ricardo dos Santos Souza",
            links: [
                {
                    icon: "fa-linkedin-square",
                    link: "https://www.linkedin.com/in/ricardo-souza-web-dev",
                    alt: "Linkedin"
                },
                {
                    icon: "fa-github",
                    link: "https://github.com/ricardowebdev",
                    alt: "Github"
                },
                {
                    icon: "fa-envelope",
                    link: "mailto:ricardo.tecnology@gmail.com",
                    alt: "E-mail"
                },
                {
                    icon: "fa-whatsapp",
                    link: "https://api.whatsapp.com/send?phone=5511992494597&text=Bonjour%20monsieur%20Ricardo%20j%C2%B4ai%20%C3%A9te%20dans%20votre%20site%20online%20et%20je%20voudrais%20parler%20avec%20toi",
                    alt: "Whatsapp"
                }
            ]
        }
    }    
};

export function getSiteInfo(key) {
  return site[key];
}

