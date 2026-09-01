export const labProjects = [
  {
    id: 'redis-leaderboard',
    title: 'Redis Leaderboard',
    description: 'High-throughput leaderboard service using Redis Sorted Sets with ranking and leaderboard APIs.',
    concepts: ['Redis Sorted Sets', 'Ranking', 'High-throughput Updates', 'Leaderboard APIs', 'Distributed Systems'],
    tags: ['Redis', 'Java', 'Spring Boot'],
    status: 'planned' as const,
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    description: 'URL shortening service with caching, persistence, redirects, and scalable distributed system design.',
    concepts: ['URL Generation', 'Persistence', 'Caching', 'Redirects', 'Scalability'],
    tags: ['Spring Boot', 'Redis', 'PostgreSQL'],
    status: 'planned' as const,
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description: 'Centralized API gateway with routing, authentication, rate limiting, and observability.',
    concepts: ['Routing', 'Authentication', 'Rate Limiting', 'Request Handling', 'Observability'],
    tags: ['Spring Boot', 'Redis', 'Java'],
    status: 'planned' as const,
    subProjects: [
      {
        title: 'Rate Limiter',
        description: 'Distributed rate limiter using Redis with token bucket or sliding window algorithm.',
        concepts: ['Redis', 'Token Bucket', 'Sliding Window', 'Distributed Rate Limiting'],
        status: 'planned' as const,
      },
    ],
  },
];
