/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MJENZI - SINGLE CONTENT FILE
 *  ═══════════════════════════════════════════════════════════════════════
 *
 *  This is the ONLY file you need to edit to update your website's content.
 *  Change text, links, services, contact details - everything lives here.
 *
 *  HOW TO EDIT:
 *  - To change any text, find it below and replace it with your own.
 *  - To update contact links, replace the [placeholder] values.
 *  - To add or remove services, copy a service block and edit it.
 *  - To change projects, edit the projects array.
 *
 *  TIP: Keep the structure the same. Only change the words inside quotes.
 *  ═══════════════════════════════════════════════════════════════════════
 */

// ─── IDENTITY ───────────────────────────────────────────────────────────
export const identity = {
  brandName: 'Mjenzi',
  fullName: 'Mjenzi Digital',
  title: 'Digital Solutions Agency',
  roles: ['AI & Automation', 'Creative Builder'],
  tagline: 'Build smarter. Grow further.',
  supportingLine: 'From manual processes to smarter systems.',
  philosophy:
    'Build yourself. Build people. Build ideas. Leave things better than you found them.',
  location: 'Embu, Kenya',
  brandSuffix: 'Digital Solutions',
  founderName: 'Alex Muthama',
};

// ─── CONTACT DETAILS ────────────────────────────────────────────────────
// Replace the [placeholder] values with your real details when ready.
export const contact = {
  email: 'mjenzidigital@gmail.com',
  whatsapp: '254702043273', // Include country code, no +. e.g. 254712345678
  whatsappDisplay: '+254 702 043 273',
  linkedin: 'https://www.linkedin.com/in/alexmuthama',
  instagram: 'https://www.instagram.com/alexx.muthama',
  // Add more social links as needed
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexmuthama', icon: 'linkedin' },
    { label: 'Email', url: 'mjenzidigital@gmail.com', icon: 'mail' },
    { label: 'WhatsApp', url: '254702043273', icon: 'whatsapp' },
    { label: 'Instagram', url: 'https://www.instagram.com/alexx.muthama', icon: 'instagram' },
  ],
  // Formspree endpoint for contact form submissions
  formEndpoint: 'https://formspree.io/f/mjygojqr',
};

// ─── HOME PAGE ──────────────────────────────────────────────────────────
export const home = {
  hero: {
    headline: 'Practical digital solutions for businesses ready to grow.',
    supporting:
      'Mjenzi Digital helps Kenyan SMEs, startups and organisations build a stronger online presence, simplify everyday operations and use business data to make better decisions.',
    primaryButton: { label: 'Start a Conversation', link: '/contact' },
    secondaryButton: { label: 'View Our Work', link: '/work' },
  },
  intro: {
    label: 'The Builder',
    title: 'More than a services business - a philosophy of building',
    body: 'Mjenzi means "builder" in Swahili. It represents our commitment to building useful things, understanding different perspectives, supporting growth, and applying technology with purpose. Technology is a tool - the real work is understanding the problem and crafting the right solution.',
    link: { label: 'Learn about Mjenzi', link: '/about' },
  },
  buildingTeaser: {
    label: 'What We Are Building',
    title: 'A live record of progress',
    body: 'From AI automation experiments to business dashboards and digital products - see what we are exploring, building, testing, and launching.',
    link: { label: 'See latest updates', link: '/now' },
  },
  cta: {
    title: 'Have a challenge worth solving?',
    body: "Whether it's a manual process slowing you down, a website that needs to exist, or an idea that needs structure - let's talk.",
    button: { label: 'Start a conversation', link: '/contact' },
  },
};

