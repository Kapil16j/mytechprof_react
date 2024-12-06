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

// productdata iamges 

import IUMSimg from "../../assets/img/products/iums.jpg"
import Ddcimg from "../../assets/img/products/ddc.jpg"
import Evconnectimg from "../../assets/img/products/evconnect.jpg"
import Onscreenimg from "../../assets/img/products/onscreen.jpg"
import Pdsimg from "../../assets/img/products/pds.jpg"
import Ruralimg from "../../assets/img/products/rural.jpg"
import Transportimg from "../../assets/img/products/transport.jpg"

import Urbanimg from "../../assets/img/products/urban.jpg"

import Sfcsimg from "../../assets/img/products/sfcs.jpg"
import Stateimg from "../../assets/img/products/state.jpg"
import Biometricimg from "../../assets/img/products/biometric.jpg"

// solutions image 

import Asstesimg from "../../assets/img/solutions/assests.jpg"
import Biimg from "../../assets/img/solutions/bi.jpg"
import Crmimg from "../../assets/img/solutions/crm.jpg"
import Financeimg from "../../assets/img/solutions/finance.jpg"
import Geoimg from "../../assets/img/solutions/geo.jpg"
import Humanimg from "../../assets/img/solutions/human.jpg"
import Knowlegeimg from "../../assets/img/solutions/knowlege.jpg"
import Microsoftimg from "../../assets/img/solutions/microsoft.jpg"
import Operationimg from "../../assets/img/solutions/operation.webp"
import Purchaseimg from "../../assets/img/solutions/purchase.jpg"
import Securityimg from "../../assets/img/solutions/security.jpg"






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


