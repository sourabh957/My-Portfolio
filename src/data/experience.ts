export const experiences = [
  {
    company: 'StatusNeo Technology Consulting',
    client: 'Piramal Finance',
    role: 'Software Development Engineer II',
    duration: 'December 2025 – Present',
    location: 'Bangalore, India',
    highlights: [
      {
        title: 'ML Model Integration Service',
        description:
          'Architected and refactored the ML-Model-Integration-Service microservice architecture by removing the Data-Fetcher-Service dependency and enabling Credit-Decision-Service (CDS) to invoke ML models directly.',
        impact: [
          '40% reduction in inter-service latency',
          'Simplified fraud detection',
          'Improved credit scoring workflows in loan disbursement systems',
        ],
        tags: ['Java', 'Spring Boot', 'Microservices', 'ML Integration'],
      },
      {
        title: 'Generic Configuration & Rule Management Platform',
        description:
          'Designed a generic configuration and rule-management platform using Spring Boot and MongoDB for event-driven ML decisioning in lending workflows.',
        impact: [
          '300+ configurations supported',
          '70% reduction in model onboarding effort',
          '25% improvement in credit decision turnaround',
        ],
        tags: ['Spring Boot', 'MongoDB', 'Rule Engine', 'Distributed Systems'],
      },
      {
        title: 'AI-Augmented Development (AIDLC)',
        description:
          'Pioneered an AI-augmented development workflow by integrating Claude Code with MCP servers (Grafana, Atlassian, custom tooling) for observability monitoring, sprint tracking, and code scaffolding.',
        impact: ['Full feature development and local testing cycles compressed to under 24 hours post-design'],
        tags: ['Claude Code', 'MCP', 'AI Agents', 'Grafana', 'Atlassian'],
      },
    ],
  },
  {
    company: 'Porter',
    client: null,
    role: 'Software Development Engineer – II',
    duration: 'July 2022 – November 2025',
    location: 'Bangalore, India',
    highlights: [
      {
        title: 'Rewards & Recognition Platform',
        description: 'Spearheaded the Rewards & Recognition platform for Diwali supply retention at scale.',
        impact: [
          '4 lakh+ partner events daily',
          'Redis sorted sets for leaderboard ranking',
          '6 lakh driver engagement',
          '3% fulfillment rate improvement during peak demand',
        ],
        tags: ['Java', 'Redis', 'Distributed Systems', 'Kafka'],
      },
      {
        title: 'AWS → GCP Migration',
        description:
          'Worked on migration of production workloads from AWS to Google Cloud Platform. Owned backend service deployments on GKE and Cloud Functions.',
        impact: ['Cloud migration', 'Production troubleshooting', 'Partner-facing system operations'],
        tags: ['AWS', 'GCP', 'GKE', 'Cloud Functions', 'Kubernetes'],
      },
      {
        title: 'Configurable Rule Engine',
        description:
          'Architected and deployed a configurable rule engine with 400–500 configurations to eliminate unjust partner penalties caused by customer-initiated cancellations.',
        impact: ['60% reduction in partner unfairness', 'Zero-downtime production rollout'],
        tags: ['Spring Boot', 'Rule Engine', 'PostgreSQL', 'Zero-downtime'],
      },
      {
        title: 'Kafka Event/Data Pipeline',
        description:
          'Engineered a scalable event/data pipeline using Apache Kafka producers, consumers, and Kafka Connect JDBC sink connectors to synchronize order counts, login hours, and RNR cycle logic.',
        impact: ['Near-real-time visibility', 'Configurable RNR cycle logic'],
        tags: ['Kafka', 'Kafka Connect', 'JDBC', 'Event-driven'],
      },
      {
        title: 'Payment Reconciliation',
        description: 'Optimized payment reconciliation using Redis caching and PostgreSQL query tuning.',
        impact: ['45% reduction in processing time', '₹2.5 Cr annual revenue leakage prevented'],
        tags: ['Redis', 'PostgreSQL', 'Performance', 'Caching'],
      },
    ],
  },
];