// ─── ABOUT PAGE ─────────────────────────────────────────────────────────
export const about = {
  label: 'About',
  title: 'A Kenyan digital solutions agency focused on real business problems',
  photoPlaceholder: 'Your photo here - upload a professional but approachable headshot',
  story: [
    'Mjenzi is a Kenya-based digital solutions agency supporting businesses, startups, entrepreneurs, and organisations with practical websites, AI and workflow automations, business systems, and data dashboards.',
    'Our approach is simple: understand the problem before choosing the technology. We focus less on buzzwords and more on whether a solution makes work easier, faster, or more meaningful.',
    'Mjenzi - the Swahili word for "builder" - represents our commitment to building useful things, understanding people, supporting growth, and leaving every engagement better than we found it.',
    'We combine creativity with practical problem-solving, using the right tools for each challenge and building solutions that can grow with the organisations we support.',
  ],
  founderTitle: 'Meet the Founder',
  founderText:
    'Alex Muthama is the founder of Mjenzi. I am a Kenyan digital solutions specialist and creative builder passionate about using technology, AI automation, websites, business systems, and data-driven solutions to help businesses work smarter and grow. My vision is to make practical digital tools more useful, accessible, and valuable for the organisations we serve.',
  valuesTitle: 'What we value',
  values: [
    { title: 'Practicality', desc: 'Solutions that work in the real world, not just in theory.' },
    { title: 'Integrity', desc: 'Clear about what we can deliver and transparent about what is still being developed.' },
    { title: 'Curiosity', desc: 'Always exploring new tools, ideas and perspectives.' },
    { title: 'Creativity', desc: 'Finding unexpected paths to better outcomes.' },
    { title: 'Continuous growth', desc: 'Every project is an opportunity to learn and improve.' },
    { title: 'Service & trust', desc: 'Building relationships, not just deliverables.' },
  ],
  philosophyTitle: 'The Mjenzi philosophy',
  philosophyText:
    'Build yourself. Build people. Build ideas. Leave things better than you found them.',
  philosophyBody:
    'This philosophy guides how we work. It means investing in strong practices, supporting the organisations we work with, nurturing ideas into real solutions, and making sure every engagement leaves a positive mark.',
  approachTitle: 'Our approach',
  approachIntro:
    'Technology is a tool for solving problems, not the goal. Our process keeps the problem at the centre.',
  approachSteps: [
    { number: '01', title: 'Understand', desc: 'Learn the business, the challenges, and the goals before touching any tools.' },
    { number: '02', title: 'Design', desc: 'Find the simplest practical solution that addresses the real need.' },
    { number: '03', title: 'Build', desc: 'Develop and test the solution, keeping it focused and functional.' },
    { number: '04', title: 'Improve', desc: 'Refine based on feedback and real use. Nothing is ever truly finished.' },
  ],
};

// ─── SERVICES PAGE ──────────────────────────────────────────────────────
export const services = {
  label: 'Services',
  title: 'Five practical ways we help businesses work smarter',
  intro:
    'Each service addresses a specific business problem. We focus on practical solutions, communicate clearly about scope, and recommend the right starting point for each organisation.',
  items: [
    {
      icon: 'globe',
      image: 'https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Websites & Digital Presence',
      problem: 'Your business is invisible online, or your current website does not represent what you do.',
      deliverables: [
        'Clean, fast, responsive websites',
        'Landing pages for campaigns or products',
        'Basic SEO and social media integration',
        'Website updates and improvements',
      ],
      suits: 'Small businesses, creatives, and organisations that need a real online presence without complexity.',
      status: 'Available now',
    },
    {
      icon: 'bot',
      image: 'https://images.pexels.com/photos/8091334/pexels-photo-8091334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'AI & Workflow Automation',
      problem: 'You and your team spend hours on repetitive manual tasks that a system could handle.',
      deliverables: [
        'AI-assisted content and communication workflows',
        'Automated data entry and processing',
        'Integration between tools you already use',
        'Practical AI prototypes and demos',
      ],
      suits: 'Businesses ready to explore automation but unsure where to start.',
      status: 'Available - actively learning',
    },
    {
      icon: 'settings',
      image: 'https://images.pexels.com/photos/30019690/pexels-photo-30019690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Business Systems & Process Improvement',
      problem: 'Your workflows live in spreadsheets, chats, and memory - nothing is structured or repeatable.',
      deliverables: [
        'Process mapping and simplification',
        'Custom business systems and tools',
        'Documentation and standard operating procedures',
        'Systems that grow with your business',
      ],
      suits: 'Growing businesses that need structure without heavy enterprise software.',
      status: 'Available now',
    },
    {
      icon: 'bar-chart',
      image: 'https://images.pexels.com/photos/7172813/pexels-photo-7172813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Data Analysis, Reporting & Dashboards',
      problem: 'You have data but cannot see what it means, and decisions feel like guesswork.',
      deliverables: [
        'Interactive dashboards for key metrics',
        'Data cleaning and organisation',
        'Regular reports that actually get read',
        'Visualisations that make trends obvious',
      ],
      suits: 'Businesses that collect data but have not yet made it useful.',
      status: 'Available - building experience',
    },
    {
      icon: 'compass',
      image: 'https://images.pexels.com/photos/5236610/pexels-photo-5236610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Digital Strategy & Practical Technology Solutions',
      problem: 'You know technology could help, but you do not know what to prioritise or where to start.',
      deliverables: [
        'Technology audit and recommendations',
        'Practical roadmap for digital improvement',
        'Tool selection guidance',
        'Hands-on help getting started',
      ],
      suits: 'Businesses that want honest, practical guidance - not a sales pitch.',
      status: 'Available now',
    },
  ],
};

