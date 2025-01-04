# Contributing Guidelines

Thank you for considering contributing to our project! This document provides guidelines and instructions for contributors.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How to Contribute

1. **Prerequisites**

   - Node.js (v16 or higher)
   - Yarn package manager
   - Git

2. **Installation**

   ```bash
   # Fork the repository on GitHub
   # Then clone your fork
   git clone https://github.com/your-username/project-name.git
   cd project-name

   # Install dependencies
   yarn install
   ```

3. **Fork & Clone**

   ```bash
   # Fork the repository on GitHub
   # Then clone your fork
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

4. **Create a Branch**

   ```bash
   # Create a branch for your feature/fix
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Make Changes**

   - Write your code
   - Follow our coding standards
   - Add/update tests as needed
   - Update documentation if required

6. **Commit Changes**

   ```bash
   git add .
   git commit -m "type(scope): description"
   ```

7. **Push & Submit PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]
[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(auth): implement JWT authentication
fix(api): resolve user creation error
docs(readme): update installation instructions
```

## Pull Request Process

1. **PR Title**

   - Follow the same convention as commit messages
   - Example: `feat(auth): implement JWT authentication`

2. **PR Description**

   - Describe the changes clearly
   - Reference any related issues
   - Include screenshots for UI changes
   - List any breaking changes

3. **PR Checklist**
   - [ ] Code follows style guidelines
   - [ ] Tests added/updated and passing
   - [ ] Documentation updated
   - [ ] PR description completed
   - [ ] Linked to relevant issues

## Code Style Guidelines

1. **TypeScript**

   - Use TypeScript features appropriately
   - Follow interface-first design
   - Use meaningful variable names
   - Document complex functions with JSDoc

2. **NestJS Specific**

   - Follow NestJS best practices
   - Use decorators appropriately
   - Implement proper dependency injection
   - Follow module organization guidelines

3. **Testing**
   - Write unit tests for services
   - Write e2e tests for APIs
   - Follow AAA (Arrange-Act-Assert) pattern
   - Maintain good test coverage

## Getting Help

If you need help with your contribution:

- Create an issue with a question tag
- Join our community chat/forum
- Check existing documentation

## Review Process

1. All PRs require at least one review
2. Address review comments promptly
3. Maintainers may request changes
4. Once approved, PRs will be merged

## Additional Resources

- [Project Documentation](../README.md)
- [Development Guide](../development/README.md)
- [Architecture Guide](../architecture/README.md)
