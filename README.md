# Building history at Temper

Hi there! ✌🏼😊

This is the challenge for making a Post List Sortable and saving the history to go back in the commited actions. The app was built with Vue3 and Typescript. One thing I'd like to highlight is that I wanted to take in advantage the challenge to try out by my first time Vue3, Pinia, to handle the store and, Vitest, for the unit testing 🥸.

## Stack:

-   🚀 The webapp was build over Vite instead of Webpack
-   🔦 Was applied format with prettier and eslint
-   🛠️ Git hooks were implemented to ensure the product quality
-   ⛑️ Automation tests were done with playwright. See below for more details
-   🎨 Styles were applied with Tailwind CSS, using also the plugin for classes sorting
-   💫 Animation with [auto-animate](https://auto-animate.formkit.com/)
-   🌐 A module for internationalization was implemented

## Implementation details:

About the implementation it would be nice to summarize some patterns and good practices that were implemented:

-   Separation of responsibilities: services, store, mapper
-   Main logic was handle in the store, looking to have just one source of truth and allow being accesible from all hierarchy level
    -   Here was focusing the testing tasks, implementing a TDD aproach
-   The structure with the Composition API could allow to scale up easily without fall into issues like props drilling or event bowling
-   The mapper allow us to have a standar contract between backend and client sides.
-   Error handling using try/catch
-   Early returns whenever is possible
-   Don't falling into overabstractions at starting point
-   Don't falling into micro optimizations
-   Basic responsiveness was guaranteed
-   Loading and empty states components were created to support the UX

## Possible improvements / Next steps:

-   Fix build process with Vite
-   Continue working to achieve more pure functions
-   Store data in local/session storage
-   Other Vue3 improvements

Since it was not a complex logic, other technical decisions were:

-   Don't create a back for front end to process logic before and after fetch data
-   Just one env var was created to handle the base url

Thanks for check it out! I hope you enjoy the time. See you soon. 😎

# Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
# Runs unit testing without watch files
npm run test

# Runs unit testing watching files changes
npm run test:unit

# Runs unit testing watching files changes and generating coverage report
npm run test:coverage
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests in debug mode, able to record and get locators
npm run test:debug
# Runs the tests in headless mode
npm run test:head
# Runs the tests using the playwright ui
npm run test:ui
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```
