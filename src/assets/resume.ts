export interface ProfileType {
  name: string;
  label: string;
  picture: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  dev: string;
  linkedin: string;
}

export interface SkillGroupType {
  name: string;
  items: string[];
}

export interface ExperienceType {
  company: string;
  logo: string;
  website: string;
  position: string;
  /** D/M/YYYY */
  startDate: string;
  /** D/M/YYYY or 'now' */
  endDate: string;
  activities: string[];
  /** Founder ventures are listed separately from employment. */
  venture?: boolean;
  hidden?: boolean;
}

export interface ProjectType {
  name: string;
  year: string;
  description: string;
  link: string;
  tags: string[];
}

export interface EducationType {
  institution: string;
  degree: string;
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
  /** Short third-person-free summary for the PDF header. */
  summary: string;
  /** Longer first-person narrative for the website. Markdown allowed. */
  about: string[];
  skills: SkillGroupType[];
  badges: BadgeType[];
  experience: ExperienceType[];
  projects: ProjectType[];
  education: EducationType[];
}

const resume: ResumeType = {
  profile: {
    name: 'Jehiel Martinez',
    label: 'Senior Full-Stack Engineer · Mobile, Cloud & AI',
    picture: './images/profile-picture.jpeg',
    location: 'San Pedro Sula, Honduras · Remote, CST (UTC-6)',
    email: 'jehielmartinez@gmail.com',
    phone: '',
    website: 'https://www.jehielmartinez.com',
    github: 'jehielmartinez',
    dev: 'jehielmartinez',
    linkedin: 'jehielmartinez'
  },
  summary:
    'Senior full-stack engineer with 7 years shipping web, mobile, and cloud products, and 10 years of engineering overall. Founder of two App Store products built on React Native, Supabase, and multi-model LLM pipelines. I own features from API design and infrastructure as code (AWS CDK, Pulumi) through App Store and Play Store release, and I build docs-first: written specs, decision records, and CI gates. Bilingual English/Spanish.',
  about: [
    "I'm a senior full-stack engineer who ships products end to end: **React** and **React Native** clients, **Node.js** and **NestJS** services, the **AWS** infrastructure they run on, and increasingly the **LLM features** on top. I've founded two products that are live on the App Store and Play Store, and I care about software that holds up in production.\n",
    "Lately most of my work is **AI application development**: production LLM features across **Anthropic Claude**, **OpenAI**, and **Google Gemini**, with streaming, tool use, per-user memory, and per-call-type model routing, served through **Supabase** Edge Functions over **PostgreSQL** with row-level security.\n",
    "On the platform side I specialize in **Cloud Engineering** and **DevOps** on **AWS** and **Azure**, defining infrastructure as code with **AWS CDK** and **Pulumi**, and building **CI/CD** pipelines that make iOS and Android releases boring. I build docs-first, with written specs, architecture decision records, and CI gates, so humans and coding agents work from the same record.\n"
  ],
  skills: [
    { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { name: 'Frontend & Mobile', items: ['React', 'React Native', 'Expo', 'Next.js', 'Astro'] },
    { name: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Supabase', 'Sequelize'] },
    { name: 'AI', items: ['Anthropic Claude', 'OpenAI', 'Google Gemini', 'LangChain', 'LangGraph', 'Embeddings & semantic search'] },
    { name: 'Cloud & DevOps', items: ['AWS', 'AWS CDK', 'Azure', 'Pulumi', 'Serverless', 'Docker', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'EAS', 'Fastlane'] },
    { name: 'Quality & Product', items: ['Jest', 'Deno test', 'PostHog', 'RevenueCat', 'OneSignal'] }
  ],
  badges: [
    {
      name: 'AWS Solutions Architect Associate',
      image: 'images/aws-saa.png',
      link: 'https://www.credly.com/badges/63717dcd-89f7-46d8-9da7-9eab4fc9560b/public_url'
    },
    {
      name: 'GitHub Actions',
      image: 'images/github-actions.png',
      link: 'https://www.credly.com/badges/56f277de-f997-40a4-a5ef-5f5346718ef9/public_url'
    }
  ],
  experience: [
    {
      company: 'Fortress Technology',
      logo: './images/fortress.png',
      website: 'https://www.fortresstech.io',
      position: 'Senior Software Engineer',
      startDate: '30/06/2025',
      endDate: 'now',
      activities: [
        'Designed and shipped a centralized two-way SMS Messaging Hub for a property-management and affordable-housing compliance SaaS: opt-in/opt-out preference management, cursor-paginated conversation search, real-time new-message indicators, and conversation-status sync across properties.',
        'Built duplicate prospect and lead management with a deduplication queue, row-level locking for concurrent merges, and account/profile merge resolution; hardened accounting flows around ledgers, prorated transactions, and floor-plan conversions.',
        'Improved reliability and performance by offloading bulk people-load operations to SQS worker queues, optimizing ledger loading, decoupling the payments service from rent-roll loading, and gating rollouts behind feature flags.',
        'Work end to end across a Node.js/Sequelize backend, a React frontend, a shared TypeScript component library, and standalone payments and messaging microservices on AWS.'
      ]
    },
    {
      company: 'Caleb',
      logo: './images/caleb.png',
      website: 'https://calebfoundry.com',
      position: 'Founder & Sole Engineer',
      venture: true,
      startDate: '14/04/2026',
      endDate: 'now',
      activities: [
        'Designed, built, and shipped solo an AI strength-coaching app, live on the App Store and Play Store: an Expo (React Native) client, bilingual English/Spanish, on a Supabase backend of Postgres, Auth, and 15 Edge Functions with row-level security.',
        'Built the coaching engine on per-call-type model routing across Anthropic Claude and Google Gemini, with streaming responses, tool use, persistent per-user memory, and a one-line model rollback.',
        'Built the release pipeline: tagged deploys, over-the-air JS updates with EAS Update, one-click rollback of Edge Functions and OTA bundles, and CI gates that version and budget-check every prompt.',
        'Ran the product side: RevenueCat billing with a no-card trial and paywall at expiry, PostHog analytics and error tracking behind a provider-agnostic telemetry layer, push notifications via OneSignal with Supabase Cron owning the logic, and an Astro marketing site.'
      ]
    },
    {
      company: 'Frontyard',
      logo: './images/frontyard.png',
      website: 'https://frontyardinc.com',
      position: 'Co-Founder & Lead Engineer',
      venture: true,
      startDate: '08/03/2025',
      endDate: 'now',
      activities: [
        'Co-founded Frontyard and lead its engineering: a places and parks discovery app built with Expo (React Native) and Supabase, released on the App Store and Play Store, with maps, push notifications, and in-app subscriptions.',
        'Built CoCo, a multi-agent AI content pipeline in Python with LangChain and LangGraph that researches outdoor places and generates structured location guides, orchestrating planner, researcher, verifier, organizer, and summarizer nodes with Tavily web search and automatic verification and retry.',
        'Generated OpenAI embeddings for the place catalog and persisted them to Supabase, powering semantic, activity-based search across the app.',
        'Built the content management system for places data with Refine, React, and Supabase, so non-technical editors can manage content, and a WordPress plugin for Austin Parks Foundation that maps park projects with CSV import for staff.'
      ]
    },
    {
      company: 'CODE Exitos',
      logo: './images/codexitos.png',
      website: 'https://codexitos.com',
      position: 'Engineering Manager',
      startDate: '1/11/2020',
      endDate: '30/06/2025',
      activities: [
        'Led the migration of a large client\'s legacy AWS infrastructure to a modern, scalable architecture defined entirely as code with AWS CDK.',
        'Architected and led a decentralized social media platform built with React Native and a NestJS API, dockerized and deployed across Raspberry Pi SBCs and AWS EC2; owned it end to end, defining the infrastructure with AWS CDK and automating provisioning of isolated, on-demand servers per instance.',
        'Provisioned and configured multiple environments for a .NET and Angular application on Azure with Pulumi, and built GitHub Actions pipelines to automate build, test, and deployment.'
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
        'Lead engineer on an outdoor-social application: built the mobile app in React Native and the CMS in React, backed by AWS Amplify, and published it to the App Store and Play Store.',
        'Built a local marketing app for OSU students in React Native, shipped to both stores, with Fastlane-automated releases, a React back-office, and a backend of AWS Amplify services and Lambda functions.'
      ]
    },
    {
      company: 'Bijao Electric Company S.A.',
      logo: './images/beco.png',
      website: 'https://beco.hn',
      position: 'Plant Operations Supervisor Engineer',
      startDate: '09/02/2016',
      endDate: '31/10/2019',
      activities: [
        'Supervised a team of field technician operators at a thermal power plant, assigning and prioritizing daily work and owning the reliable operation of all plant equipment; promoted from Turbine Operation Engineer on a 35 MW steam turbine unit.',
        'Tracked and optimized production, consumption, and performance metrics, and authored the operations manual for every piece of equipment in the plant.',
        'Responded to and controlled emergencies such as house-load events and blackouts, and supervised safe operation during scheduled shutdowns.'
      ]
    }
  ],
  projects: [
    {
      name: 'Daily Ledger',
      year: '2026',
      description: 'Unattended daily newspaper pipeline in TypeScript: a dozen source adapters, each with a declared failure mode, one LLM editorial pass, and every figure rendered verbatim from its source, typeset with Typst and published as a dated GitHub release. Designed so a printed number can only be wrong if its source was.',
      link: 'https://github.com/jehielmartinez/daily-ledger',
      tags: ['TypeScript', 'Claude API', 'Typst', 'GitHub Actions']
    },
    {
      name: 'Alabanza',
      year: '2026',
      description: 'Battery-powered Raspberry Pi hymn-player appliance for churches: Python app with an OLED interface, keypad and encoder controls, Bluetooth and HDMI audio, a custom KiCad control PCB, and a hardware-independent test suite of about 350 tests.',
      link: 'https://github.com/jehielmartinez/alabanza',
      tags: ['Python', 'Raspberry Pi', 'KiCad', 'Embedded']
    },
    {
      name: 'claude-kit',
      year: '2026',
      description: 'Claude Code plugin that standardizes a worktree-per-issue development loop across repositories: shared conventions, a ticket-to-PR skill, a docs audit skill, and a multi-agent workflow that builds every sub-issue of a spec in dependency order.',
      link: 'https://github.com/jehielmartinez/claude-kit',
      tags: ['Agentic workflows', 'Developer tooling']
    }
  ],
  education: [
    {
      institution: 'Universidad Nacional Autónoma de Honduras (UNAH-VS)',
      degree: 'B.Sc. Industrial Electrical Engineering',
      startDate: '1/02/2010',
      endDate: '6/12/2016',
      website: 'https://vallesula.unah.edu.hn'
    }
  ]
};

export default resume;