export const productData = [
  {
    title: "Integrated University Management System (IUMS)",
    url: "#",
    desc: "A comprehensive solution for managing university operations including student data, courses, grades, and communication.",
    slug: "iums",
    img: IUMSimg,
    detailSections: [
      {
        heading: "Core Features of IUMS",
        details: [
          "Centralized student and course management.",
          "Automated grading and attendance.",
          "Integrated communication tools for faculty and students.",
          "Customizable dashboards for administrators.",
          "Comprehensive analytics and reporting."
        ]
      },
      {
        heading: "Benefits of IUMS",
        details: [
          "Streamlined academic and administrative processes.",
          "Real-time updates and data accuracy.",
          "Improved collaboration among departments.",
          "Secure data management.",
          "Scalable to accommodate growing institutions."
        ]
      }
    ]
  },
  {
    title: "Onscreen Evaluation Based Examination System",
    url: "#",
    desc: "An online platform for conducting and evaluating exams with automated grading and real-time feedback.",
    slug: "onscreen_evaluation_system",
    img: Onscreenimg,
    detailSections: [
      {
        heading: "Key Features of the Evaluation System",
        details: [
          "Automated exam grading and instant feedback.",
          "Support for multiple question formats (MCQ, short answer, etc.).",
          "Secure and customizable exam settings.",
          "Integration with learning management systems.",
          "Real-time reporting and analytics."
        ]
      },
      {
        heading: "Benefits of the Evaluation System",
        details: [
          "Reduces manual grading efforts.",
          "Ensures fairness and transparency.",
          "Facilitates remote exam management.",
          "Quickly identifies areas for student improvement.",
          "Scales for large numbers of students."
        ]
      }
    ]
  },
  {
    title: "eVetConnect",
    url: "#",
    desc: "A platform designed for seamless communication and coordination in veterinary care, connecting practitioners and patients.",
    slug: "evetconnect",
    img: Evconnectimg,
    detailSections: [
      {
        heading: "Core Features of eVetConnect",
        details: [
          "Real-time communication with patients and staff.",
          "Appointment scheduling and reminders.",
          "Electronic medical records for animals.",
          "Integrated telemedicine features for remote consultations.",
          "Detailed reports and analytics on patient care."
        ]
      },
      {
        heading: "Benefits of eVetConnect",
        details: [
          "Improved patient care with centralized records.",
          "Efficient scheduling and resource management.",
          "Enhanced communication between practitioners and clients.",
          "Scalable for large veterinary practices.",
          "Secure data storage with compliance to healthcare standards."
        ]
      }
    ]
  },
  {
    title: "Digital Document Circulation (DDC)",
    url: "#",
    desc: "A digital solution for managing, circulating, and archiving documents securely within an organization.",
    slug: "ddc",
    img: Ddcimg,
    detailSections: [
      {
        heading: "Key Features of DDC",
        details: [
          "Secure document circulation across departments.",
          "Automated document approval workflows.",
          "Version control and tracking.",
          "Audit trails for document access and modification.",
          "Cloud-based storage for easy access."
        ]
      },
      {
        heading: "Benefits of DDC",
        details: [
          "Enhanced document security and privacy.",
          "Reduced manual paperwork and errors.",
          "Streamlined internal processes.",
          "Improved collaboration and efficiency.",
          "Compliance with legal and regulatory requirements."
        ]
      }
    ]
  },
  {
    title: "Transport Management System (TMS)",
    url: "#",
    desc: "A comprehensive system to manage and optimize transportation operations, from scheduling to route planning and tracking.",
    slug: "tms",
    img: Transportimg,
    detailSections: [
      {
        heading: "Key Features of TMS",
        details: [
          "Real-time vehicle tracking and fleet management.",
          "Route optimization for cost and time savings.",
          "Scheduling and dispatching of transport services.",
          "Inventory and delivery management.",
          "Detailed reports and analytics."
        ]
      },
      {
        heading: "Benefits of TMS",
        details: [
          "Improved efficiency and reduced operational costs.",
          "Real-time monitoring and performance tracking.",
          "Enhanced customer service with timely deliveries.",
          "Increased safety and compliance with regulations.",
          "Scalability to support growing transportation needs."
        ]
      }
    ]
  },
  {
    title: "Public Distribution System (PDS)",
    url: "#",
    desc: "A solution for managing the distribution of food and essential goods to the public in an organized and transparent manner.",
    slug: "pds",
    img: Pdsimg,
    detailSections: [
      {
        heading: "Core Features of PDS",
        details: [
          "Real-time monitoring of distribution processes.",
          "Inventory management for food and essential goods.",
          "Secure and transparent beneficiary registration.",
          "Automated distribution and tracking of goods.",
          "Comprehensive reporting and data analytics."
        ]
      },
      {
        heading: "Benefits of PDS",
        details: [
          "Ensures fair and equitable distribution of goods.",
          "Minimizes fraud and distribution inefficiencies.",
          "Improved transparency and accountability.",
          "Optimized inventory management.",
          "Easier access to essential goods for beneficiaries."
        ]
      }
    ]
  },
  {
    title: "Rural Empowerment Solution (RES)",
    url: "#",
    desc: "A platform designed to empower rural communities through digital solutions, providing access to essential services and information.",
    slug: "res",
    img: Ruralimg,
    detailSections: [
      {
        heading: "Key Features of RES",
        details: [
          "Access to government schemes and services.",
          "Education and skill development resources.",
          "Health and wellness information.",
          "Connectivity for rural areas through mobile platforms.",
          "Community building and support networks."
        ]
      },
      {
        heading: "Benefits of RES",
        details: [
          "Promotes economic development in rural areas.",
          "Enhances access to education and healthcare.",
          "Reduces rural-urban divide.",
          "Empowers rural communities with digital tools.",
          "Improves government service delivery to remote areas."
        ]
      }
    ]
  },
  {
    title: "Urban Development Solution (UDS)",
    url: "#",
    desc: "A solution for managing urban infrastructure and development, ensuring smart city initiatives and sustainable growth.",
    slug: "uds",
    img: Urbanimg,
    detailSections: [
      {
        heading: "Core Features of UDS",
        details: [
          "Smart city planning and development.",
          "Urban infrastructure management (roads, utilities, etc.).",
          "Sustainable energy and waste management solutions.",
          "Traffic and public transport optimization.",
          "Data-driven decision-making with real-time analytics."
        ]
      },
      {
        heading: "Benefits of UDS",
        details: [
          "Improves urban infrastructure and quality of life.",
          "Fosters sustainable growth and environmental protection.",
          "Enhances mobility and accessibility in cities.",
          "Boosts economic development through smart technologies.",
          "Promotes better governance and citizen engagement."
        ]
      }
    ]
  },
  {
    title: "State Mining & Geology Department Solution",
    url: "#",
    desc: "A specialized solution for managing mining operations and geological data, ensuring compliance and sustainability.",
    slug: "mining_geology",
    img: Stateimg,
    detailSections: [
      {
        heading: "Key Features of Mining & Geology Solution",
        details: [
          "Mining operations and resource management.",
          "Geological survey and data management.",
          "Compliance monitoring and reporting.",
          "Sustainability and environmental impact analysis.",
          "Integrated mapping and GIS tools."
        ]
      },
      {
        heading: "Benefits of the Mining & Geology Solution",
        details: [
          "Ensures legal and regulatory compliance.",
          "Optimizes resource extraction and usage.",
          "Minimizes environmental impact and risks.",
          "Enhances reporting and decision-making.",
          "Supports long-term sustainability in mining operations."
        ]
      }
    ]
  },
  {
    title: "State Forest Corporations Solution (SFCS)",
    url: "#",
    desc: "A solution for managing forest resources and activities within state forest corporations, promoting sustainability and conservation.",
    slug: "sfcs",
    img: Sfcsimg,
    detailSections: [
      {
        heading: "Core Features of SFCS",
        details: [
          "Forest resource management and tracking.",
          "Sustainable logging and conservation practices.",
          "Mapping and GIS tools for forest areas.",
          "Wildlife monitoring and management.",
          "Collaboration with environmental agencies."
        ]
      },
      {
        heading: "Benefits of SFCS",
        details: [
          "Supports sustainable forest management.",
          "Enhances environmental conservation efforts.",
          "Improves compliance with forest regulations.",
          "Facilitates real-time monitoring of forest activities.",
          "Promotes biodiversity and wildlife protection."
        ]
      }
    ]
  },
  {
    title: "Biometric Smart Card Solution (BSCS)",
    url: "#",
    desc: "A biometric-based smart card solution for secure access, identification, and transaction processing.",
    slug: "bscs",
    img: Biometricimg,
    detailSections: [
      {
        heading: "Key Features of BSCS",
        details: [
          "Biometric authentication for secure access.",
          "Smart card-based transaction processing.",
          "Integration with identity management systems.",
          "Real-time monitoring and reporting of activities.",
          "High-level security protocols and encryption."
        ]
      },
      {
        heading: "Benefits of BSCS",
        details: [
          "Increased security and fraud prevention.",
          "Streamlined access control and transaction systems.",
          "Improved user convenience with biometric authentication.",
          "Seamless integration with existing systems.",
          "Scalable for large organizations or government systems."
        ]
      }
    ]
  }
];


