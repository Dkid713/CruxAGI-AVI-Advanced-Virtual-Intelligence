# CruxAGI - Advanced AI Chat Platform with Compression and Reasoning

## Overview

CruxAGI is a sophisticated AI chat platform that integrates advanced compression algorithms, multi-provider LLM support, and intelligent reasoning engines. The system combines traditional chat functionality with cutting-edge compression technology (Omega Bridge), Gen1/Gen2 reasoning systems, and multi-agent orchestration capabilities. Built as a full-stack TypeScript/Python application with React frontend and Express backend, it focuses on token optimization, cost reduction, and enhanced AI capabilities through compression and abstraction layers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark theme support
- **State Management**: React hooks and context for session management
- **Authentication**: Replit OAuth integration with session-based auth

### Backend Architecture
- **Core Framework**: Express.js with TypeScript, designed for high-performance AI operations
- **Database Layer**: PostgreSQL with Drizzle ORM for schema management and migrations
- **Authentication**: Passport.js with Replit OAuth strategy and session storage
- **Compression Engine**: Multi-layered compression system including:
  - Omega Bridge (FastAPI Python service on port 8081)
  - Stenographic compression with bracket/hex/mixed modes
  - Gen1→Omega bridge for learning corpus generation
  - Production gates preventing expansion serving

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **Compression Artifacts**: JSON/JSONL storage for compression dictionaries and learning data
- **Monitoring**: Prometheus metrics with MongoDB for analytics aggregation

### AI and LLM Integration
- **Multi-Provider Support**: OpenAI GPT models, Anthropic Claude, xAI Grok
- **Compression-Aware Chat**: Integrated Omega compression for token optimization
- **Reasoning Engines**: Gen1 and Gen2 reasoning with memory persistence
- **Agent Orchestration**: Athena orchestration engine for complex workflows
- **Cost Tracking**: Comprehensive token counting and cost attribution

### Compression System Design
- **Step 2 Compression**: Stenographic compression with production readiness
- **Step 3 Compression**: Advanced compression (shadow-only due to expansion issues)
- **Expansion Guards**: Hard gates preventing token expansion in production
- **Canonical Token Meter**: Unified tiktoken-based measurement across all compression steps
- **Reversibility Verification**: Lossless compression validation before serving

### External Service Integration
- **Omega Bridge Service**: Python FastAPI service for advanced compression algorithms
- **Tool SDK**: Secure execution environment for HTTP, Python, SQL, Z3, SymPy, and retrieval tools
- **Monitoring Stack**: Prometheus + Grafana for production observability
- **Twitter Integration**: Mention processing and response automation

### Security and Production Readiness
- **Policy Enforcement**: Tool SDK with security policies and audit logging
- **Rate Limiting**: Request throttling and cost controls
- **Health Checks**: Comprehensive system validation and continuous monitoring
- **Error Handling**: Robust error boundaries and fallback mechanisms
- **Environment Isolation**: Development/production configuration management

## Recent Changes

### September 1, 2025 - Warp Drive Pattern Vault & Statistical Hardening Complete
- **Production Statistical Hardening**: Bootstrap confidence intervals (95% CI), stratified validation, Simpson's paradox detection, auto-revert system
- **Warp Drive Pattern Vault**: Advanced pipeline architecture with C4/Stack Exchange data loading, adaptive thresholds, usage statistics tracking
- **Parallel Processing Engine**: Worker-thread acceleration for 4x replayAndScore speedup, production-grade fault tolerance
- **Redis-Backed Registry**: Distributed policy storage with memory fallback, TTL management, performance monitoring
- **Statistical Rigor**: Bootstrap CI lower bound ≥0.12, 7-day avg ≥0.10, Bayesian confidence ≥95%, cost sanity checks
- **Fast Iteration Infrastructure**: 2ms feedback loops via Jest harness, threshold tuning without deployment delays
- **Enterprise Monitoring**: Prometheus metrics, pack cards with Grafana snapshots, comprehensive audit trails

## External Dependencies

### Core AI Services
- **OpenAI API**: GPT models for chat, embeddings, and LLM-judged evaluation
- **Anthropic API**: Claude models for alternative reasoning approaches  
- **xAI API**: Grok integration for model comparison and benchmarking

### Infrastructure Services
- **PostgreSQL Database**: Primary data persistence via DATABASE_URL
- **Redis**: Session caching and distributed state management
- **Prometheus**: Metrics collection and alerting infrastructure
- **MongoDB**: Analytics data aggregation and time-series storage

### Development and Deployment
- **Replit Platform**: Hosting and OAuth authentication provider
- **Vite**: Frontend build system and development server
- **Drizzle Kit**: Database migration and schema management
- **TypeScript**: Type safety across full stack
- **Python FastAPI**: Omega Bridge compression service

### Monitoring and Observability  
- **Grafana**: Dashboard visualization for system metrics
- **OpenTelemetry**: Distributed tracing and performance monitoring
- **Pino Logger**: Structured logging with correlation IDs
- **Jest**: Testing framework for unit and integration tests

### External APIs and Tools
- **Google Cloud Storage**: Asset and artifact storage
- **Notion API**: Knowledge base integration
- **Pinecone**: Vector database for semantic search
- **GitHub API**: Repository integration and automation
- **Twitter API**: Social media automation and monitoring