import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    C,
    java,
    python,
    express,
    vite,
    uft, 
    code_comp,
    twars,
    shoptrack
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
      title: "Developer / Plugin Engineer",
      company_name: "Treasurewars",
      icon: twars,
      iconBg: "#383E56",
      date: "July 2023",
      points: [
              "Developed and maintained 20+ Minecraft plugins, enhancing gameplay and driving 15% higher player retention.",
              "Engineered load-balancing proxy with BungeeCord, resulting in 30% faster connections and reduced latency.",
              "Collaborated with a 3-person development team for code reviews and best practice adherence.",
              "Managed databases for 10,000+ players' data, optimizing performance and ensuring stability.",
              "Researched and integrated new technologies, boosting plugin performance by 25% and maintaining compatibility."
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
    {
      name: "Shop Track",
      description:
        "E-Commerce App Prototype with full order-based functionality for Store Owners and Shoppers.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        
      ],
      image: shoptrack,
      source_code_link: "https://github.com/meliadamian17/ShopTrack",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };