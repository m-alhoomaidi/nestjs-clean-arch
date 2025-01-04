# Development Guide

This guide will help you set up and start developing on the project.

## Setup Instructions

1. **Prerequisites**

   - Node.js (v16 or higher)
   - npm or yarn
   - Git

2. **Installation**

   ```bash
   # Clone the repository
   git clone [repository-url]

   # Install dependencies
   yarn install
   ```

## Environment Configuration

1. Create a `.env` file in the root directory:

   ```env
   PORT=3000
   # Add other environment variables as needed
   ```

2. Configure your development environment variables according to the `.env.example` file.

## Development Workflow

1. **Start Development Server**

   ```bash
   yarn start:dev
   ```

2. **Build the Application**

   ```bash
   yarn build
   ```

3. **Run Tests**
   ```bash
   yarn test
   yarn test:e2e
   ```

## Testing Guidelines

- Write unit tests for services and controllers
- Write e2e tests for API endpoints
- Maintain test coverage above 80%
- Follow the AAA (Arrange-Act-Assert) pattern
