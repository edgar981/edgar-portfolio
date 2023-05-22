
import {
    // mobile,
    pifood,
    netclone,
    backend,
    creator,
    web,
    javascript,
    nextjs3,
    // typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    // figma,
    docker,
    key,
    henry,
    netflix,
    mecanu,
    threejs,
    graphQL,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    // {
    //     title: "React Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Knowledge-seeking",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "next",
        icon: nextjs3,
    },
    {
        name: "graphQL",
        icon: graphQL,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Mecanu",
        icon: key,
        iconBg: "#E6DEDD",
        date: "Feb 2023 - May 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Hands on web API's such as MercadoPago, Whatsapp Business, Google Calendar",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Henry",
        icon: henry,
        iconBg: "#383E56",
        date: "Dic 2022 - Jan 2023",
        points: [
            "Developing a full web application using React.js, Redux, Node.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Working with external Spoonacular API, and implementing some UI/UX concepts",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Freelance",
        icon: netflix,
        iconBg: "#E6DEDD",
        date: "May 2023",
        points: [
            "Developing a full web application using Next.js, Hasura and other related technologies.",
            "Hands on web API's such as Youtube API, GraphQL architecture.",
            "Working with JWT authentication, Magic auth and deploying the web application on Vercel.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mecanu",
        description:
            "Web-based platform that allows users to search, book, and manage car fixing services, providing a convenient and efficient solution for your vehicle needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: mecanu,
        source_code_link: "https://github.com/Mecanu-com",
        extra_link: "https://www.linkedin.com/posts/edgarnabo_hola-estoy-muy-feliz-de-anunciar-que-acabo-ugcPost-7061838170237071360-m2fs?utm_source=share&utm_medium=member_desktop",
    },
    {
        name: "Netflix clone",
        description:
            "Web application that stream videos from different categories and allow you to like and dislike them, storing these data in a database.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "graphQL",
                color: "green-text-gradient",
            },
            {
                name: "hasura",
                color: "pink-text-gradient",
            },
        ],
        image: netclone,
        source_code_link: "https://github.com/edgar981/Netflix-clone",
        extra_link: "https://netflix-clone-three-ruby.vercel.app/login"
    },
    {
        name: "Food recipes",
        description:
            "A responsive web application that provides you with some recipes and sort them by health score, and diet type. Also allow you create your own recipe.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
        ],
        image: pifood,
        source_code_link: "https://github.com/edgar981/PI-Food/tree/main",
    },
];

export { services, technologies, experiences, testimonials, projects };