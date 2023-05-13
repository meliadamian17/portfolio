import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    C,
    java,
    python,
    express,
    vite,
    uft, 
    code_comp,
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
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: uft,
    },
  
  ];
  
  const technologies = [
    {
      name: "C",
      icon: C,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "HTML 3",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "git",
      icon: git,
    },


  ];
  
  const experiences = [
    {
      title: "",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        
      ],
    },
    {
      title: "",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        
      ],
    },
    {
      title: "",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        
      ],
    },
    {
      title: "",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        
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
      name: "Online Code Compiler",
      description:
        "Web-based platform that allows users to write and execute code in various programming languages.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        
      ],
      image: code_comp,
      source_code_link: "https://github.com/meliadamian17/online_code_comp/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };