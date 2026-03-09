# Azure AI Chatbot

An advanced open-source AI-powered chatbot application built with Azure services and modern web technologies.

<img src="./public/readme/screenshot.png" alt="Azure AI Chatbot" width="600">

## 🚀 Quick Links

- [Features](#features)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Security](#security)
- [Contributing](#contributing)

## Features

- 🤖 Advanced AI chat capabilities powered by Azure AI
- 🔐 Enterprise-grade security and authentication
- 📱 Responsive design with mobile optimization
- 💾 Persistent data storage with Supabase
- 🔌 Multi-model AI provider support
- 🎨 Beautiful and intuitive user interface
- 📊 Real-time chat analytics

## System Architecture

### Architecture Overview

The Azure AI Chatbot follows a modern microservices-inspired architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                      User Interface Layer                    │
│                    (Next.js Frontend - Vercel)               │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                   API Gateway Layer                          │
│            (Next.js API Routes & Middleware)                 │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
┌───────▼──┐  ┌──────▼────┐  ┌───▼──────────┐
│ Azure AI │  │ Supabase   │  │  Ollama      │
│ Services │  │ PostgreSQL │  │  (Local)     │
└──────────┘  └────────────┘  └──────────────┘

```

### Step-by-Step Architecture Flow

#### Step 1: Client Layer
- React-based frontend application
- Handles user input and displays chat messages
- Real-time state management
- Responsive UI components

#### Step 2: Authentication & Authorization
- Supabase Auth integration
- Email/password authentication
- Role-based access control (RBAC)
- JWT token management

#### Step 3: API Layer
- Next.js API routes for backend logic
- Request validation and sanitization
- Rate limiting and throttling
- CORS configuration

#### Step 4: AI Processing Layer
- Multiple AI model support:
  - Azure OpenAI (GPT-4, GPT-3.5)
  - Local models via Ollama
  - Additional providers via environment configuration
- Prompt engineering and optimization
- Response streaming support

#### Step 5: Data Persistence Layer
- Supabase PostgreSQL database
- Chat history storage
- User profiles and preferences
- File attachments metadata

#### Step 6: Security Layer
- Encryption at rest and in transit
- API key management
- Environment variable protection
- Input validation and sanitization
- OWASP compliance

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Docker (for local development)
- Azure account (for Azure AI services)
- Git

### Local Development Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/OMIXEC/Azure-AI-chatbot.git
cd Azure-AI-chatbot
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `AZURE_OPENAI_API_KEY` - Azure OpenAI API key
- `AZURE_OPENAI_ENDPOINT` - Azure OpenAI endpoint
- `OPENAI_API_KEY` - OpenAI API key (optional)

#### 4. Setup Database

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Start Supabase locally
supabase start

# Push migrations
supabase db push
```

#### 5. Setup Local AI (Optional)

```bash
# Install Ollama from https://ollama.ai
# Pull a model
ollama pull llama2
```

#### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Production Deployment

#### Deploy with Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Configure build settings (Framework: Next.js)
5. Deploy

```bash
# Environment variables needed on Vercel:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY
# - SUPABASE_SERVICE_ROLE_KEY
# - AZURE_OPENAI_API_KEY
# - AZURE_OPENAI_ENDPOINT
# - AZURE_GPT_45_VISION_NAME
```

#### Deploy Supabase Database

```bash
supabase login
supabase link --project-ref <project-id>
supabase db push
```

## Security

### Security Features

- ✅ End-to-end encryption for sensitive data
- ✅ Regular security audits and penetration testing
- ✅ OWASP Top 10 compliance
- ✅ Rate limiting on API endpoints
- ✅ Input validation and sanitization
- ✅ SQL injection prevention with parameterized queries
- ✅ XSS protection with Content Security Policy
- ✅ CORS properly configured

### Reporting Security Issues

⚠️ **Do not** open public GitHub issues for security vulnerabilities.

If you discover a security vulnerability, please email: [security@example.com](mailto:security@example.com)

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

### 🔐 Incoming Security Update (March 2026)

**Status**: In Development

We are implementing critical security enhancements:

#### 1. Enhanced API Authentication
- Implementation of OAuth 2.0 with PKCE
- Refresh token rotation mechanism
- API key rotation policies
- Multi-factor authentication (MFA) support

#### 2. Data Encryption
- AES-256 encryption for stored chat data
- TLS 1.3 for all in-transit communications
- Encrypted environment variable handling
- Zero-knowledge encryption for sensitive user data

#### 3. Access Control Improvements
- Fine-grained permission management
- Row-level security (RLS) policies
- Audit logging for all data access
- Automated threat detection

#### 4. Compliance Updates
- GDPR data handling compliance
- SOC 2 Type II certification preparation
- HIPAA readiness (for healthcare deployments)
- Regular security patch management

#### 5. Infrastructure Hardening
- Container security scanning
- Secrets management with Azure Key Vault
- Network isolation and firewall rules
- DDoS protection mechanisms

**Timeline**: Expected completion by Q2 2026

**Testing**: We will provide a beta version for security-conscious users to test before general release.

## Updating

To update your local instance:

```bash
npm run update
```

If running a hosted instance, also run:

```bash
npm run db-push
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation
- Report security issues privately

## Support & Community

- 💬 **Discussions**: Use the [Discussions](https://github.com/OMIXEC/Azure-AI-chatbot/discussions) tab for questions
- 🐛 **Issues**: Report bugs using [GitHub Issues](https://github.com/OMIXEC/Azure-AI-chatbot/issues)
- 📖 **Documentation**: See the [docs](./docs) folder for detailed guides

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Azure AI Services documentation
- Supabase community
- Vercel platform
- Open-source community

## Contact

For questions or feedback:
- Create a discussion on GitHub
- Check existing documentation
- Review the FAQ section

---

**Last Updated**: March 9, 2026

For the latest updates and announcements, star the repository and enable notifications!