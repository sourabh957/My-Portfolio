export type ProjectStatus = 'building' | 'in-progress' | 'planned' | 'completed';

export interface Project {
  id: string;
  title: string;
  description: string;
  architecture: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  concepts: string[];
  category: string;
  kind: string;
  status: ProjectStatus;
  featured: boolean;
  problem?: string;
}

export const projects: Project[] = [
  {
    id: 'leaderboard-service',
    title: 'Redis Leaderboard Service',
    category: 'RANKING & CONCURRENCY',
    kind: 'Backend project',
    description: 'Game-scoped leaderboards with atomic score adjustments and retry-safe request handling.',
    architecture: ['Spring Boot', 'Lua scripts', 'Redis sorted sets'],
    concepts: [
      'Atomic score adjustments with 24-hour request-ID deduplication',
      'Ranking, pagination, and player-neighbor APIs',
      'Redis Testcontainers integration tests, CI, and Postman flows',
    ],
    tags: ['Java 21', 'Spring Boot', 'Redis', 'Lua'],
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/sourabh957/leaderboard-service',
  },
  {
    id: 'image-storage-service',
    title: 'Image Storage Service',
    category: 'OBJECT STORAGE',
    kind: 'Backend project',
    description: 'An image-upload backend that combines S3 object storage with queryable PostgreSQL metadata.',
    architecture: ['Spring Boot', 'AWS S3', 'PostgreSQL'],
    concepts: [
      'Multipart uploads and presigned upload URLs',
      'Image metadata persistence and retrieval',
      'Docker setup, unit tests, and a Postman collection',
    ],
    tags: ['Java', 'Spring Boot', 'AWS S3', 'PostgreSQL'],
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/sourabh957/image-storage-service',
  },
  {
    id: 'url-shortener-service',
    title: 'URL Shortener Service',
    category: 'CACHING & PERSISTENCE',
    kind: 'Backend project',
    description: 'Persistent short links with Redis cache-aside lookups and HTTP redirects.',
    architecture: ['REST API', 'Redis cache', 'PostgreSQL'],
    concepts: [
      'Short-link creation and HTTP 302 redirects',
      'PostgreSQL as the source of truth; Redis for cached lookups',
      'Docker setup, tests, and Postman API examples',
    ],
    tags: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL'],
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/sourabh957/url-shortener-service',
  },
  {
    id: 'kafka-integration-service',
    title: 'Kafka Integration Service',
    category: 'EVENT-DRIVEN INTEGRATION',
    kind: 'Integration demo',
    description: 'A focused REST-to-Kafka producer/consumer example with independently managed local infrastructure.',
    architecture: ['REST endpoint', 'Kafka topic', 'Consumer group'],
    concepts: [
      'JSON order-created events using KafkaTemplate and a listener',
      'Docker-based Kafka KRaft infrastructure and Kafka UI',
      'Postman examples focused on the core producer-consumer flow',
    ],
    tags: ['Java 21', 'Spring Boot', 'Apache Kafka', 'Docker'],
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/sourabh957/kafka-integration-service',
  },
];