// ─── PROJECTS ───────────────────────────────────────────────────────────
// Status options: 'In progress', 'Concept', 'Demo', 'Completed'
// Category options must match the filters in the `work` section below.
//
// Each project can have these fields:
//  slug          - used in the URL for the case-study page (unique, no spaces)
//  name          - display title
//  category      - must match one of the work.filters values
//  status        - one of the status options above
//  cover         - image URL or null for placeholder
//  summary       - short text shown on cards and the gallery
//  problem       - the business problem or opportunity (case study)
//  role          - what you did / are doing
//  tools         - list of tools and technologies
//  process       - step-by-step description of the approach
//  solution      - what was built or is being built
//  results       - verified results only; leave as null if none yet
//  lessons       - what you learned from the project
//  links         - list of { label, url } for live demos, repos, etc.
//  screenshots   - list of image URLs or null for placeholders
export interface ProjectLink {
  label: string;
  url: string;
  secondary?: boolean;
}

export interface ProjectEmbed {
  title: string;
  iframeTitle: string;
  url: string;
  fallbackLabel: string;
}

export interface AutomationProject {
  title: string;
  description: string;
  details: string[];
  overview: string;
  tools: string[];
  links: ProjectLink[];
}

export interface CaseStudyProject {
  title: string;
  statusLabel?: string;
  description: string;
  overview?: string;
  businessProblem?: string;
  objectivesLabel?: string;
  objectives: string[];
  scopeMetrics?: string[];
  methodsLabel?: string;
  methods: string[];
  dataset?: string;
  dashboardPages?: string[];
  findingsAndRecommendations?: string;
  limitations?: string[];
  deliverables: string[];
  toolsLabel?: string;
  tools: string[];
  links: ProjectLink[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: string;
  cover: string | null;
  summary: string;
  fullDescription?: string;
  problem: string;
  goals?: string[];
  research?: string[];
  role: string;
  tools: string[];
  process: string[];
  solution: string;
  userFlow?: string[];
  outcome?: string;
  results: string | null;
  lessons: string;
  links: ProjectLink[];
  screenshots: string[];
  embeds?: ProjectEmbed[];
  automationProjects?: AutomationProject[];
  caseStudyProjects?: CaseStudyProject[];
}

export const projects: Project[] = [
  {
    slug: 'embu-fashion-weekend-2026',
    name: 'Embu Fashion Weekend and Awards 2026',
    category: 'Creative work and content',
    status: 'In progress',
    cover: '/images/projects/Embu_fashion.jpeg',
    summary: "Developed a digital presence for Embu Fashion Weekend and Awards 2026, a celebration of creativity, talent and style. The project highlighted runway showcases, red-carpet moments, fashion presentations and awards, helping audiences discover the event's experiences and stay connected.",
    fullDescription:
      "Developed a digital presence for Embu Fashion Weekend and Awards 2026, a fashion and entertainment event celebrating creativity, talent, style, and excellence in the fashion industry. " +
      "The project focused on showcasing the event's vision, building audience awareness, and creating excitement around the experience. From runway showcases and red-carpet moments to model appearances, fashion presentations, Meet & Greet sessions, DJ performances, live recordings, and Fashion Excellence Awards, the event brought together creatives, fashion enthusiasts, brands, and industry stakeholders. " +
      "The digital platform was designed to communicate the event's identity, highlight its key experiences, and give audiences an accessible way to discover event information and stay connected.",
    problem: 'The event needed a stronger social media presence to build awareness, attract attendees, and showcase the designers and awards nominees ahead of the 2026 edition.',
    role: 'Social media content creation, visual design, and community engagement.',
    tools: ['Canva', 'Instagram', 'TikTok', 'CapCut', 'Content Planning'],
    process: [
      'Studied the event brand, audience, and past editions to understand tone and expectations.',
      'Developed a content calendar aligned with key milestones leading up to the event.',
      'Created visual content - graphics, short videos, and stories - consistent with the event identity.',
      'Engaged with the community through comments, shares, and collaborations with designers.',
    ],
    solution: 'An ongoing social media content campaign building visibility and engagement for the event across Instagram and TikTok.',
    results: null,
    lessons: 'Consistency matters more than perfection. Showing up regularly with authentic content builds more trust than sporadic polished posts.',
    links: [{ label: 'Visit Website', url: 'https://embufashionweekendandawards.co.ke/#' }],
    screenshots: [],
  },
  {
    slug: 'marine-retreat-vlog',
    name: 'Marine Retreat - Promotional Vlog',
    category: 'Creative work and content',
    status: 'In progress',
    cover: '/Cards/Gemini_Marine%20card.jpeg',
    summary: 'Created a promotional vlog for Marine Retreat, a nature and leisure destination in Embu, Kenya. It showcases the scenic surroundings, nature walks, dam experiences, kayaking, boat rides, and accommodation, presenting the destination as a place for relaxation, exploration, and outdoor experiences.',
    fullDescription: 'Created a promotional vlog for Marine Retreat, a nature and leisure destination in Embu, Kenya. It showcases the scenic surroundings, nature walks, dam experiences, kayaking, boat rides, and accommodation, presenting the destination as a place for relaxation, exploration, and outdoor experiences. The project involved location filming, story planning, editing, and content strategy to help communicate the retreat experience through social video.',
    problem: 'The retreat needed visual storytelling to attract visitors and communicate the experience of staying there.',
    role: 'Vlog production, filming, editing, and content strategy.',
    tools: ['CapCut', 'Camera', 'Instagram', 'Content planning', 'TikTok'],
    process: [
      'Visited the location to understand the experience from a guest perspective.',
      'Planned the vlog narrative - what story to tell and in what order.',
      'Filmed key moments and details that capture the atmosphere of the retreat.',
      'Edited the footage into a promotional vlog suitable for social media.',
    ],
    solution: 'A promotional vlog that showcases the retreat experience, designed for social media sharing and audience engagement.',
    results: null,
    lessons: 'Good storytelling is about emotion, not just information. The vlog works because it makes people feel what it would be like to visit.',
    links: [],
    screenshots: [],
  },
  {
    slug: 'ai-workflow-automation-prototype',
    name: 'AI & Workflow Automation Prototype',
    category: 'AI and automation',
    status: 'Demo',
    cover: '/images/projects/Gemini_Generated_Image_fqesjqfqesjqfqes.jpeg',
    summary: 'Built a working AI and workflow automation prototype to demonstrate how small businesses can reduce repetitive manual work. The demo explores enquiry handling, response drafting, data updates and reporting tasks, connecting AI with familiar business tools while keeping people in the loop.',
    fullDescription: 'A prototype exploring how AI can automate repetitive business tasks and reduce manual effort. It was designed and built end-to-end to examine tasks such as data entry, responding to common enquiries, and generating reports. The working demo connects AI with business tools to read enquiries, draft responses, and update records, and was tested with sample inputs. It demonstrates where automation can assist while people retain judgment over important decisions.',
    problem: 'Many small businesses spend significant time on repetitive tasks - data entry, responding to common enquiries, generating reports - that could be partially automated with AI.',
    role: 'Designing and building the automation prototype end-to-end.',
    tools: ['OpenAI API', 'Make (Integromat)', 'Google Sheets', 'Zapier', 'Python'],
    process: [
      'Identified common repetitive tasks that could benefit from automation.',
      'Mapped the workflow from trigger to output, identifying where AI adds value.',
      'Built a prototype connecting AI models to existing tools through an automation platform.',
      'Tested the prototype with sample inputs and refined the prompts and logic.',
    ],
    solution: 'A working demo that shows how AI can handle repetitive business tasks - from reading enquiries to drafting responses and updating records.',
    results: null,
    lessons: 'AI works best when it handles the repetitive parts and humans handle the judgment calls. The goal is not to replace people but to free them for higher-value work.',
    links: [],
    screenshots: [],
    automationProjects: [
      {
        title: 'Form Submission & Email Automation',
        description: 'Built an n8n workflow that automates the process from form submission to personalised email delivery and client signup notifications.',
        details: [
          'A user submits a form, which triggers the n8n workflow.',
          'The submitted data is captured and processed as structured information.',
          'A personalised email is generated and sent using the submitted form fields.',
          'A notification is sent whenever a new client signs up.',
        ],
        overview: 'This project demonstrates how form submissions can act as structured data sources that trigger real-world actions automatically. It showcases lead management, client onboarding, email automation, and workflow orchestration.',
        tools: ['n8n', 'Form Triggers', 'Email Automation', 'Data Processing', 'Workflow Automation'],
        links: [
          { label: 'Watch Demo 1', url: 'https://www.loom.com/share/8cedb90af49648868c8bd826059067b2' },
          { label: 'Watch Demo 2', url: 'https://www.loom.com/share/d6e700e91dba4f1a9af16037f5b38ec7' },
        ],
      },
      {
        title: 'AI Assistant & Document-Based Knowledge Retrieval',
        description: 'Built an AI assistant that answers questions using stored company documents and can initiate workflows when users request specific actions.',
        details: [
          'Provides a simple chat interface for asking questions.',
          'Uses document-based Retrieval-Augmented Generation (RAG) to retrieve relevant company information.',
          'Uses n8n for intent handling, workflow orchestration, and backend coordination.',
          'Grounds answers in stored documents rather than unsupported assumptions.',
          'Answers questions about internal SOPs and company policies.',
          'Can trigger workflows when an action is requested and generate structured summaries when needed.',
        ],
        overview: 'This project demonstrates how AI, document retrieval, and workflow automation can work together to support internal knowledge management and operational processes. The frontend provides the conversational experience, while the backend handles information retrieval, intent processing, and orchestration through n8n.',
        tools: ['n8n', 'AI Assistant', 'Retrieval-Augmented Generation (RAG)', 'Document-Based Knowledge Retrieval', 'Workflow Orchestration', 'Chat Interface'],
        links: [
          { label: 'Watch AI Assistant Demo', url: 'https://www.loom.com/share/bcf18e8231de41adbb23dcc8c414b0bf' },
          { label: 'Related Challenge', url: 'https://www.skool.com/monetize-learn-aiautomation-2878/new-challenge-level-up-your-email-automations?p=1453cd10', secondary: true },
        ],
      },
    ],
  },
  {
    slug: 'business-dashboard-project',
    name: 'Business Dashboard & Data Analysis',
    category: 'Data and dashboards',
    status: 'Demo',
    cover: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary: 'Created an interactive Looker Studio dashboard to bring business data from multiple spreadsheets into one view. The project involved cleaning and structuring data, selecting key metrics, and adding filters so users can explore trends and support clearer business decisions.',
    fullDescription: 'An interactive dashboard turning raw business data into clear, actionable insights. The source data was spread across multiple spreadsheets, making it difficult to see the full picture or track key metrics over time. The project involved auditing and cleaning the data, structuring it for consistent reporting, and designing an interactive dashboard with key metrics, trends, and filters for exploring details.',
    problem: 'A business had data spread across multiple spreadsheets with no way to see the full picture or track key metrics over time.',
    role: 'Data analysis, dashboard design, and visualisation.',
    tools: ['Google Sheets', 'Looker Studio', 'Excel', 'Data cleaning'],
    process: [
      'Audited the existing data sources and identified the key metrics that matter to the business.',
      'Cleaned and structured the data for consistent reporting.',
      'Designed a dashboard layout that surfaces the most important information first.',
      'Built the dashboard with interactive filters so users can explore the data themselves.',
    ],
    solution: 'An interactive dashboard that consolidates business data into a single view, with key metrics, trends, and the ability to drill down into details.',
    results: null,
    lessons: 'A dashboard is only useful if it answers questions the business actually asks. The design should start from the decisions, not the data.',
    links: [
      {
        label: 'View the LinkedIn Project Post',
        url: 'https://lnkd.in/p/dPbNcB3M',
      },
    ],
    screenshots: [],
    caseStudyProjects: [
      {
        title: 'Recruitment Analytics',
        statusLabel: 'Planned — dashboard and analysis not verified',
        description: 'A planned project to analyze recruitment data and help an HR organization identify opportunities to improve hiring efficiency using an Excel dashboard, recruitment process performance indicators, relevant charts, and written insights.',
        overview: 'The planned dashboard will present the recruitment measures below. Each chart will be accompanied by a written, evidence-based insight explaining what the data shows and what actions the HR team could consider. No completed dashboard, recruitment dataset, or analysis output is available to verify.',
        businessProblem: 'The project aims to help an HR organization understand recruitment process performance and identify opportunities to improve hiring efficiency, using data-supported insights rather than unsupported conclusions.',
        objectivesLabel: 'Objectives and scope',
        objectives: [
          'Analyze recruitment data to help identify opportunities to improve hiring efficiency.',
          'Present the requested recruitment process performance indicators in a planned Excel dashboard with relevant charts.',
          'Accompany each chart with a written insight supported by the data and practical actions the HR team could consider.',
        ],
        scopeMetrics: [
          'Time from application to interview — requires an application received date and interview date.',
          'Time to hire — requires an application received date and a confirmed endpoint such as offer acceptance or employee start; the chosen definition must be documented.',
          'Time to publish a job advertisement — requires the requisition approval or request date and advertisement publication date.',
          'Number of days a vacancy remains open — requires the vacancy open or advertisement publication date and the agreed close or fill date.',
          'End-of-probation date — calculate from employee start date and the policy-defined probation period; this is a calendar date field, not a duration metric.',
          'Time from employee onboarding to opening the employee file — requires the onboarding date and employee file opened date.',
          'Time between interview and candidate reporting date — requires the relevant interview date and candidate reporting or start date.',
          'Time taken to approve a recruitment requisition — requires requisition submission date and final approval date.',
          'Time taken to close an employee file — requires the employee separation or last working date and employee file closure date.',
          'Time until an employee is included in benefits — requires the applicable employment or benefits eligibility date and benefits enrollment or effective date.',
        ],
        methodsLabel: 'Planned analytical approach',
        methods: [
          'Inspect available recruitment data and confirm the required date fields, event definitions, and calculation rules before calculating the indicators.',
          'Calculate only measures supported by verified source fields; document unavailable or incomplete fields rather than estimating them.',
          'Use relevant Excel charts and dashboard elements to present each supported indicator with a written, evidence-based interpretation and possible HR actions.',
        ],
        dataset: 'No recruitment dataset or completed dashboard was found in the available workspace. The date fields listed for each indicator are required inputs; the measures and charts cannot be calculated or verified until those fields are available.',
        findingsAndRecommendations: 'No recruitment findings or recommendations are reported until source data are available and analyzed.',
        limitations: [
          'No recruitment dataset, completed Excel dashboard, charts, or analysis outputs were found in the available workspace; this section remains planned.',
          'Several indicators depend on exact dates and event definitions. Their required source fields and calculation rules must be validated before analysis.',
          'The time-to-hire endpoint and the date a vacancy is considered closed must be defined consistently before comparing results.',
        ],
        deliverables: [
          'Planned: an Excel dashboard with relevant charts for the recruitment indicators supported by the source data.',
          'Planned: written, evidence-based insights alongside each chart, explaining what it shows and possible actions for the HR team to consider.',
        ],
        toolsLabel: 'Planned tool',
        tools: ['Microsoft Excel'],
        links: [],
      },
      {
        title: 'Excel Data Project — Customer Segmentation and Data Profiling',
        description: 'A project exercise using a simulated transaction dataset for 100 hypothetical customers to examine data quality and transaction patterns.',
        objectives: [
          'Load and inspect the transaction dataset.',
          'Identify data quality issues and explain how they could affect analysis.',
          'Draft a client-style email describing the issues and recommending improvements to future data collection.',
          'Analyze monthly transaction volumes and average transaction amounts.',
          'Segment transactions by date and time to examine volume and spending throughout a typical day.',
          'Summarize observations and recommendations in a 2–3 slide presentation.',
        ],
        methods: [
          'Use Excel navigation and data management, functions and formulas, lookups and cell referencing, conditional aggregation, filters, and conditional formatting.',
          'Clean and profile the data, then analyze transaction patterns and customer segments.',
          'Communicate analysis and recommendations through a concise presentation.',
        ],
        deliverables: [
          'Planned: a client-style email describing data quality issues and recommendations.',
          'Planned: a 2–3 slide presentation summarizing observations and recommendations.',
        ],
        tools: ['Microsoft Excel'],
        links: [
          {
            label: 'View transaction dataset',
            url: 'https://drive.google.com/file/d/1GD15KgjfLBotCCDd2IjNg2bR_wuXnKAd/view?usp=sharing',
          },
        ],
      },
      {
        title: 'HR Workforce Analytics & Employee Attrition Intelligence',
        statusLabel: 'Planned — data analysis and dashboard not yet verified',
        description: 'A planned workforce analytics project for a fictional medium-sized organization, focused on workforce composition, employee attrition, retention risks, compensation patterns, job satisfaction, and work-life balance.',
        overview: 'The project brief calls for an evidence-led view of workforce composition and employee attrition to help HR leadership investigate retention risks. No HR dataset or completed analysis artifacts were found in the available workspace, so this case study is presented as planned work.',
        businessProblem: 'HR leadership needs a clear, data-supported way to understand which employee groups are associated with attrition and where further investigation may be useful. Relationships in snapshot data will be described as associations, not causes.',
        objectivesLabel: 'Objectives and key business questions',
        objectives: [
          'Measure workforce size and the proportion of records marked as attrition, using a clearly defined denominator.',
          'Compare attrition by department, job role, age group, tenure, salary band, and overtime status.',
          'Examine job satisfaction and work-life balance in relation to attrition.',
          'Describe workforce demographics and compensation patterns where supported by the data.',
          'Identify employee segments for further investigation and develop evidence-based retention recommendations after analysis.',
        ],
        methodsLabel: 'Analytical approach',
        methods: [
          'Inspect the source columns, data types, record count, missing values, duplicates, and category values before defining transformations.',
          'Use Python with pandas for a reproducible data quality review and preparation pipeline, preserving the raw source data.',
          'Use SQL for workforce summaries and attrition comparisons, and DAX measures for a Power BI semantic model where implemented and validated.',
          'Treat the dataset as a snapshot unless verified historical records support time-based analysis; distinguish attrition proportion from turnover rate.',
        ],
        dataset: 'The brief identifies the IBM HR Analytics Employee Attrition & Performance dataset as the intended primary source. No HR data file was found in the available workspace, so its schema, record count, data quality, and licensing have not been verified here. Any supplementary data must be clearly labeled synthetic.',
        dashboardPages: [
          'Executive Workforce Overview — planned',
          'Attrition Deep Dive — planned',
          'Workforce Demographics — planned',
          'Retention & Employee Experience — planned',
        ],
        findingsAndRecommendations: 'No data-derived findings or retention recommendations are reported yet because the dataset has not been inspected or analyzed.',
        limitations: [
          'No HR dataset, prepared data, SQL analysis, Python pipeline, DAX measures, or dashboard artifacts were found in the available project workspace.',
          'A finished Power BI .pbix file has not been verified.',
          'If the source is a single employee snapshot, it cannot support historical hiring, termination, headcount, or time-based turnover trends.',
          'Observed relationships between employee attributes and attrition would not establish causation.',
        ],
        deliverables: [
          'Planned: a documented data preparation pipeline, data quality report, and clean dataset for Power BI.',
          'Planned: SQL analysis queries and validated DAX measures with documented definitions.',
          'Planned: four Power BI report pages and a findings and recommendations summary based on analyzed data.',
          'Planned: project documentation covering the dataset, methodology, data model, measures, limitations, and reproduction steps.',
        ],
        toolsLabel: 'Planned tools',
        tools: ['Power BI (primary dashboard tool)', 'Python with pandas', 'SQL', 'DAX'],
        links: [],
      },
    ],
  },
  {
    slug: 'website-digital-system-experiment',
    name: 'Website & Digital-System Experiment',
    category: 'Websites and digital products',
    status: 'Completed',
    cover: '/fitpro-website-screenshot.png',
    summary: 'Designed and developed a responsive gym website using Figma and WordPress with third-party membership integrations. The project focused on clear navigation, membership comparisons, registration and account access, combining a polished online presence with practical website functionality.',
    fullDescription: 'A functional gym website designed in Figma and developed with WordPress and third-party integrations. The project addressed cluttered layouts and complicated user journeys by prioritizing clear information, readable typography, and responsive design. Visitors can explore programs, compare membership plans, select subscriptions, register or log in, and access supported account and membership-management options.',
    problem: 'Many websites overwhelm users with cluttered layouts, unclear navigation, and complicated user journeys. Gym websites also need to communicate membership options clearly while making registration and account management convenient.',
    goals: [
      'Develop a professional website from the ground up.',
      'Create a responsive experience across desktop and mobile devices.',
      'Use WordPress for flexible content management.',
      'Integrate membership functionality using WordPress integrations.',
      'Deliver a clean, consistent, and user-friendly interface.',
    ],
    research: [
      'Reviewed similar websites to identify effective practices for navigation, layout, and responsive design.',
      'Prioritised clear information hierarchy, readable typography, minimal distractions, and a consistent transition from the Figma design to the working website.',
    ],
    role: 'UI/UX design in Figma, WordPress development, and third-party integrations.',
    tools: ['Figma', 'WordPress', 'WordPress integrations'],
    process: [
      'Designed the user interface and experience in Figma, focusing on clarity, readable typography, and minimal distractions.',
      'Developed the responsive gym website in WordPress.',
      'Integrated membership-related functionality using WordPress integrations.',
    ],
    solution: 'A professional, responsive gym website where users can explore programs, compare membership plans, select subscriptions, and manage their accounts through integrated membership functionality.',
    userFlow: [
      'Visit the website and navigate to Memberships, Programs, and Contact.',
      'Explore available membership plans, pricing, features, and benefits.',
      'Select a suitable membership plan and review its details.',
      'Register or log in through the integrated membership functionality.',
      'Access available account and membership-management options.',
      'Follow the available cancellation process where supported by the integration.',
    ],
    results: null,
    outcome: 'The project demonstrates the integration of interface design, WordPress development, and third-party functionality to deliver a working digital platform. It showcases an approach to building responsive websites that combine professional presentation with practical user needs.',
    lessons: 'The boundary between a website and a business system is disappearing. Building both together from the start is simpler than bolting systems onto a static site later.',
    links: [],
    screenshots: [],
    embeds: [
      {
        title: 'LinkedIn certificate post',
        iframeTitle: 'LinkedIn certificate post for the Website & Digital-System Experiment',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7396074829243817984?collapsed=1',
        fallbackLabel: 'Open the LinkedIn post',
      },
      {
        title: 'Behance portfolio project',
        iframeTitle: 'Behance portfolio project for the Website & Digital-System Experiment',
        url: 'https://www.behance.net/embed/project/235009673?ilo0=1',
        fallbackLabel: 'Open the Behance project',
      },
    ],
  },
];

// ─── WORK PAGE ──────────────────────────────────────────────────────────
export const work = {
  label: 'Work',
  title: 'Selected work, experiments, and things in progress',
  intro:
    'A growing collection of real projects, demos, and experiments. Everything here is labelled honestly - if it is a concept or demo, it says so.',
  filters: [
    'All',
    'Websites and digital products',
    'AI and automation',
    'Data and dashboards',
    'Creative work and content',
    'Experiments and learning',
  ],
};

// ─── WHAT WE ARE BUILDING ────────────────────────────────────────────────
// Status options: 'Exploring', 'Building', 'Testing', 'Launched'
export interface BuildingEntry {
  name: string;
  description: string;
  status: 'Exploring' | 'Building' | 'Testing' | 'Launched';
  latestUpdate: string;
  tools: string[];
  image: string | null;
  link: string | null;
}

export const building: BuildingEntry[] = [
  {
    name: 'AI Automation Experiments',
    description: 'Exploring how AI can automate repetitive business tasks - from enquiry handling to report generation.',
    status: 'Building',
    latestUpdate: 'Testing prompt chains for automating email enquiry responses. Early results are promising but need refinement for edge cases.',
    tools: ['OpenAI API', 'Make', 'Google Sheets'],
    image: 'https://images.pexels.com/photos/6744352/pexels-photo-6744352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: null,
  },
  {
    name: 'Mjenzi Digital Portfolio & Platform',
    description: 'Developing this website into a real portfolio and eventually a platform for delivering digital services.',
    status: 'Building',
    latestUpdate: 'Portfolio site live with Home, About, Services, Work, and Contact. Now adding case studies and building tracking.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.pexels.com/photos/20209020/pexels-photo-20209020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: null,
  },
  {
    name: 'Business Dashboard Templates',
    description: 'Creating reusable dashboard templates that small businesses can adapt for their own data.',
    status: 'Testing',
    latestUpdate: 'First template built in Looker Studio. Testing with sample data to make sure the layout works for different business types.',
    tools: ['Looker Studio', 'Google Sheets', 'Data visualisation'],
    image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: null,
  },
  {
    name: 'Content Systems for Events',
    description: 'Building a repeatable system for managing social media content for events - from planning to publishing.',
    status: 'Building',
    latestUpdate: 'Applying the system with Embu Fashion Weekend 2026. Learning what works at scale and what needs manual adjustment.',
    tools: ['Canva', 'Instagram', 'TikTok', 'Content calendars'],
    image: 'https://images.pexels.com/photos/5934215/pexels-photo-5934215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: null,
  },
  {
    name: 'Website-as-a-Business-System Concept',
    description: 'Exploring whether a website can be more than a brochure - handling bookings, enquiries, and basic processes.',
    status: 'Exploring',
    latestUpdate: 'Researching architecture patterns. Sketching how a frontend, database, and automation layer would connect for a small business.',
    tools: ['React', 'Supabase', 'Edge Functions'],
    image: 'https://images.pexels.com/photos/7793919/pexels-photo-7793919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: null,
  },
];

// ─── NOW PAGE ───────────────────────────────────────────────────────────
export const now = {
  label: 'Now',
  title: 'What we are focused on right now',
  intro:
    'A snapshot of what we are actively developing, testing, and building toward. This page updates as our focus shifts and gives customers a clear view of the work shaping our agency.',
  focus: [
    {
      title: 'Building practical AI and automation solutions',
      desc: 'Experimenting with AI-assisted workflows that save businesses time on repetitive tasks.',
    },
    {
      title: 'Developing websites, business systems and dashboards',
      desc: 'Creating digital tools that help businesses work smarter, not harder.',
    },
    {
      title: 'Strengthening our portfolio through real projects and demos',
      desc: 'Every project - client engagement or experiment - helps us improve our methods and demonstrate practical value.',
    },
    {
      title: 'Connecting with businesses, founders, mentors and collaborators',
      desc: 'Looking for people who want to build something meaningful together.',
    },
    {
      title: 'Developing Mjenzi into a sustainable, scalable business',
      desc: 'Turning a philosophy of building into a business that creates real value for clients.',
    },
  ],
  lastUpdated: 'October 2026',
};

// ─── NAVIGATION ─────────────────────────────────────────────────────────
export const nav = {
  links: [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Work', link: '/work' },
    { label: 'Now', link: '/now' },
    { label: 'Contact', link: '/contact' },
  ],
  ctaButton: { label: 'Start a conversation', link: '/contact' },
};

// ─── FOOTER ─────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Build smarter. Grow further.',
  philosophy: 'Build better systems. Support better work. Create lasting value.',
  copyright: 'Mjenzi Digital. All rights reserved.',
};

// ─── IMAGE PLACEHOLDERS ─────────────────────────────────────────────────
// Reference images (free-to-use from Pexels) used as design accents.
// Replace with your own images when ready.
export const images = {
  hero: '/Home/New%20Africa.jpeg',
  // Founder portrait shown on the About page
  aboutPhoto: "/founder/Founder_Pic'.jpeg",
  // Nairobi skyline - Kenyan identity accent for intro section
  architectureAccent: '/Home/Mjenzi%20Digital_%20Work%20Smarter,%20Grow.png',
  // Black African professional at workspace
  workspaceAccent:
    'https://images.pexels.com/photos/6149781/pexels-photo-6149781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
