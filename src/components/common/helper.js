import {
  BackEndDevelopmentIcon,
  BlockchainDevelopmenticon,
  MobileAppDevelopmentIcon,
  UiUxDesignicon,
  WebDevelopmentIcon,
  WordPressDevelopmenticon,
} from "./icon";


import Man from "../../assets/img/team/man.png"
import Man1 from "../../assets/img/team/man1.png"
import Man2 from "../../assets/img/team/man2.png"
import Man4 from "../../assets/img/team/man4.png"
import girl from "../../assets/img/team/girl.png"
import girl1 from "../../assets/img/team/girl1.png"

import frontenddeveloper from "../../assets/img/courses/frontenddeveloper-img.png"
import backenddeveloper from "../../assets/img/courses/back-end.png"
import uiux from "../../assets/img/courses/ui-ux.png"
import appdeveloper from "../../assets/img/courses/app-developer.png"

import HtmlImg from "../../assets/img/courses/html.png";
import CssImg from "../../assets/img/courses/css.png";
import BootstrapImg from "../../assets/img/courses/bootstrap.png";
import TailwindImg from "../../assets/img/courses/tailwindcss-img.png";
import JavascriptImg from "../../assets/img/courses/javascript-img.png";
import ReactImg from "../../assets/img/courses/reactjs-img.png";
import AngularImg from "../../assets/img/courses/angular-img.png";
import VueImg from "../../assets/img/courses/veujs-img.png";
import TypescriptImg from "../../assets/img/courses/typescript-img.png";
import MaterializeImg from "../../assets/img/courses/matrialize-img.png";
import MaterialUIImg from "../../assets/img/courses/matrialui-img.png";
import NodeImg from "../../assets/img/courses/nodejs.png";
import MongoDBImg from "../../assets/img/courses/mongodb.png";
import PythonImg from "../../assets/img/courses/python.png";
import DjangoImg from "../../assets/img/courses/django.png";
import NestImg from "../../assets/img/courses/nest.png";
import FastApiImg from "../../assets/img/courses/fast.png";
import FlaskImg from "../../assets/img/courses/flask.png";
import PostgreImg from "../../assets/img/courses/postgre.png";
import MySQLImg from "../../assets/img/courses/mysql.png";
import FirebaseImg from "../../assets/img/courses/firebase.png";
import GraphQLImg from "../../assets/img/courses/graqphql.png";
import FigmaImg from "../../assets/img/courses/figma.png";
import AdobeXDImg from "../../assets/img/courses/adobe.png";
import FlutterImg from "../../assets/img/courses/flutter.png";
import DartImg from "../../assets/img/courses/dart.png";
import ApiImg from "../../assets/img/courses/api.png";

import Emailhost from "../../assets/img/home/emailhost.jpg"
import LinuxMail from "../../assets/img/home/linuxmail.png"
import WebApp from "../../assets/img/home/webapp.png"
import WebHost from "../../assets/img/home/websitehost.jpg"
import WebDesignandDevelop from "../../assets/img/home/webdesignanddev.jpg"
import Iomsimg from "../../assets/img/home/iomsimg.jpg"