export const solutionsData = [
  {
    slug: "finance-and-accounting",
    category: "Finance and Accounting",
    image: Financeimg,
    title: "Finance and Accounting",
    description: "In the fast-paced world of finance, businesses need reliable, efficient, and accurate financial tools to manage their day-to-day operations. Our Finance and Accounting solutions provide a comprehensive suite of services designed to help you automate and streamline your financial processes. From real-time financial monitoring to automated invoicing and tax reporting, our platform ensures that your accounting operations run smoothly. With features like budgeting tools and financial forecasting, you can easily predict and plan for the future, keeping your business on track and compliant. Whether you’re a small business or a large corporation, our solution adapts to meet your unique financial management needs, empowering your team to focus on growth rather than manual calculations and record-keeping.",
    features: [
      "Real-time financial monitoring",
      "Automated invoicing and payments",
      "Budgeting and financial forecasting",
      "Tax calculation and reporting"
    ],
    otherDetails: {
      industry: "Finance",
      targetAudience: "CFOs, accountants, financial analysts",
      relatedSolutions: ["ERP Solutions", "Audit and Compliance"]
    }
  },
  {
    slug: "human-resource-management",
    category: "Human Resource Management",
    image: Humanimg,
    title: "Human Resource Management",
    description: "Human Resource Management (HRM) is crucial to the success of any business. Efficient HRM systems ensure that employee relations, payroll, benefits, performance management, and compliance are handled seamlessly. Our HRM solution offers a complete toolset to help you manage the entire employee lifecycle from recruitment to retirement. With features like payroll automation, time tracking, and performance management, your HR team can focus on strategic initiatives while leaving the operational work to the system. The platform also offers robust compliance features, ensuring that you meet all legal and regulatory requirements. By automating many of the time-consuming tasks associated with HRM, businesses can improve productivity, reduce human error, and provide a better experience for both employees and managers.",
    features: [
      "Employee lifecycle management",
      "Payroll automation",
      "Time tracking and attendance",
      "Performance and talent management"
    ],
    otherDetails: {
      industry: "Human Resources",
      targetAudience: "HR managers, HR administrators",
      relatedSolutions: ["Payroll Solutions", "Employee Engagement"]
    }
  },
  {
    slug: "purchase-management",
    category: "Purchase Management",
    image: Purchaseimg,
    title: "Purchase Management",
    description: "Efficient purchase management is vital for maintaining a steady flow of goods and services, while minimizing costs and delays. Our Purchase Management solution is designed to simplify procurement processes, from supplier management to order processing. With features like automated order generation, purchase order approvals, and inventory tracking, our solution ensures that your business can maintain optimal stock levels while minimizing overstocking and stockouts. The system integrates seamlessly with your existing operations, providing visibility into every step of the procurement process. It also streamlines supplier communication, making it easier to build and maintain strong, reliable supplier relationships. By automating manual tasks and providing detailed analytics, businesses can improve their procurement efficiency, negotiate better deals, and reduce operational costs.",
    features: [
      "Supplier management and relationships",
      "Automated order generation",
      "Inventory tracking",
      "Purchase order approvals"
    ],
    otherDetails: {
      industry: "Retail, Manufacturing",
      targetAudience: "Purchasing managers, supply chain coordinators",
      relatedSolutions: ["Inventory Management", "Vendor Management"]
    }
  },
  {
    slug: "operations-management",
    category: "Operations Management",
    image: Operationimg,
    title: "Operations Management",
    description: "Operations management is at the core of any successful business, ensuring that processes run efficiently and resources are utilized optimally. Our Operations Management solution offers tools for process optimization, workflow automation, and performance analytics to help you manage your operations with precision and agility. Whether it’s tracking inventory, improving production timelines, or ensuring the best allocation of resources, our system provides real-time insights to make data-driven decisions. The platform also allows you to automate routine tasks, freeing up your team to focus on higher-value activities. By improving visibility across all operations, businesses can achieve better control over costs, increase productivity, and respond faster to changing demands.",
    features: [
      "Workflow automation",
      "Performance analytics",
      "Process improvement tools",
      "Resource optimization"
    ],
    otherDetails: {
      industry: "Manufacturing, Logistics",
      targetAudience: "COOs, operations managers",
      relatedSolutions: ["Supply Chain Management", "Workflow Automation"]
    }
  },
  {
    slug: "asset-inventory-management",
    category: "Asset & Inventory Management",
    image: Asstesimg,
    title: "Asset & Inventory Management",
    description: "Managing physical assets and inventory is a critical part of any business’s operations. Our Asset & Inventory Management solution helps businesses track, manage, and optimize their assets in real time. With capabilities like barcode and RFID integration, automated stock replenishment, and lifecycle management, businesses can ensure that their assets are always accounted for and utilized efficiently. The system provides full visibility into your asset and inventory levels, helping you avoid stockouts or overstocking. You can also track the entire lifecycle of assets, from acquisition to disposal. With detailed reporting features, businesses can analyze trends, forecast demand, and make more informed procurement decisions.",
    features: [
      "Real-time asset tracking",
      "Barcode and RFID integration",
      "Inventory replenishment",
      "Asset lifecycle management"
    ],
    otherDetails: {
      industry: "Retail, Manufacturing",
      targetAudience: "Asset managers, inventory specialists",
      relatedSolutions: ["Supply Chain Solutions", "Warehouse Management"]
    }
  },
  {
    slug: "knowledge-management",
    category: "Knowledge Management",
    image: Knowlegeimg,
    title: "Knowledge Management",
    description: "Knowledge is one of the most valuable assets a company can possess. Effective Knowledge Management (KM) systems help organizations capture, share, and leverage their knowledge to improve decision-making, innovation, and collaboration. Our KM solution provides tools to build comprehensive knowledge bases, facilitate collaborative workspaces, and manage documents efficiently. With powerful search and retrieval systems, employees can easily access the information they need, improving productivity and reducing redundancies. The system also supports content creation, organization, and sharing, enabling teams to work together more effectively. By consolidating your organization's intellectual assets in a centralized system, you can foster a culture of continuous learning and improvement.",
    features: [
      "Knowledge base creation",
      "Collaborative platforms",
      "Document management",
      "Search and retrieval systems"
    ],
    otherDetails: {
      industry: "Technology, Education",
      targetAudience: "Knowledge managers, training departments",
      relatedSolutions: ["Learning Management Systems", "Document Collaboration"]
    }
  },
  {
    slug: "crm-customer-service-call-center-sales-automation",
    category: "CRM - Customer Service, Call Center & Sales Automation",
    image: Crmimg,
    title: "CRM - Customer Service, Call Center & Sales Automation",
    description: "Managing customer relationships is crucial for business success, and our CRM solution is designed to automate and enhance your customer service and sales processes. With integrated call center functionality, your team can handle customer queries, track service requests, and automate repetitive tasks. The solution also includes tools for managing sales pipelines, automating lead generation, and tracking customer interactions, ensuring that no opportunity is missed. Additionally, it integrates with existing systems to provide a unified view of your customer data. By improving communication, streamlining service workflows, and providing real-time data insights, businesses can increase customer satisfaction, enhance retention rates, and drive sales growth.",
    features: [
      "Customer service automation",
      "Sales pipeline management",
      "Call center integration",
      "Lead generation and tracking"
    ],
    otherDetails: {
      industry: "Sales, Customer Support",
      targetAudience: "Sales managers, customer service teams",
      relatedSolutions: ["Salesforce Automation", "Customer Support Systems"]
    }
  },
  {
    slug: "security-surveillance",
    category: "Security & Surveillance",
    image: Securityimg,
    title: "Security & Surveillance",
    description: "In today’s world, security is a top priority for businesses, especially when it comes to protecting physical and intellectual assets. Our Security & Surveillance solution offers state-of-the-art technology for monitoring and safeguarding your business. The system includes real-time video surveillance, access control systems, and incident reporting tools that help you maintain a secure environment. It integrates with various devices, providing you with remote access to live feeds, alerts, and incident logs. With advanced features such as motion detection and facial recognition, you can ensure that your premises are constantly monitored. By utilizing our comprehensive security solutions, businesses can mitigate risks, prevent theft, and ensure the safety of employees and customers.",
    features: [
      "Real-time video monitoring",
      "Access control systems",
      "Incident reporting",
      "Remote surveillance"
    ],
    otherDetails: {
      industry: "Security, Retail, Manufacturing",
      targetAudience: "Security managers, facility managers",
      relatedSolutions: ["Surveillance Cameras", "Access Control Systems"]
    }
  },
  {
    slug: "bi-data-warehousing",
    category: "BI and Data Warehousing",
    image: Biimg,
    title: "BI and Data Warehousing",
    description: "Business Intelligence (BI) and Data Warehousing are key to making informed business decisions. Our BI and Data Warehousing solutions help businesses collect, analyze, and store vast amounts of data, transforming raw information into valuable insights. By integrating with various data sources, our platform consolidates data into a central repository, making it easier to access and analyze. With built-in reporting and analytics tools, businesses can generate actionable insights on demand. Whether it's tracking key performance indicators (KPIs), creating custom dashboards, or performing predictive analysis, our BI solution ensures that you have the data you need to make smarter decisions. By improving access to data and streamlining reporting, businesses can improve efficiency, uncover new opportunities, and optimize their operations.",
    features: [
      "Centralized data storage",
      "Custom reporting and dashboards",
      "Predictive analytics",
      "Data integration with various sources"
    ],
    otherDetails: {
      industry: "Technology, Finance",
      targetAudience: "Data analysts, business intelligence teams",
      relatedSolutions: ["Data Analytics", "Reporting Solutions"]
    }
  },
  {
    slug: "geo-spatial-services-solutions",
    category: "Geo-Spatial Services & Solutions",
    image: Geoimg,
    title: "Geo-Spatial Services & Solutions",
    description: "Geo-Spatial Services and Solutions provide businesses with powerful tools to analyze, visualize, and interpret geographical data. Our platform combines advanced mapping technologies, spatial analytics, and location-based data services to deliver insights that can drive smarter decision-making. Whether you're managing assets, planning logistics, or analyzing market trends, our geo-spatial solutions provide you with the tools to analyze and visualize geographic information in real-time. With interactive maps, geolocation features, and spatial data analysis, businesses can optimize routes, manage land assets, and improve service delivery.",
    features: [
      "Mapping and spatial analytics",
      "Geolocation and tracking",
      "Real-time data visualization",
      "Location-based insights"
    ],
    otherDetails: {
      industry: "Logistics, Real Estate, Agriculture",
      targetAudience: "GIS analysts, logistics managers",
      relatedSolutions: ["Supply Chain Optimization", "Fleet Management"]
    }
  },
  {
    slug: "microsoft-dynamics-business-solution",
    category: "Microsoft Dynamics Business Solution",
    image: Microsoftimg,
    title: "Microsoft Dynamics Business Solution",
    description: "Microsoft Dynamics offers an integrated suite of business applications designed to help organizations manage and automate their key business processes. Our Microsoft Dynamics solution helps businesses streamline their operations, from finance and operations to customer service and marketing. With seamless integration across your business functions, you can gain better visibility into your data, improve collaboration, and make more informed decisions. Whether you're using Dynamics 365 for Finance, Sales, Marketing, or Customer Service, our solution enables businesses to improve efficiency, increase customer satisfaction, and drive growth.",
    features: [
      "Finance and operations management",
      "Sales and marketing automation",
      "Customer service integration",
      "Real-time analytics and reporting"
    ],
    otherDetails: {
      industry: "Enterprise, Technology",
      targetAudience: "CIOs, IT administrators",
      relatedSolutions: ["ERP Solutions", "CRM Systems"]
    }
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
