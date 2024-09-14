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
  activities: string[];
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

export interface ResumeType {
  profile: ProfileType;
  skills: string[];
  about: string[];
  experience: ExperienceType[];
  projects: ProjectType[];
  education: EducationType[];
}

const resume: ResumeType = {
  profile: {
    name: 'Jehiel Martinez',
    label: 'Software Developer / Electrical Engineer',
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
  skills: [
    'Javascript',
    'Typescript',
    'React',
    'NextJS',
    'React Native',
    'NodeJS',
    'NestJS',
    'AWS Architect',
    'Azure',
    'Docker',
    'Github Actions',
    'Pulumi',
    'Fastlane'
  ],
  about: [
    "As a software engineer, I specialize in **Cloud Engineering** and **DevOps**, focusing on scalable solutions that enhance operational efficiency. My expertise encompasses extensive work with **AWS** and **Azure**, where I have utilized tools like **AWS CDK** and **Pulumi** for Infrastructure as Code (IaC) to automate the provisioning and management of cloud resources.\n",
    "My expertise also includes automating **CI/CD pipelines** for both **Android** and **iOS** applications ensuring efficient and hassle-free app store deployments\n",
    "In addition to my cloud and DevOps experience, I have led the development of innovative applications using **React Native** and **ReactJS**. I also have a strong foundation in backend technologies, utilizing **NestJS**, **NodeJS**, **Docker**, and serverless architectures to deliver high-quality software solutions.\n",
    "I am passionate about utilizing technology to solve complex problems and continuously strive to improve processes through automation and innovation."
  ],
  experience: [
    {
      company: 'CODE Exitos',
      logo: './images/codexitos.png',
      website: 'https://codexitos.com',
      position: 'Engineering Manager',
      startDate: '1/11/2020',
      endDate: 'now',
      activities: [
        'Main cloud engineer on the migration of antiquated AWS infrastructure for a large company to a modern, scalable solution utilizing AWS CDK for Infrastructure as Code',
        'Lead Engineer in creating a decentralized social media platform utilizing React Native and NestJS API, dockerized and deployed on Raspberry Pi SBCs and AWS EC2 servers. Responsibilities included leading and building the project, constructing the AWS infrastructure with AWS CDK, and implementing deployment automation for the entire platform using AWS services to deploy individual isolated servers on demand.',
        'Deployed multiple environments for a .NET and Angular application on Azure services, utilizing Pulumi for Infrastructure as Code (IaC) to provision and configure cloud resources. I implemented continuous delivery (CD) pipelines using GitHub Actions, automating the build, test, and deployment workflows.'
      ]
    },
    {
      company: 'CODE Exitos',
      logo: './images/codexitos.png',
      website: 'https://codexitos.com',
      position: 'Software Engineer',
      startDate: '1/11/2019',
      endDate: '1/11/2020',
      activities: [
        'Served as the Lead Engineer in developing an outdoor-social application utilizing React Native for frontend and ReactJS for the CMS, backed by AWS Amplify. Successfully published the application manually on both the App Store and Play Store.',
        'Lead Engineer in creating a local marketing application for OSU students using React Native, published on both the App Store and Play Store. Employed Fastlane and ReactJS for Backoffice management, with a backend comprising AWS Amplify services and AWS Lambda serverless functions.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: './images/beco.png',
      website: 'https://beco.hn',
      position: 'Plant Operations Supervisor Engineer',
      startDate: '16/02/2016',
      endDate: '31/10/2019',
      activities: [
        'Ensure the correct operation of all equipments on plant.',
        'Supervise and assign tasks to field technician operators daily.',
        'Plan and execute daily equipment field inspections.',
        'Report and optimize production, consumption, and performance values.',
        'Create the Operations Manual for every equipment in plant.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: './images/beco.png',
      website: 'https://beco.hn',
      position: 'Turbine Operation Engineer',
      startDate: '09/02/2016',
      endDate: '15/06/2016',
      activities: [
        'Ensure the reliable operation of a 35MW steam turbine and generator unit.',
        'Attend and control emergencies like homeloads, blackouts, or operation failures.',
        'Supervise the correct maintenance and operation of equipment during shutdowns.'
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
