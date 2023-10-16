/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Zain",
  logo_name: "Zain.Abdeen()",
  full_name: "Zain Ul Abdeen",
  subTitle:
    "Senior Software Engineer, React Native Enthusiast, Hybrid Mobile App Developer (iOS & Android).",
  resumeLink: "",
};

const socialMediaLinks = {
  // stackoverflow: "https://stackoverflow.com/users/10657559",
  github: "https://github.com/zainulabdeen4",
  linkedin: "https://www.linkedin.com/in/zain-ul-abdeen/",
  gmail: "zainulabdeen4123@gmail.com",
  // instagram: "https://www.instagram.com/thanhal_rafi/",
  whatsapp: "https://wa.me/966566482857?text=",
  number: "+966566482857",
  // npm: "https://www.npmjs.com/~thanhal",
};

const contactInfo = {
  email_address: "zainulabdeen4123@gmail.com",
  phone_num: "+966 566482857",
};

const skills = {
  data: [
    {
      title: "Skills and Tools",
      fileName: "FullStackImg",
      skills: [
        "Development of highly interactive UI for Mobile Applications",
        "Development & Deployment of both iOS and Android builds.",
        "Integration of third party services such as Instana Agent, Firebase, AES Encryption, SQLite, Rich Text Editor, TTS, Text Recognition, One Signal, Google Map APIs, Social Media Feeds etc..",
        "Bridging native modules",
        "Propose & Implement technical solutions for complex problems",
        "Plan source code structure & reviewing source codes",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#A2AAAD",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#007acc",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764abc",
          },
        },
        {
          skillName: "Redux Saga",
          fontAwesomeClassname: "simple-icons:reduxsaga",
          style: {
            color: "#8AD96C",
          },
        },
        {
          skillName: "Mac",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#A2AAAD",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#00A4EF",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "VSCode",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#007acc",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFA611",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#113D52",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "DHA SUFFA UNIVERSITY",
      subtitle: "Bachelor of Science (Computer Science)",
      logo_path: "dsu.png",
      alt_name: "dha",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have completed my BS in C.S with a CGPA of 3.32",
        "⚡ Done one major and one mini project with team.",
        "⚡ Class representative during 2015-2016.",
      ],
      website_link: "https://www.dsu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React Native Internship",
      subtitle: "Idea Sow",
      logo_path: "LookingsLogo.png",
      certificate_link: "",
      alt_name: "Lookings",
      color_code: "#2ab0ee",
    },
    {
      title: "P.I.A.C ",
      subtitle: "Mobile Development Course",
      logo_path: "piaic.png",
      certificate_link: "https://www.piaic.org/",
      alt_name: "course",
      color_code: "#f7b908",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've 6 years of UI / Front End experience in Cross-Platform Mobile App Development using React Native.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior React Native Developer",
          company: "Emkan Finance (NTG Clarity)",
          company_url: "https://www.emkanfinance.com.sa/",
          logo_path: "EmkanLogo.png",
          duration: "Sep 2022 - present",
          location: "Riyah, Saudi Arabia",
          description: `Role: Build, develop, deploy and test major financial services, frameworks, toolsets, and features for internal financial and payments processing systems.`,
          color: "#0071C5",
        },
        {
          title: "Senior Mobile Application Developer",
          company: "Royal Cyber Inc.",
          company_url: "https://www.royalcyber.com/",
          logo_path: "rc.svg",
          duration: "March 2022 - Sep 2022",
          location: "Karachi,Pakistan",
          description: `Role: Propose & Implement technical solutions for complex problems;
          Plan source code structure & reviewing source codes;
          Internal evaluation of associates;
          3rd party library integration;
          Mentoring junior resources.`,
          color: "#0071C5",
        },
        {
          title: "Mobile Developer (React Native)",
          company: "Express News",
          company_url: "https://www.express.pk/",
          logo_path: "express.png",
          duration: "Feb 2021 - Feb 2022",
          location: "Karachi, Pakistan",
          description:
            "Role: Team leadership; Analyse, Estimate, Design, Implement & Test Modules.",
          color: "#4285F4",
        },
        {
          title: "Senior React Native Developer",
          company: "Salsoft Technologies",
          company_url: "https://www.salsoft.net/",
          logo_path: "salsoft.png",
          duration: "Feb 2020 - Feb 2021",
          location: "Karachi,Pakistan",
          description: `Role: Design, Implement and Integrate components.`,
          color: "#0071C5",
        },
        {
          title: "React Native Developer",
          company: "Right Solutions",
          company_url: "https://www.rightsolution.net/",
          logo_path: "rs.png",
          duration: "Jun 2018 - Feb 2020",
          location: "Karachi,Pakistan",
          description: `Role: Design, Implement and Integrate components.`,
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Internship",
    //   experiences: [
    //     {
    //       title: "React Native Trainee",
    //       company: "Lookings Soft",
    //       company_url: "https://lookingsoft.com/",
    //       logo_path: "LookingsLogo.png",
    //       duration: "June 2018 - Sep 2018",
    //       location: "Cochin,kerala,India",
    //       description: "Training, research and understand the technology",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create and develop Mobile Applications for both Android and iOS. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    profile_image_path: "profile_photo.jpg",
    description:
      "Please feel free to contact me through the provided channels, and I'll do my best to respond as promptly as possible",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://www.google.com",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Emkan (1M+ Downloads with 4.2★ Rating - Al-Rajhi Bank Subsidiary)",
      url: "https://apps.apple.com/app/id1508990688?mt=8",
      description: `Emkan Finance is Fully owned by Al Rajhi Bank, one of the largest banks in the world. The app can fulfill the urgent financial needs digitally - user can apply for finance and find out if its approved all through the app, without the need to use traditional ways.`,
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "React Native Maps",
          iconifyClass: "logos-google-maps",
        },
      ],
    },
    {
      id: "1",
      name:
        "Express News (500K+ Downloads with 4.6★ Rating - Pakistan Famous News Apps",
      url:
        "https://play.google.com/store/apps/details?id=com.expressdigital.expressnews&hl=en&gl=US&pli=1",
      description: `Integrated mobile app for public News Entertainment.`,
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "Redux Saga",
          iconifyClass: "logos-redux-saga",
        },
      ],
    },
    {
      id: "2",
      name: "PlaceMakers Trade (10K+ Downloads",
      url:
        "https://play.google.com/store/apps/details?id=com.fbu.placemakerstrade&hl=en&gl=US",
      description:
        "App for newzealand Top for Ordering and building home raw Materials",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "SQLite",
          iconifyClass: "logos-sqlite",
        },
      ],
    },
    {
      id: "3",
      name: "Entertainment Oxygen (10K+ Downloads with 4.8★ Rating)",
      url:
        "https://play.google.com/store/apps/details?id=com.entertainmentoxygen&hl=en&gl=US",
      description:
        "Social media app for skilled persons where they can showcase there work. Explore Job opportunities from job posted through bidding. chat with other users and watch other users news feed",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
      ],
    },
    {
      id: "4",
      name: "VillageDukaan (10K+ Downloads)",
      url:
        "https://play.google.com/store/apps/details?id=com.villagedukaan.villagedukaanandroidapp&hl=en&gl=US",
      description:
        "It's an ecommerce apps for a startup which deliver indian traditional dishes to different parts of the world.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase ML Kit",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "5",
      name: "Total Parco Contractor",
      url:
        "https://play.google.com/store/apps/details?id=com.totalparco&hl=en&gl=US",
      description:
        "This project is build for Engineers of a huge gas marketing company. it will help to notify about their request fulfilled using pictures and videos as well",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "One Signal",
          iconifyClass: "logos-onesignal",
        },
      ],
    },
    {
      id: "6",
      name: "EFLOW Service Desk (10k+ Downloads)",
      url:
        "https://play.google.com/store/apps/details?id=com.eflowapp&hl=en&gl=US",
      description:
        " this app was developed for faysal bank a very popular bank in pakistan. this app facilitate senior management of Faysal Bank Limited for remote access to organisational approval process such as usb access , internet access , share folders during training or travelling etc",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "Redux Saga",
          iconifyClass: "logos-redux-saga",
        },
        {
          name: "Node.JS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "7",
      name: "Engro Humsafar (5k+ Downloads)",
      url:
        "https://play.google.com/store/apps/details?id=com.engro.humsafar&hl=en&gl=US",
      description:
        "Engro Fertilizers Dealer Management System for Dealers. it allows to place orders to transporters. track their orders.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
      ],
    },
    {
      id: "8",
      name: "Smart Plant & Tree Care App",
      url:
        "https://play.google.com/store/apps/details?id=com.smartplanthome&hl=en&gl=US",
      description:
        "Welcome to Smart Plant and Tree Care, the all-in-one FREE garden app that is the perfect sidekick for all of your green thumb needs. We all want our plants to be happy and thriving - and that's where Smart Plant and Tree Care comes in!",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  contactInfo,
};
