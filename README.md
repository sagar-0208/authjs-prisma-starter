# Next.js Auth Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A ready-to-use authentication starter template with Next.js, featuring:
- Magic Link authentication via Auth.js (NextAuth)
- Prisma ORM with PostgreSQL (Neon)
- Email sending with Nodemailer
- Database schema and migrations

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- PostgreSQL database (Neon recommended)
- Email service (Mailtrap recommended for development)

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/sagar-0208/authjs-prisma-starter.git
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Create .env file**  
   ```env
   AUTH_SECRET="run: npx auth secret"
   DATABASE_URL="postgres://user:pass@neon-hostname/project"

   # Mail configuration (use Mailtrap for development)
   EMAIL_SERVER_USER="your-mailtrap-user"
   EMAIL_SERVER_PASSWORD="your-mailtrap-pass"
   EMAIL_SERVER_HOST="sandbox.smtp.mailtrap.io"
   EMAIL_SERVER_PORT="2525"
   EMAIL_FROM="noreply@example.com"
   ```

4. **Initialize database**  
   ```bash
   npx prisma db push
   ```

5. **Start development server**  
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **Next.js** - React framework
- **Auth.js** - Authentication (Magic Link strategy)
- **Prisma ORM** - Database ORM
- **Neon** - Serverless PostgreSQL
- **Nodemailer** - Email sending

## 🔐 Environment Variables

| Variable         | Description                   |
| ---------------- | ----------------------------- |
| `AUTH_SECRET`    | Authentication secret key     |
| `DATABASE_URL`   | PostgreSQL connection string  |
| `EMAIL_SERVER_*` | Email service credentials     |
| `EMAIL_FROM`     | Sender email address          |

## 📚 Documentation
- [Auth.js Documentation](https://authjs.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Neon PostgreSQL Guide](https://neon.tech/docs/)

> **Note:** This template uses magic link authentication - users receive a sign-in link via email. Make sure to configure your email provider properly in production.
