# Contributing to AI Log Analyzer 🤝

We love your input! We want to make contributing to AI Log Analyzer as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process 🔄

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Local Development Setup 💻

1. **Prerequisites**
   - Node.js (v18 or higher)
   - npm (v8 or higher)

2. **First-time setup**
   ```bash
   # Clone your fork
   git clone https://github.com/SUGAM-ARORA/Logai.git

   # Navigate to the project
   cd Logai

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Development Commands**
   ```bash
   # Run tests
   npm test

   # Lint code
   npm run lint

   # Build for production
   npm run build
   ```

## Project Structure 📁

```
Logai/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── tests/            # Test files
```

## Coding Guidelines 📝

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for API changes
- Write tests for new features

## Pull Request Process 🔃

1. Update the README.md with details of changes if needed
2. Update the documentation with details of any changes to the interface
3. The PR will be merged once you have the sign-off of at least one maintainer

## Any contributions you make will be under the MIT Software License ⚖️

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/SUGAM-ARORA/Logai/issues) 🐛

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/SUGAM-ARORA/Logai/issues/new).

## Write bug reports with detail, background, and sample code 📝

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License 📄

By contributing, you agree that your contributions will be licensed under its MIT License.

## References 📚

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).