import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    nextjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    googleIcon,
    celonisIcon,
    octanetIcon,
    justiceindex,
    spendwise,
    freshflow,
    threejs,
  } from "../assets";
  
const navLinks = [
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
      title: "Front-End Developer & UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Back-End Developer & API Integrator",
      icon: backend,
    },
    {
      title: "Software Engineer",
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
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "Google",
      icon: googleIcon, // Replace with the actual path to Google’s icon
      iconBg: "#4285F4", // Google’s brand color
      date: "Apr 2024 - Jun 2024",
      points: [
        "Completed the Google AI-ML Virtual Internship, focusing on artificial intelligence and machine learning.",
        "Worked on projects involving machine learning algorithms, data analysis, and model evaluation.",
        "Gained hands-on experience with Google’s AI tools and methodologies, enhancing skills in AI development.",
      ],
    },
    {
      title: "Business Analyst Intern",
      company_name: "Celonis",
      icon: celonisIcon, // Replace with the actual path to Celonis’s icon
      iconBg: "#00A3E0", // Celonis’s brand color
      date: "Jan 2024 - Mar 2024",
      points: [
        "Completed the Celonis Business Analyst Virtual Internship, specializing in process mining and business analysis.",
        "Engaged in process analysis, data visualization, and business process optimization projects.",
        "Enhanced skills in using Celonis tools for process mining and deriving actionable insights.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "OctaNet Services Pvt Ltd.",
      icon: octanetIcon, // Replace with the actual path to OctaNet’s icon
      iconBg: "#383E56", // OctaNet’s brand color or a representative color
      date: "Nov 2023 - Jan 2024",
      points: [
        "Completed a 2-month internship as a Web Developer, focusing on developing and maintaining web applications.",
        "Worked on coding, debugging, and implementing features using modern web technologies.",
        "Collaborated with the development team to improve website functionality and user experience.",
        "Gained practical experience in web development and enhanced coding skills through real-world projects.",
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
      name: "Justice Index",
      description:
        "The Criminal Database Management System is a web application built using Next.js and MongoDB that aims to streamline the management of criminal records and enhance the efficiency of law enforcement.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: justiceindex,
      source_code_link: "https://github.com/Mohitraut07/JusticeIndex",
      live_project_link: "https://justice-index-j2l9.vercel.app/",
    },
    {
      name: "Fresh Flow",
      description:
        "Fresh Flow is a platform that connects farmers with warehouse owners for grain storage rental and links customers directly with farmers. Simplify your storage needs and access fresh produce effortlessly with Fresh Flow.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: freshflow,
      source_code_link: "https://github.com/Freakyab/fresh-flow",
      live_project_link: "https://fresh-flow.vercel.app/",
    },
    {
      name: "Spend Wise",
      description:
        "Spend Wise is an expense management app that simplifies tracking and categorizing transactions, helping users gain control over their finances with a streamlined user experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: spendwise,
      source_code_link: "https://github.com/Mohitraut07/Spend-Wise",
      live_project_link: "https://spend-wise-mohitraut07.vercel.app/",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects , navLinks};