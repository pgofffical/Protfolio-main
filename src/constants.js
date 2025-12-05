// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/BVA1_logo.png';
import vpsLogo from './assets/education_logo/BVA_logo.png';

// Project Section Logo's

import csprepLogo from './assets/work_logo/cs_prep.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Node JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Developer Intern",
      company: "InternPe",
      date: "Dec 2023 - Jan 2024",
      desc: "Contributed to the development and maintenance of web applications during my internship at InternPe. Worked with HTML, CSS, and JavaScript to create interactive and user-friendly interfaces, enhancing overall user experience. Gained practical exposure to front-end development practices and collaborative workflows in a remote environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Sinhgad Institute of Technology, Lonavala",
      date: "2021 - 2025",
      grade: "7.5 CGPA",
      desc: "I have completed my Bachelor’s degree in Electronics and Telecommunication Engineering from Sinhgad Institute of Technology, Lonavala. While my core education was in electronics, I developed a strong passion for software development and mastered modern web technologies alongside my studies. Over time, I gained expertise in the MERN stack, Java, and core computer science concepts such as OOP, DBMS, and Data Structures. Through internships, projects, and continuous learning, I have combined my electronics background with full-stack development skills to build practical, user-focused solutions.",
      degree: "Bachelor of Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Bhairavnath vidyalaya and Jr. College, Ankoli",
      date: "2021",
      grade: "66.17%",
      desc: "I completed my Class 12 education from Bhairavnath vidyalaya and Jr. College, Ankoli, under the Maharashtra State Board, where I studied Physics, Chemistry, Mathematics and Biology (PCMB) along with Electronics.",
      degree: "Maharashtra State Board (XII) – PCM with Electronics",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Bhairavnath vidyalaya and Jr. College, Ankoli",
      date: "2019",
      grade: "76.40%",
      desc: "I completed my Class 10 education from Bhairavnath vidyalaya and Jr. College, Ankoli, under the Maharashtra State Board, where I studied subjects including Marathi, Hindi, English, Mathematics, Science & Technology, and Social Science.",
      degree: "Maharashtra State Board (X)",

    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: " Chat Me- Real Time Chat Application",
      description:
        "Built a real-time chat application using Node.js, Express.js, and Socket.io to enable fast, low-latency messaging. Designed a responsive frontend with HTML, CSS, and JavaScript, and added rich text formatting and emoji support for enhanced user interaction.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Socket.io", "WebSocket", "Bootstrap", "REST API", "Real-Time Communication"],
      github: "https://github.com/pgofffical/Real-Time-Chat-Application",
      // webapp: "https://wanderlust-project-l6gm.onrender.com/",
    },
    
  ];  