export const allcourselist = [
  {
    slug: "frontend",
    coursetitle: "Front End Development",
    courseimage: "/img/courses/front-end.png",
    coursedescription:
      "Front-end Development with React: React is a popular front-end JavaScript library used for building interactive and responsive user interfaces. This course will teach you how to use React to create dynamic web applications. ",

    techlist: [
      {
        imageURL: HtmlImg,
        heading: "html",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description:
          "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
      },
      {
        imageURL: CssImg,
        heading: "css",
        link: "https://developer.mozilla.org/en-US/docs/Web/css",
        description:
          "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
      },
      {
        imageURL: BootstrapImg,
        heading: "bootstrap",
        link: "https://getbootstrap.com/",
        description:
          "Bootstrap is the most popular CSS framework for developing responsive, mobile-first websites.",
      },
      {
        imageURL: TailwindImg,
        heading: "tailwindcss",
        link: "https://tailwindcss.com/",
        description:
          "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. ",
      },
      {
        imageURL: JavascriptImg,
        heading: "javascript",
        link: "https://www.javascript.com/",
        description:
          "JavaScript is the Programming Language for the Web. It can update and change both HTML and CSS.",
      },
      {
        imageURL: ReactImg,
        heading: "react.js",
        link: "https://react.dev/",
        description:
          "React is a JavaScript library created by Facebook. React is a User Interface (UI) library.",
      },
      {
        imageURL: AngularImg,
        heading: "angular.js",
        link: "https://angular.io/",
        description:
          "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
      },
      {
        imageURL: VueImg,
        heading: "veu.js",
        link: "https://vuejs.org/",
        description:
          "Vue. js is a progressive framework for JavaScript used to build web interfaces and one-page applications.",
      },
      {
        imageURL: TypescriptImg,
        heading: "typescript",
        link: "https://www.typescriptlang.org/",
        description:
          "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      },
      {
        imageURL: MaterializeImg,
        heading: "Matrialize",
        link: "https://materializecss.com/",
        description:
          "Materialize is a modern responsive CSS framework based on Material Design by Google.",
      },
      {
        imageURL: MaterialUIImg,
        heading: "matrial ui",
        link: "https://mui.com/",
        description:
          "MUI offers a comprehensive suite of UI tools to help you ship new features faster.",
      },
    ],
    whatyoulearn: [
      "HTML, CSS, Bootstrap, React.JS",
      "HTML, CSS, Bootstrap, Angular.JS",
    ],
    duration: 6,
    fees: 82999,
    emidetails: [
      {
        duration: 3,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
      {
        duration: 6,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
    ],
  },
  {
    slug: "backend",
    coursetitle: "Back End Development",
    courseimage: "/img/courses/front-end.png",
    coursedescription:
      "Welcome to the back-end developer page of My Tech Professionals, an IT company committed to providing cutting-edge technology solutions. As a back-end developer at My Tech Professionals, you will be responsible for building and maintaining the server-side of our web and mobile applications. ",

    techlist: [
      {
        imageURL: NodeImg,
        heading: "node.js",
        link: "https://nodejs.org/en",
        description:
          "Node.js is an open-source server side framework allows you to run javascript on server.",
      },
      {
        imageURL: MongoDBImg,
        heading: "mongodb",
        link: "https://www.mongodb.com/",
        description:
          "MongoDB is an open-source, high performance, NoSQL document database.",
      },
      {
        imageURL: PythonImg,
        heading: "python",
        link: "https://www.python.org/",
        description:
          "Python is a popular programming language allows you to create web, desktop and AI/ML applications.",
      },
      {
        imageURL: DjangoImg,
        heading: "django",
        link: "https://www.djangoproject.com/",
        description:
          "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      },
      {
        imageURL: NestImg,
        heading: "nest.js",
        link: "https://nestjs.com/",
        description:
          "NestJS A progressive Node.js framework for building efficient, reliable and scalable server-side applications. ",
      },
      {
        imageURL: FastApiImg,
        heading: "fast api ",
        link: "https://fastapi.tiangolo.com/lo/",
        description:
          "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python. ",
      },
      {
        imageURL: FlaskImg,
        heading: " flask",
        link: "https://flask.palletsprojects.com/en/2.3.x/",
        description:
          "Flask is a popular, extensible web micro-framework for building web applications with Python. ",
      },

      {
        imageURL: PostgreImg,
        heading: "postgre sql ",
        link: "https://www.postgresql.org/",
        description:
          " PostgreSQL is the World's Most Advanced Open Source Relational Database",
      },
      {
        imageURL: MySQLImg,
        heading: " mysql",
        link: "https://www.mysql.com/",
        description:
          " MySQL is a widely used RDBMS. MySQL is ideal for both small and large applications.",
      },
      {
        imageURL: FirebaseImg,
        heading: " Firebase",
        link: "https://firebase.google.com/",
        description:
          "Firebase is a platform developed by Google for creating mobile and web applications. ",
      },
      {
        imageURL: GraphQLImg,
        heading: "graqphql ",
        link: "https://graphql.org/",
        description:
          " GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need",
      },
    ],
    whatyoulearn: [
      "HTML, CSS, Bootstrap, React.JS",
      "HTML, CSS, Bootstrap, Angular.JS",
    ],
    duration: 6,
    fees: 82999,
    emidetails: [
      {
        duration: 3,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
      {
        duration: 6,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
    ],
  },
  {
    slug: "ui-ux",
    coursetitle: "UI UX Designing",
    courseimage: "/img/courses/front-end.png",
    coursedescription:
      "UI/UX Design: User interface (UI) and user experience (UX) design are crucial for creating engaging and user-friendly websites. This course will teach you how to design effective interfaces, create wireframes and prototypes, and conduct user research.",

    techlist: [
      {
        imageURL: FigmaImg,
        heading: "figma",
        description:
          "Figma is a web based vector graphics editor and prototyping tool. It is the most reliable tools for speeding the feedback loop.",
      },
      {
        imageURL: AdobeXDImg,
        heading: "adobe xd",
        link: "https://helpx.adobe.com/support/xd.html",
        description:
          "Adobe XD is a vector-based user experience design tool for web mobile apps, developed and published by Adobe Inc.",
      },
    ],
    whatyoulearn: [
      "HTML, CSS, Bootstrap, React.JS",
      "HTML, CSS, Bootstrap, Angular.JS",
    ],
    duration: 6,
    fees: 82999,
    emidetails: [
      {
        duration: 3,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
      {
        duration: 6,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
    ],
  },
  {
    slug: "mobile-app",
    coursetitle: "Mobile app development",
    courseimage: "/img/courses/front-end.png",
    coursedescription:
      "Mobile App Development: As more and more people access the internet through their mobile devices, having a mobile app can help you reach a wider audience. This course will teach you how to develop mobile apps for iOS and Android devices using popular frameworks like React Native. ",

    techlist: [
      {
        imageURL: FlutterImg,
        heading: "flutter",
        link: "https://flutter.dev/?gclid=CjwKCAjwhdWkBhBZEiwA1ibLmE0TUwq3Q-p7R1znsS-PRc-4W4ADv89-hPNSux3NqOxp7iQ_bDI5rRoCNZIQAvD_BwE&gclsrc=aw.ds",
        description:
          "Flutter is an open-source UI software development kit created by Google.",
      },
      {
        imageURL: DartImg,
        heading: "dart",
        link: "https://dart.dev/",
        description:
          "Dart is a programming language designed for client development, such as for the web and mobile apps.",
      },
      {
        imageURL: ApiImg,
        heading: "api",
        link: "https://developer.mozilla.org/en-US/docs/Web/API",
        description:
          "An application programming interface is a connection between computers or between computer programs.",
      },
      {
        imageURL: FirebaseImg,
        heading: "firebase",
        link: "https://firebase.google.com/",
        description:
          "Firebase is a platform developed by Google for creating mobile and web applications.",
      },
    ],
    whatyoulearn: [
      "HTML, CSS, Bootstrap, React.JS",
      "HTML, CSS, Bootstrap, Angular.JS",
    ],
    duration: 6,
    fees: 82999,
    emidetails: [
      {
        duration: 3,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
      {
        duration: 6,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
    ],
  },
  {
    slug: "fullstack",
    coursetitle: "Full Stack Developer",
    courseimage: "/img/courses/front-end.png",
    coursedescription:
      "Full stack courses provide comprehensive training in both front-end and back-end web development, equipping students with the skills to build complete web applications. These courses cover a wide range of programming languages, frameworks, and tools necessary to develop robust and interactive web projects. ",

    techlist: [
      {
        imageURL: HtmlImg,
        heading: "html",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description:
          "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
      },
      {
        imageURL:CssImg,
        heading: "css",
        link: "https://developer.mozilla.org/en-US/docs/Web/css",
        description:
          "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
      },
      {
        imageURL: NodeImg,
        heading: "node.js",
        link: "https://nodejs.org/en",
        description:
          "Node.js is an open-source server side framework allows you to run javascript on server.",
      },
      {
        imageURL: MongoDBImg,
        heading: "mongodb",
        link: "https://www.mongodb.com/",
        description:
          "MongoDB is an open-source, high performance, NoSQL document database.",
      },
      {
        imageURL: PythonImg,
        heading: "python",
        link: "https://www.python.org/",
        description:
          "Python is a popular programming language allows you to create web, desktop and AI/ML applications.",
      },
      {
        imageURL: BootstrapImg,
        heading: "bootstrap",
        link: "https://getbootstrap.com/",
        description:
          "Bootstrap is the most popular CSS framework for developing responsive, mobile-first websites.",
      },
      {
        imageURL: TailwindImg,
        heading: "tailwindcss",
        link: "https://tailwindcss.com/",
        description:
          "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. ",
      },
      {
        imageURL: JavascriptImg,
        heading: "javascript",
        link: "https://www.javascript.com/",
        description:
          "JavaScript is the Programming Language for the Web. It can update and change both HTML and CSS.",
      },
      {
        imageURL: ReactImg,
        heading: "react.js",
        link: "https://react.dev/",
        description:
          "React is a JavaScript library created by Facebook. React is a User Interface (UI) library.",
      },
      {
        imageURL: AngularImg,
        heading: "angular.js",
        link: "https://angular.io/",
        description:
          "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
      },
      {
        imageURL: DjangoImg,
        heading: "django",
        link: "https://www.djangoproject.com/",
        description:
          "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      },
      {
        imageURL: NestImg,
        heading: "nest.js",
        link: "https://nestjs.com/",
        description:
          "NestJS A progressive Node.js framework for building efficient, reliable and scalable server-side applications. ",
      },
      {
        imageURL: FastApiImg,
        heading: "fast api ",
        link: "https://fastapi.tiangolo.com/lo/",
        description:
          "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python. ",
      },
      {
        imageURL: VueImg,
        heading: "veu.js",
        link: "https://vuejs.org/",
        description:
          "Vue. js is a progressive framework for JavaScript used to build web interfaces and one-page applications.",
      },
      {
        imageURL: TypescriptImg,
        heading: "typescript",
        link: "https://www.typescriptlang.org/",
        description:
          "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      },
      {
        imageURL: MaterialUIImg,
        heading: "Matrialize",
        link: "https://materializecss.com/",
        description:
          "Materialize is a modern responsive CSS framework based on Material Design by Google.",
      },
      {
        imageURL: MaterialUIImg,
        heading: "matrial ui",
        link: "https://mui.com/",
        description:
          "MUI offers a comprehensive suite of UI tools to help you ship new features faster.",
      },
      {
        imageURL: FlaskImg,
        heading: " flask",
        link: "https://flask.palletsprojects.com/en/2.3.x/",
        description:
          "Flask is a popular, extensible web micro-framework for building web applications with Python. ",
      },
      {
        imageURL:PostgreImg,
        heading: "postgre sql ",
        link: "https://www.postgresql.org/",
        description:
          " PostgreSQL is the World's Most Advanced Open Source Relational Database",
      },
      {
        imageURL: MySQLImg,
        heading: " mysql",
        link: "https://www.mysql.com/",
        description:
          " MySQL is a widely used RDBMS. MySQL is ideal for both small and large applications.",
      },
      {
        imageURL: FirebaseImg,
        heading: " Firebase",
        link: "https://firebase.google.com/",
        description:
          "Firebase is a platform developed by Google for creating mobile and web applications. ",
      },
      {
        imageURL: GraphQLImg,
        heading: "graqphql ",
        link: "https://graphql.org/",
        description:
          " GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need",
      },
    ],
    whatyoulearn: [
      "HTML, CSS, Bootstrap, React.JS",
      "HTML, CSS, Bootstrap, Angular.JS",
    ],
    duration: 6,
    fees: 82999,
    emidetails: [
      {
        duration: 3,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
      {
        duration: 6,
        registration: 5000,
        aftertendays: 18642,
        secondinstallment: 23642,
        thirdinstallment: 23642,
        total: 85926,
      },
    ],
  },
];
export const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Courses",
    url: "/our-courses",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    title: "Services",
    url: "/our-services",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
];
export const refundCancelPolicy = [
  {
    li: "Service Cancellation:",
  },
  {
    li: "a. If you wish to cancel a service, please contact our customer support team at My Tech Professionals2023@gmail.com as soon as possible.",
  },
  {
    li: "b. Cancellation requests must be made within 10 days from the date of purchase or before the service delivery, whichever comes first.",
  },
  {
    li: "c. Any cancellation request received after the specified time period may not be honored, and you may be subject to applicable fees or charges. ",
  },
  {
    li: "Product Cancellation:",
  },
  {
    li: "a. If you wish to cancel a product order, please contact our customer support team at My Tech Professionals2023@gmail.com within 10 days of placing the order.",
  },
  {
    li: "b. Product cancellations may be subject to restocking fees or other applicable charges as outlined in the terms and conditions of the specific product.",
  },
  {
    li: "Refund Policy:",
  },
  {
    li: "Eligibility:",
  },
  {
    li: "a. Refunds are only applicable for cancellations made within the specified time period mentioned in the cancellation policy.",
  },
  {
    li: "b. Services or products that have already been delivered, used, or consumed are not eligible for a refund unless otherwise specified in the terms and conditions.",
  },
  {
    li: "Refund Process:",
  },
  {
    li: "a. To request a refund, please contact our customer support team at My Tech Professionals2023@gmail.com and provide the necessary information, including the order number, reason for the refund, and any supporting documentation.",
  },
  {
    li: "b. Refund requests will be reviewed and processed within 10 business days from the date of receipt of the request.",
  },
  {
    li: "c. Approved refunds will be issued using the original payment method unless otherwise agreed upon by both parties.",
  },
  {
    li: "Non-refundable Items:",
  },
  {
    li: "a. Certain services or products may be marked as non-refundable, and in such cases, refunds will not be provided unless otherwise required by applicable laws.",
  },
  {
    li: "Partial Refunds:",
  },
  {
    li: "a. In some cases, partial refunds may be provided based on the specific circumstances of the cancellation or refund request. The amount of the partial refund will be determined by My Tech Professionals IT Company on a case-by-case basis. Please note that this Cancellation & Refund Policy is subject to change without prior notice. It is your responsibility to review the policy periodically for any updates or modifications. If you have any questions or need further clarification regarding our Cancellation & Refund Policy, please contact our customer support team at My Tech Professionals2023@gmail.com. We will be glad to assist you.",
  },
];



export const ourServiceData = [
  {
    img: Iomsimg,
    svg: <MobileAppDevelopmentIcon />,
    title: "Integrated Online Management System",
    desc: "An Integrated Online Management System (IOMS) is a centralized software solution designed to streamline university management processes...",
    slug: "ioms",
    detailSections: [
      {
        heading: "Core Features of IOMS",
        details: [
          "Student registration and course enrollment management.",
          "Automated grading and attendance tracking.",
          "Integrated communication tools for faculty and students.",
          "Customizable dashboards for administrators and users.",
          "Comprehensive analytics and reporting features."
        ]
      },
      {
        heading: "Benefits for Educational Institutions",
        details: [
          "Streamlined administrative processes reduce manual work.",
          "Enhanced data accuracy and real-time updates.",
          "Improved collaboration between departments and stakeholders.",
          "Secure data storage with easy retrieval options.",
          "Scalability to accommodate growing institutions."
        ]
      }
    ]
  },
  {
    img: Emailhost,
    svg: <MobileAppDevelopmentIcon />,
    title: "Email Hosting",
    desc: "Email hosting is a service that enables businesses and individuals to send and receive emails using their domain name...",
    slug: "email_hosting",
    detailSections: [
      {
        heading: "Key Features of Email Hosting",
        details: [
          "Custom email addresses with your domain name.",
          "Advanced spam and malware protection.",
          "Generous storage capacity for emails and attachments.",
          "Support for IMAP, POP3, and SMTP protocols.",
          "Mobile and desktop client compatibility."
        ]
      },
      {
        heading: "Advantages of Professional Email Hosting",
        details: [
          "Enhances brand credibility with custom domains.",
          "Ensures data security with encrypted communication.",
          "Scales with business growth for additional users.",
          "24/7 technical support for uninterrupted service.",
          "Automatic backups prevent data loss."
        ]
      }
    ]
  },
  {
    img: LinuxMail,
    svg: <BackEndDevelopmentIcon />,
    title: "Linux Mail Server",
    desc: "A Linux Mail Server is a robust and reliable solution for handling enterprise email communication...",
    slug: "linux_mail_server",
    detailSections: [
      {
        heading: "Core Capabilities of a Linux Mail Server",
        details: [
          "Highly configurable with open-source software like Postfix or Exim.",
          "Advanced spam filtering and email routing.",
          "Supports SSL/TLS encryption for secure communication.",
          "Seamless integration with LDAP and directory services.",
          "Flexible user management and domain handling."
        ]
      },
      {
        heading: "Why Choose a Linux Mail Server?",
        details: [
          "Cost-effective and resource-efficient solution.",
          "Scalability for small to enterprise-level deployments.",
          "High reliability with minimal downtime.",
          "Community support for troubleshooting and updates.",
          "Customizable to fit specific organizational needs."
        ]
      }
    ]
  },
  {
    img: WebApp,
    svg: <WordPressDevelopmenticon />,
    title: "Web Application",
    desc: "Web applications are dynamic, interactive platforms that run on web browsers, providing users with advanced functionality...",
    slug: "web_application",
    detailSections: [
      {
        heading: "Features of Web Applications",
        details: [
          "Responsive design for seamless user experiences on all devices.",
          "Integration with APIs for enhanced functionality.",
          "Real-time data processing and updates.",
          "User authentication and role-based access control.",
          "Custom dashboards and analytics features."
        ]
      },
      {
        heading: "Industries Benefiting from Web Applications",
        details: [
          "E-commerce platforms for selling products and services online.",
          "Healthcare applications for patient management and telemedicine.",
          "Educational portals for online learning and course management.",
          "Corporate tools for HR, finance, and project management.",
          "Entertainment platforms for streaming and content delivery."
        ]
      }
    ]
  },
  {
    img: WebHost,
    svg: <BlockchainDevelopmenticon />,
    title: "Website Hosting",
    desc: "Website hosting is the backbone of any online presence, providing the necessary infrastructure to make websites accessible...",
    slug: "website_hoisting",
    detailSections: [
      {
        heading: "Website Hosting Plans and Features",
        details: [
          "Shared hosting for small websites and blogs.",
          "VPS and dedicated hosting for high-traffic sites.",
          "Cloud hosting for scalability and reliability.",
          "Unlimited bandwidth and SSD storage.",
          "Free SSL certificates and DDoS protection."
        ]
      },
      {
        heading: "Benefits of Choosing Professional Hosting",
        details: [
          "24/7 technical support to resolve issues promptly.",
          "Automatic backups to secure your data.",
          "High-speed servers for fast website performance.",
          "Customizable plans to suit business needs.",
          "Advanced security features to protect against cyber threats."
        ]
      }
    ]
  },
  {
    img: WebDesignandDevelop,
    svg: <WordPressDevelopmenticon />,
    title: "Web Designing and Development",
    desc: "Web designing and development are crucial for creating a strong online presence...",
    slug: "web_designing_and_development",
    detailSections: [
      {
        heading: "Design and Development Services",
        details: [
          "Custom UI/UX design for engaging interfaces.",
          "Responsive design for all devices and platforms.",
          "SEO-optimized websites to rank higher in search engines.",
          "Integration with third-party tools and APIs.",
          "E-commerce development with secure payment gateways."
        ]
      },
      {
        heading: "Why Choose Us for Web Design and Development?",
        details: [
          "Experienced team of designers and developers.",
          "Tailored solutions to match business goals.",
          "Focus on performance, speed, and security.",
          "Ongoing support and maintenance services.",
          "Cutting-edge technology stack for innovative solutions."
        ]
      }
    ]
  }
];


export const ourteam = [
  {
    img: Man,
    name: "Vikas",
    job: "CEO & Founder",
  },
  {
    img: Man1,
    name: "Vidya ",
    job: "Front-End-Developer",
  },
  {
    img: girl,
    name: "Pooja",
    job: "Ui/Ux Designer",
  },

  {
    img: Man2,
    name: "Asif ",
    job: "Full-Stack-Developer",
  },
  {
    img:Man4,
    name: "Kismat ",
    job: "Front-End Developer",
  },
  {
    img: Man,
    name: "Sahil  ",
    job: "Back-End-Developer",
  },
 
  // {
  //   img: "/img/team/team-img-7.png",
  //   name: "Yash",
  //   job: "Front-End-Developer",
  // },

  {
    img: girl1,
    name: "Alka",
    job: "UI/UX Designer",
  },
  {
    img: girl,
    name: "Preeti",
    job: "UI/UX Designer",
  },
];

export const ourCourses = [
  {
    img: frontenddeveloper,
    courses: "Front End Development",
    link: "/course/frontend",
    desc: "My Tech Professionals offers comprehensive front-end developer courses designed to equip individuals with the skills and knowledge necessary to excel in the rapidly evolving field of web development. Our courses are crafted by industry experts and cover the latest front-end technologies and best practices.",
  },
  {
    img: backenddeveloper,
    courses: "Back End Development",
    link: "/course/backend",
  
    desc: "My Tech Professionals offers comprehensive back-end development courses that empower individuals with the skills and expertise needed to excel in the dynamic field of web development. Our courses are designed by industry professionals and cover a wide range of back-end technologies and concepts. In our back-end development courses, participants will dive deep into server-side programming languages such as Python, Ruby, or Node.js. They will learn how to design and implement robust back-end architectures, handle data storage and retrieval, and build secure and scalable web applications.",
  },
  {
    img: uiux,
    courses: "UI/UX Designing",
    link: "/course/ui-ux",
  
    desc: "My Tech Professionals offers comprehensive UI/UX designing courses designed to equip individuals with the skills and knowledge necessary to excel in the field of user experience and user interface design. Our courses are crafted by industry experts and cover the latest design principles, tools, and techniques. They will gain a deep understanding of user research methodologies, information architecture, wireframing, prototyping, and usability testing. Through hands-on projects and practical exercises, students will apply these concepts to design user-centered interfaces for websites, applications, and other digital products.",
  },
  {
    img: appdeveloper,
    courses: "App Development",
    link: "/course/mobile-app",
  
    desc: "Master the Art of App Development with My Tech Professionals , Are you ready to embark on a journey to become a skilled app developer? My Tech Professionals offers comprehensive app development courses designed to equip you with the knowledge and skills needed to create innovative and high-quality mobile applications. Whether you're a beginner or an experienced programmer, our courses cater to all skill levels.",
  },
  {
    img: appdeveloper,
    courses: "Full Stack Development",
    link: "/course/fullstack",
  
    desc: "Become an unbeatable Full Stack Developer with My Tech Professionals, At My Tech Professionals, we offer comprehensive and immersive full stack development courses designed to equip you with the skills and knowledge needed to excel in the dynamic field of web development. Our courses cover the entire spectrum of front-end and back-end technologies, allowing you to become a well-rounded and versatile full stack developer.",
  },
];
export const fourCard = [
  {
    img: "/img/courses/frontend-card-cours.png",
    heading: "Frontend Development",
    decs: "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words",
  },
  {
    img: "/img/courses/backend-card-cours.png",
    heading: "UI/UX Design",
    decs: "Repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    img: "/img/courses/fullstack-card-cours.png",
    heading: "Full Stack Development",
    decs: "packages and web page editors now use Lorem Ipsum as their default model text, and a search fo",
  },
];
export const portifolioDataList = [
  {
    li: "All Portofolio",
  },
  {
    li: "Featured",
  },
  {
    li: "Websites",
  },
  {
    li: "Mobile App",
  },
  {
    li: "UX - User Experience",
  },
  {
    li: "Print & Logos",
  },
  {
    li: "Ecommerce",
  },
];
