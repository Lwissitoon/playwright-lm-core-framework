========================================================================
# Playwright Multi-Project Test Automation Framework

A production-grade, enterprise-ready automation boilerplate engineered for multi-team scaling. This framework implements a strict **Page Object Model (POM)** with **Lazy Loading Locators**, **Hybrid Test Fixtures**, optional **Storage State Management (Session Isolation)**, and **Allure Reporting**.

------------------------------------------------------------------------
ARCHITECTURE DESIGN
------------------------------------------------------------------------
This repository is optimized for micro-frontend architectures or multi-
tenant workspaces where different teams work on independent sub-applications
simultaneously.

* Isolated Directories: Core application scopes are encapsulated into
  dedicated folders (src/pages/project_2, src/tests/project_2) to prevent
  repository merge conflicts between teams.
* Lazy Loading Locators: Element locators are evaluated on-demand using
  TypeScript "get" properties. They do not consume resources or hit the
  DOM until an explicit interaction is invoked.
* Hybrid Fixture Layering: Local team-specific fixture files extend from
  a centralized global fixture context. This allows team tests to 
  automatically inherit universal setups (envConfig, universal helpers)
  while keeping project dependencies decoupled.
* Selective Authentication: Execution tracks are separated between 
  authenticated and unauthenticated browser contexts, allowing clean user
  interaction validations (e.g., login error handling) to coexist beside
  session-bypass scripts.

------------------------------------------------------------------------
REPOSITORY STRUCTURE
------------------------------------------------------------------------
```text
playwright-lm-core-framework/
├── .allure/                        # Allure core configuration assets
├── src/
│   ├── config/
│   │   └── env.config.ts           # Dynamic environment controls & variables
│   ├── fixtures/
│   │   └── global.fixture.ts       # System core universal fixture layer
│   ├── helpers/
│   │   └── common.helpers.ts       # Globally shared utility classes
│   ├── pages/
│   │   ├── base.page.ts            # Encapsulated resilient browser controls
│   │   └── project_2/              # Team 2 Application Element repository
│   │       ├── login.page.ts
│   │       └── p2.factory.ts       # Lazy Page Object instantiation barrel
│   ├── storage/
│   │   └── .gitkeep                # Ignored tracking directory for auth cookies
│   └── tests/
│       └── project_2/              # Team 2 Testing Context
│           ├── data/
│           │   └── login.data.ts    # Split Data Matrix Providers
│           ├── anonymous/          # Tests running without session tokens (Clean Browser)
│           │   └── login-failures.spec.ts
│           ├── auth/               # Tests executing inside logged-in dashboard profiles
│           │   └── dashboard.spec.ts
│           ├── auth.setup.ts       # Unique setup worker mapping auth checkpoints
│           └── project2.fixture.ts  # Extended project-level fixture connector
├── .gitignore                      # Prevents local cache, states, and report tracking leaks
├── package.json                    # Project dependencies, scripts, and runtime engines
├── playwright.config.ts            # Central configuration containing segmented Project profiles
└── tsconfig.json                   # TypeScript project execution guidelines
```
------------------------------------------------------------------------
SETUP & INSTALLATION
------------------------------------------------------------------------
1. Prerequisites:
   Ensure you have Node.js LTS (v18+) installed on your system.

2. Configure Dependencies:
   Navigate to your framework root directory and install node modules
   alongside the platform-specific browser packages:

   Command A: npm install
   Command B: npx playwright install

------------------------------------------------------------------------
RUNNING AUTOMATED TESTS
------------------------------------------------------------------------
Because the architecture splits your workflows to enable Optional 
Authentication States, tests are executed against explicit targets in 
playwright.config.ts. Run these scripts from your terminal using "npm run":

* Run All Test Scenarios (Cross-Team):
  npm test

* Run All Profiles inside Project 2 (Anonymous + Authenticated via Regex):
  npm run test:project2

* Isolated Execution Flags (Direct CLI Core):
  - Run only anonymous/public tests:
    npx playwright test --project=project_2_anonymous

  - Run only secure dashboard tests (Triggers auth.setup.ts first):
    npx playwright test --project=project_2_auth

  - Run a single target file using interactive UI Mode:
    npx playwright test src/tests/project_2/anonymous/login-failures.spec.ts --ui

------------------------------------------------------------------------
GENERATING VISUAL REPORTING (ALLURE REPORT)
------------------------------------------------------------------------
The framework cleans out historic run logs, compiles your results to the
allure-results folder, and bundles them into an interactive HTML 
visualization matrix.

1. Compile execution results:
   npm run report:generate

2. Open the local report dashboard server:
   npm run report:open

------------------------------------------------------------------------
CODE MAINTENANCE BLUEPRINT
------------------------------------------------------------------------
When adding a new sub-project (e.g., project_3), teams must replicate the
clean separation standard:
1. Create a src/pages/project_3/ folder for Page Objects and a Page Factory.
2. Extend globalTest inside a new src/tests/project_3/project3.fixture.ts file.
3. Register the match tracking regex profiles inside playwright.config.ts
   under the projects section.
