# Playwright Multi-Project Hybrid Framework

This repository features a production-grade, highly scalable automation framework built with **Playwright** and **TypeScript**. It utilizes an industry-standard **Page Object Model (POM)** with **Lazy Loading** elements, explicit wrapper interactions, and a **Hybrid Fixture Layer** engineered for multi-tenant/multi-team scalability.

## Architecture Highlights
- **Multi-Project Isolation:** Different development teams can work simultaneously inside isolated directories (`project_2`, `project_1`) without causing merge conflicts or breaking cross-project code.
- **Hybrid Fixtures:** A core `global.fixture.ts` file handles framework-wide configuration injection (`envConfig`, `helpers`), while local, project-specific fixture files extend it to inject specialized Page Factories.
- **Lazy Loading Locators:** Element locators are evaluated on-demand utilizing TypeScript getters rather than instantiating elements eagerly in constructors. This mitigates stale element exceptions and optimizes memory footprint.

---

## Directory Structure

```text
playwright-hybrid-framework/
├── src/
│   ├── config/
│   │   └── env.config.ts          # Environment variables & project configurations
│   ├── fixtures/
│   │   └── global.fixture.ts      # Global Core Fixture (shared across teams)
│   ├── helpers/
│   │   └── common.helpers.ts      # Shared universal utility methods
│   ├── pages/
│   │   ├── base.page.ts           # Wrapped core browser interaction layer
│   │   └── project_2/             # Isolated Team 2 Page Objects
│   │       ├── login.page.ts
│   │       └── p2.factory.ts      # Unified App Factory for Team 2 pages
│   └── tests/
│       └── project_2/             # Team 2 Fixtures and Test Specifications
│           ├── project2.fixture.ts
│           └── login.spec.ts
├── playwright.config.ts           # Global Playwright configuration & project profiles
├── package.json
└── tsconfig.json
```

---

## Prerequisites
- **Node.js** (LTS Version recommended)

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright Browsers:**
   ```bash
   npx playwright install
   ```

---

## Running Tests

You can run your tests universally or restrict them to a specific project boundary via Playwright project profiles:

### Run All Projects
```bash
npm test
```

### Run Project 2 Only
```bash
npx playwright test --project=project_2
```

### Run Project 2 in UI/Interactive Mode
```bash
npx playwright test --project=project_2 --ui
```
