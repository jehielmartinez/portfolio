export interface ProfileType {
  name: string;
  label: string;
  picture: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  twitter: string;
  github: string;
  dev: string;
  linkedin: string;
  codepen: string;
}

export interface ExperienceType {
  company: string;
  logo: string;
  website: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  activities: string[];
  hidden?: boolean;
}

export interface ProjectType {
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface EducationType {
  institution: string;
  degree: string;
  logo: string;
  startDate: string;
  endDate: string;
  website: string;
}

export interface BadgeType {
  name: string;
  image: string;
  link: string;
}

export interface ResumeType {
  profile: ProfileType;
  skills: string[];
  about: string[];
  badges: BadgeType[];
  experience: ExperienceType[];
  projects: ProjectType[];
  education: EducationType[];
}

const resume: ResumeType = {
  profile: {
    name: 'Jehiel Martinez',
    label: 'Full-Stack & Cloud Engineer',
    picture: './images/profile-picture.jpeg',
    location: 'San Pedro Sula, Honduras',
    email: 'jehielmartinez@gmail.com',
    phone: '',
    website: 'https://www.jehielmartinez.com',
    twitter: 'jehielhn',
    github: 'jehielmartinez',
    dev: 'jehielmartinez',
    linkedin: 'jehielmartinez',
    codepen: 'jehielmartinez'
  },
  badges: [
    {
      name: 'AWS Solutions Architect Associate',
      image: 'images/aws-saa.png',
      link: 'https://www.credly.com/badges/63717dcd-89f7-46d8-9da7-9eab4fc9560b/public_url'
    },
    {
      name: 'Github Actions',
      image: 'images/github-actions.png',
      link: 'https://www.credly.com/badges/56f277de-f997-40a4-a5ef-5f5346718ef9/public_url'
    }
  ],
  skills: [
    // Languages
    'JavaScript',
    'TypeScript',
    'Python',
    // Frontend
    'React',
    'Next.js',
    'Astro',
    'React Native',
    'Expo',
    // Backend
    'Node.js',
    'NestJS',
    'Express',
    'Supabase',
    'PostgreSQL',
    'Sequelize',
    // AI
    'OpenAI',
    'Gemini',
    'Claude',
    'LangChain',
    'LangGraph',
    // Cloud & DevOps
    'AWS',
    'AWS CDK',
    'Serverless',
    'Azure',
    'Pulumi',
    'Docker',
    'Kubernetes',
    'ArgoCD',
    'CI/CD',
    'GitHub Actions',
    'Fastlane',
    // Product
    'RevenueCat',
    'PostHog',
  ],
  about: [
    "I'm a software engineer who builds across the full stack and the cloud — from **React** and **React Native** front ends to **NestJS** and **NodeJS** services, down to the infrastructure they run on, and increasingly building **AI-powered products** on top of it. I care about shipping scalable, well-architected solutions that hold up in production.\n",
    "Lately, much of my work is **AI application development** — shipping production LLM features across **OpenAI**, **Google Gemini**, and **Anthropic Claude**: streaming responses, tool use, and persistent memory, served through **Supabase** Edge Functions over a **PostgreSQL** backend with authentication and row-level security.\n",
    "On the product side, I lead the development of mobile and web applications with **React Native** (**Expo**) and **ReactJS**, backed by **NestJS**, **NodeJS**, **Docker**, and serverless architectures. I own features end to end — from API design to release on the **App Store** and **Play Store**.\n",
    "On the cloud side, I specialize in **Cloud Engineering** and **DevOps** across **AWS** and **Azure**, using **AWS CDK** and **Pulumi** for Infrastructure as Code to automate provisioning and management. I also build **CI/CD pipelines** that make **Android** and **iOS** app store deployments fast and repeatable.\n",
    "I'm driven by solving complex problems with technology, and I'm always looking for ways to improve processes through automation and thoughtful engineering."
  ],
  experience: [
    {
      company: 'Caleb',
      logo: './images/caleb.png',
      website: 'https://calebfoundry.com',
      position: 'Founder & Lead Engineer',
      startDate: '14/04/2026',
      endDate: 'now',
      duration: '2 months',
      hidden: true,
      activities: [
        'Founded and solely built Caleb, an AI-powered strength coaching app — an Expo (React Native) iOS app backed by Supabase (Postgres, Auth, and Edge Functions), shipped bilingual in English and Spanish.',
        'Designed and built the AI coaching engine on a multi-model LLM setup, routed per call type through Supabase Edge Functions, with streaming responses, tool use, and persistent per-user memory.',
        'Implemented subscription billing with RevenueCat (no-card trial and paywall at expiry), product analytics and error tracking with PostHog behind a provider-agnostic telemetry layer, and a row-level-security data model on Postgres.',
        'Built and deployed the marketing and waitlist landing site in Astro.'
      ]
    },
    {
      company: 'Fortress Technology',
      logo: './images/fortress.png',
      website: 'https://www.fortresstech.io',
      position: 'Senior Software Engineer',
      startDate: '30/06/2025',
      endDate: 'now',
      duration: '1 year',
      hidden: false,
      activities: [
        'Senior full-stack engineer on a property-management and affordable-housing compliance SaaS, delivering features end to end across a Node.js/Sequelize backend, a React frontend, a shared TypeScript component library, and standalone payments and messaging microservices on AWS.',
        'Designed and built a centralized two-way SMS communication platform — a Messaging Hub with opt-in/opt-out preference management, conversation search and filtering, cursor-based pagination, real-time new-message indicators, and conversation-status sync across properties.',
        'Implemented affordable-housing compliance workflows for HUD and Rural Development programs: move-in/move-out and recertification certifications, TTP and gross-rent calculations, NAUR status triggers, a form correction workflow, and government PDF templates (HUD-50059, RD 3560-7/3560-10, and state tax-credit forms).',
        'Built duplicate prospect and lead management with a deduplication queue, row-level locking for concurrent merges, and account/profile merge resolution, and hardened accounting flows around ledgers, prorated transactions, and floor-plan conversions.',
        'Improved reliability and performance — offloaded bulk people-load operations to SQS worker queues, optimized ledger loading, gated rollouts behind feature flags, and decoupled the payments service from rent-roll loading.'
      ]
    },
    {
      company: 'Frontyard',
      logo: './images/frontyard.png',
      website: 'https://frontyardinc.com',
      position: 'Co-Founder & Lead Engineer',
      startDate: '08/03/2025',
      endDate: 'now',
      duration: '1 year 3 months',
      hidden: false,
      activities: [
        'Co-founded Frontyard and lead its engineering — a places and parks discovery app built with Expo (React Native) and Supabase, featuring maps, push notifications, and in-app subscriptions.',
        'Built CoCo, a multi-agent AI content pipeline in Python with LangChain and LangGraph that researches outdoor places and auto-generates structured location guides — orchestrating planner, researcher, verifier, organizer, and summarizer nodes with Tavily web search and automatic verification and retry logic.',
        'Generated OpenAI embeddings for the place catalog and persisted the structured results to Supabase, powering semantic, activity-based search across the app.',
        'Built a content management system for the app\'s places data using Refine, React, and Supabase, giving non-technical editors a tool to manage content.',
        'Built an interactive map plugin to display project locations on a Google Map.'
      ]
    },
    {
      company: 'CODE Exitos',
      logo: './images/codexitos.png',
      website: 'https://codexitos.com',
      position: 'Engineering Manager',
      startDate: '1/11/2020',
      endDate: '30/06/2025',
      duration: '4 years 8 months',
      hidden: false,
      activities: [
        'Led the migration of a large company\'s legacy AWS infrastructure to a modern, scalable architecture defined entirely as code with AWS CDK.',
        'Architected and led a decentralized social media platform built with React Native and a NestJS API, dockerized and deployed across Raspberry Pi SBCs and AWS EC2. Owned the project end to end — defining the AWS infrastructure with AWS CDK and automating deployment to provision isolated, on-demand servers for each instance.',
        'Provisioned and configured multiple environments for a .NET and Angular application on Azure using Pulumi for Infrastructure as Code, and built GitHub Actions pipelines to automate the build, test, and deployment workflow.'
      ]
    },
    {
      company: 'CODE Exitos',
      logo: './images/codexitos.png',
      website: 'https://codexitos.com',
      position: 'Software Engineer',
      startDate: '1/11/2019',
      endDate: '1/11/2020',
      duration: '1 year',
      hidden: false,
      activities: [
        'Lead engineer on an outdoor-social application, building the mobile app in React Native and the CMS in ReactJS, backed by AWS Amplify. Published the app to both the App Store and Play Store.',
        'Built a local marketing application for OSU students in React Native, shipped to the App Store and Play Store. Used Fastlane to automate releases and ReactJS for the back-office, with a backend of AWS Amplify services and AWS Lambda serverless functions.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: './images/beco.png',
      website: 'https://beco.hn',
      position: 'Plant Operations Supervisor Engineer',
      startDate: '16/02/2016',
      endDate: '31/10/2019',
      duration: '3 years 8 months',
      hidden: false,
      activities: [
        'Ensured the reliable operation of all plant equipment.',
        'Supervised a team of field technician operators, assigning and prioritizing their daily tasks.',
        'Planned and carried out daily field inspections of plant equipment.',
        'Tracked and optimized production, consumption, and performance metrics.',
        'Authored the operations manual for every piece of equipment in the plant.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: './images/beco.png',
      website: 'https://beco.hn',
      position: 'Turbine Operation Engineer',
      startDate: '09/02/2016',
      endDate: '15/06/2016',
      duration: '4 months',
      hidden: false,
      activities: [
        'Ensured the reliable operation of a 35MW steam turbine and generator unit.',
        'Responded to and controlled emergencies such as house-load events, blackouts, and operational failures.',
        'Supervised the maintenance and safe operation of equipment during scheduled shutdowns.'
      ]
    }
  ],
  projects: [
    {
      name: 'Oversight',
      image: 'oversight.jpg',
      description: 'Oversight is a platform created to ease the administration of residential areas in Honduras thru a mobile-based app. I developed the app in React Native, Nodejs, Express, and MongoDB. The web app was developed using ReactJS.',
      link: 'https://www.oversight.hn'
    },
    {
      name: 'Cryptos',
      image: 'cryptos.png',
      description: 'Quick check price of your favorite Cryptocurrency! React app exploring Styled Components and Hooks',
      link: 'http://jehielmartinez.github.io/cryptos'
    },
    {
      name: 'Stock Control App',
      image: 'stock-control.jpg',
      description: 'Stock Control is a web-based application to control the tool loans and material existence in the operations department local hardware store at Bijao Electric Company S.A. Created with ReactJS, MongoDB, Nodejs, Express, Bootstrap.',
      link: ''
    },
    {
      name: 'RTracker App',
      image: 'r-tracker.jpg',
      description: 'The R-Tracker stands for Responsibilities Tracker, a simple personal tool to remember and keep track of all the pending bills every fifteen days. Created with React Native, Nodejs, Express, MongoDB.',
      link: ''
    },
    {
      name: 'Playground App',
      image: 'playground.jpg',
      description: 'Playground was a start-up project to create a platform for the reservation, rent, and administration of mini soccer playing fields in Honduras. Created with Ionic4 and Firebase as backend. Web app developed in AngularJS',
      link: ''
    }
  ],
  education: [
    {
      institution: 'UNAH-VS',
      degree: 'Industrial Electrical Engineer',
      logo: 'https://i.pinimg.com/originals/d4/15/32/d415326370a671a45006fa4efe0bbac7.png',
      startDate: '1/02/2010',
      endDate: '6/12/2016',
      website: 'https://vallesula.unah.edu.hn'
    },
    {
      institution: 'Platzi',
      degree: 'ReactJS',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '01/10/2019',
      endDate: '07/10/2019',
      website: 'https://platzi.com/@jehielmartinez/curso/1651-react-ejs/diploma/detalle/'
    },
    {
      institution: 'Udemy',
      degree: 'Nodejs Developer',
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/udemy-1-logo-png-transparent.png',
      startDate: '27/05/2019',
      endDate: '25/08/2019',
      website: 'https://www.udemy.com/certificate/UC-06GTFNFL/'
    },
    {
      institution: 'FreeCodeCamp',
      degree: 'Responsive Web Design',
      logo: 'https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg',
      startDate: '01/09/2019',
      endDate: '29/09/2019',
      website: 'https://www.freecodecamp.org/certification/jehielmartinez/responsive-web-design'
    },
    {
      institution: 'Platzi',
      degree: 'Angular 4',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '10/04/2018',
      endDate: '12/05/2018',
      website: 'https://platzi.com/@jehielmartinez/curso/1153-angular-4/diploma/detalle/'
    },
    {
      institution: 'Platzi',
      degree: 'Frontend Developer',
      logo: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
      startDate: '01/09/2019',
      endDate: '26/09/2019',
      website: 'https://platzi.com/@jehielmartinez/curso/1640-frontend-developer/diploma/detalle/'
    }
  ]
};

export default resume;
