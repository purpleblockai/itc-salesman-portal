# ITC Salesman Portal

A modern web application for ITC salesmen to manage retailer registrations, verifications, and interactions.

## Features

### 1. Authentication & User Management
- Salesman Login
- Registration System
- Profile Management

### 2. Retailer Management
- Retailer Registration
- QR Code Generation
- UPI Payment Integration
- Verification Process

### 3. UI/UX Features
- Modern, Responsive Design
- User-friendly Interface
- Loading States
- Success/Error Notifications

## Technical Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI Components

## Prerequisites

- Node.js (v18 or higher)
- pnpm (Package Manager)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/purpleblockai/itc-salesman-portal.git
cd itc-salesman-portal
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
# To run on default port 3000
pnpm dev

# To run on a specific port (e.g., 3001)
pnpm dev -- -p 3001
```

4. Build for production:
```bash
pnpm build
```

## Project Structure

```
itc-salesman-portal/
├── app/                    # Next.js app directory
│   ├── login/             # Login pages
│   ├── register/          # Registration flow
│   ├── signup/            # Signup process
│   ├── verify/            # Verification pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── theme-provider.tsx
├── public/               # Static assets
└── styles/              # Global styles
```

## Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Description of your changes"
```

3. Push to GitHub:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is private and proprietary. All rights reserved.
