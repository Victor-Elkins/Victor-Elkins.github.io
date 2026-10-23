// All of the site's text lives here. Edit this file to update the page.

export const profile = {
  name: 'Victor Elkins',
  role: 'Software Engineer at IBM',
  location: 'United States',
  summary:
    "I'm a software engineer on the Context-Based Restrictions (CBR) team in IBM Cloud Identity and Access Management. " +
    'I build backend features in Go, like dedicated instance support and VPC event handling, and work across the ' +
    'infrastructure that runs them: Kubernetes deployments, load balancing, and load testing. ' +
    'I also share on-call duty for our production services, and I hold an M.S. in Computer Science from Georgia Tech.',
  email: 'victor.r.elkins@gmail.com',
  phone: '(281) 323-5559',
  phoneHref: 'tel:+12813235559',
  resumeFile: 'Resume.pdf',
  resumeDownloadName: 'Victor_Elkins_Resume.pdf',
};

// The four cards under the intro. `tone` picks the pastel color.
export const highlights = [
  { value: '$250K', label: 'annual infrastructure savings identified', tone: 'mint' },
  { value: '22', label: 'production clusters in my NLB rollout, across 7 regions', tone: 'lavender' },
  { value: '6K req/s', label: 'load tests at 3× production peak', tone: 'sky' },
  { value: 'Award', label: 'IBM Outstanding Technical Achievement', tone: 'peach' },
];

export const experience = [
  {
    company: 'IBM',
    role: 'Software Engineer',
    period: 'April 2025 – Present',
    bullets: [
      "Led the evaluation and migration of IAM's production ingress from Application to Network Load Balancers, designing ALB vs. NLB load tests at up to 6,000 req/s (3× production peak) with 24-hour soak runs and custom Sysdig dashboards; traced recurring production timeouts to Akamai-driven connection spikes on the ALB.",
      'Led the NLB rollout across 4 staging and 22 production clusters in 7 regions for four IAM service teams, using fault-domain-phased deployments, cross-region traffic remapping, Envoy filter protections, and scripted CIS DNS cutovers.',
      "Drove PgBouncer connection pooling for IAM's PostgreSQL adoption: built control-plane/data-plane Helm charts, Istio egress routing, Secrets Manager integration, and Tekton/Jenkins automation for image-digest sourcing, delivering an end-to-end proof of concept and a deployment path through dev, staging, and production.",
      <>
        Led performance hardening for the IAM Istio gateway, building a Go load-testing tool on
        Docker/Kubernetes with Jenkins-automated runs and worker scaling, and shipping data-driven rate
        limiting and TCP connection pooling that reduced Critical Incident Events, winning an{' '}
        <strong>Outstanding Technical Achievement Award</strong>.
      </>,
      'Optimized resource usage via data-driven metrics, migrating from IBM Cloud Classic to Red Hat OpenShift (ROKS); identified node inefficiencies to achieve approximately $250,000 in annual infrastructure cost savings.',
      'Architected a Blue/Green deployment strategy on the Dreadnought CD toolchain, automating cut-overs with Bash and refactoring Helm charts for zero-downtime releases.',
      'Built Context-Based Restrictions (CBR) features in Go, including Dedicated Instance API validation, storage, and VPC event handling, plus new rule-priority properties and validation.',
      'Strengthened production operations by eliminating recurring 500 errors from private-endpoint requests, removing noisy alerts based on 28-day telemetry, and remediating container CVEs across clusters while on call.',
    ],
  },
  {
    company: 'ExxonMobil',
    role: 'Software Engineer Intern',
    period: 'May 2024 – August 2024',
    bullets: [
      'Designed a Go/Python-based API generator on Azure/OpenShift Kubernetes to automate secure Snowflake API creation, significantly reducing API development time.',
      'Engineered automated deployment pipelines using Apache Airflow and Datadog, ensuring secure and reliable deployments within the Azure cloud environment.',
    ],
  },
  {
    company: 'Dycom Industries',
    role: 'Software Engineer Intern',
    period: 'June 2023 – August 2023',
    bullets: [
      'Developed a Python decision tree linter integrated into the GitLab CI/CD pipeline, automating code quality checks and significantly reducing manual review time.',
    ],
  },
  {
    company: 'Vertical AIT',
    role: 'Software Engineer Intern',
    period: 'February 2023 – June 2023',
    bullets: [
      'Designed and deployed an internal image modeling tool using .NET and Azure DevOps, streamlining industrial processes and reducing manual tracking time.',
    ],
  },
];

export const projects = [
  {
    title: 'Opioid Abuse Risk Prediction Portal',
    period: 'August 2025 – December 2025',
    summary:
      "Developed a full-stack patient portal (React, Node.js) that performs CRUD operations against a FHIR-compliant database and integrates a machine learning model to predict a patient's risk of opioid abuse.",
  },
  {
    title: 'Award-Winning CNN for Breast Cancer Detection',
    period: 'August 2024 – December 2024',
    summary:
      "Developed a PyTorch CNN model for breast cancer detection, incorporating ResNet and AlexNet architectures, which achieved second place at the University of Houston's AI and Data Science Showcase.",
  },
];

export const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science (Human-Computer Interaction)',
    detail: 'GPA: 3.90/4.00',
    period: 'Graduated December 2026',
  },
  {
    school: 'University of Houston',
    degree: 'B.S. in Computer Science',
    period: 'Graduated December 2024',
  },
];

export const skills = [
  { label: 'Languages', items: ['Go', 'Python', 'Java', 'JavaScript/TypeScript', 'SQL', 'Bash'] },
  {
    label: 'Cloud & DevOps',
    items: ['Kubernetes/OpenShift', 'Istio/Envoy', 'Docker', 'Helm', 'Jenkins', 'Tekton', 'NLB/ALB', 'Akamai', 'Azure'],
  },
  {
    label: 'Data & Observability',
    items: ['PostgreSQL', 'PgBouncer', 'Redis', 'Snowflake', 'Sysdig', 'Datadog', 'Prometheus/PromQL'],
  },
  { label: 'Frameworks & Tools', items: ['React', 'Node.js', 'PyTorch', 'Git'] },
];
