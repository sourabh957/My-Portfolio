export type ProjectStatus = 'building' | 'in-progress' | 'planned' | 'completed';

export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  architecture?: string[];
  tags: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  concepts?: string[];
}

export const projects: Project[] = [
  {
    id: 'image-storage-service',
    title: 'Image Storage Service',
    description:
      'A scalable image storage service managing upload/download lifecycle, image metadata, and object storage using presigned URLs.',
    problem:
      'Building a production-grade image management service that handles secure uploads, metadata indexing, and scalable object storage.',
    architecture: ['Client', 'Spring Boot API', 'PostgreSQL', 'AWS S3', 'Presigned URL'],
    tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'AWS S3', 'Java'],
    status: 'building',
    githubUrl: 'https://github.com/sourabh957/image-storage-service',
    featured: true,
    concepts: ['Presigned URLs', 'Object Storage', 'Image Metadata', 'Upload/Download Lifecycle', 'Scalable Storage Architecture'],
  },
  {
    id: 'ai-tax-agent',
    title: 'AI Tax Agent',
    description:
      'An AI-agent for tax-related reasoning and document processing, powered by RAG, vector databases, and LLM workflows.',
    problem:
      'Automating tax-related research and reasoning using AI agents, embedding-based retrieval, and LLM orchestration.',
    tags: ['FastAPI', 'LangChain', 'LangGraph', 'Python', 'RAG', 'Vector DB'],
    status: 'in-progress',
    featured: true,
    githubUrl: 'https://github.com/sourabh957/ai-tax-agent',
    concepts: ['AI Agent', 'RAG', 'Embeddings', 'Vector Database', 'LLM', 'Document Processing'],
  },
];
