# Contributing to [Project Name]

Thank you for your interest in contributing to our project! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/m-alhoomaidi/nestjs-clean-arch.git
   cd nestjs-clean-arch
   ```

3. Create a new branch:

   ```bash
   # For new features
   git checkout -b feat/feature-name

   # For bug fixes
   git checkout -b fix/bug-name
   ```

## Branch Naming Convention

- `feat/*` - For new features
- `fix/*` - For bug fixes
- `docs/*` - For documentation changes
- `refactor/*` - For code refactoring
- `test/*` - For adding or updating tests

## Pull Request Process

1. Ensure your branch is up to date with main:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. Push your changes:

   ```bash
   git push origin feat/your-feature
   ```

3. Create a Pull Request on GitHub

The appropriate PR template will be automatically selected based on your branch prefix:

- `feat/*` branches will use the feature template
- `fix/*` branches will use the fix template

## Development Guidelines

1. Follow the project's architecture:

   - `core/` - Domain entities and business rules
   - `application/` - Use cases and application logic
   - `infrastructure/` - External concerns (database, HTTP, etc.)

2. Testing Requirements:

   - Write unit tests for core domain logic
   - Write integration tests for infrastructure code
   - Maintain or improve code coverage

3. Code Style:
   - Follow existing code formatting
   - Use meaningful variable and function names
   - Add comments for complex logic

## Need Help?

- Create an issue for bugs or feature requests
- Join our [Discord/Slack] community
- Check our [Documentation]

## License

By contributing, you agree that your contributions will be licensed under the project's license.
