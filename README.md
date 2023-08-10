# Eventio

A project developed during the STRV Frontend Academy 2022. For the Academy lessons, please, check out the [Wiki pages](https://github.com/strvcom/frontend-academy-2022/wiki).

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

## Getting Started

Follow this section to get the project running on your development machine.

### Prerequisites

Before getting started, make sure you have these tools installed:

- [Git](https://git-scm.com/)
- [Node.js v18](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

> We recommend you use [nvm](https://github.com/nvm-sh/nvm) to install Node.js.

### 1. Installation

Provided you have all prerequisites ready, you can install the application with the following command:

```sh
yarn
```

### 2. Environment variables

Setup environment variables:

```sh
cp .env.example .env
```

For the `API_KEY`, reach out to [daniel.kraus@strv.com](mailto:daniel.kraus@strv.com?subject=FE%20Academy%3A%20I%20need%20the%20API%20Key).

### 3. Start the Application

To start a local server with the running application, run the following:

```sh
yarn dev
```

## Deployment

The application is deployed at [Vercel](https://vercel.com/) everytime new commits are pushed to the `main` branch (production mode) or to other branches (preview mode).

> In case you need to deploy manually, you can install the [Vercel CLI](https://vercel.com/cli) and run the following command: `vercel`

## Links

- [API Docs](https://strvfrontendtestproject.docs.apiary.io/) - Apiary
- [UI Design](https://www.figma.com/file/1sXplbYZYnKSb6eXaJ44pT/Eventio---Frontend-Test-Project) - Figma

## Architecture

Deploys to Vercel will also generate dependency maps, which are made public on the deploy URL on the following paths:

- `_dev/architecture/index.html`: Full map
- `_dev/architecture/2.html`: 2 levels deep
- `_dev/architecture/3.html`: 3 levels deep
- `_dev/architecture/4.html`: 4 lebels deep
- `_dev/architecture/5.html`: 5 levels deep

This *should not* be available in production, but we make it so as a means to have historical evolution of the architecture refactoring.

## Contributing

To start contributing to this project:

1. Clone the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'feat: add login form'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a Pull Request
