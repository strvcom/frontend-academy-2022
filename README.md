# Eventio

A project developed during the STRV Frontend Academy 2022

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

## Getting Started

Follow this section to get the project running in your development machine.

### Prerequisites

Before getting started, make sure you have these tools installed:

- [Git](https://git-scm.com/)
- [Node.js v14](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

> We recommend you use [nvm](https://github.com/nvm-sh/nvm) to install Node.js.

### Installation

Provided you have all prerequisites ready, you can install the application with the following command:

```sh
yarn
```

### Environment variables

> For now, this project does not depend on environment variables. Once there are some, we'll document here how to get and install them.

### Start the Application

To start a local server with the running application, run the following:

```sh
yarn dev
```

### Deployment

The application is deployed at [Vercel](https://vercel.com/) everytime new commits are pushed to the `main` branch (production mode) or to other branches (preview mode).

> In case you need to deploy manually, you can install the [Vercel CLI](https://vercel.com/cli) and run the following command: `vercel`

## Roadmap

- [x] Project setup
- [ ] List of events
  - [ ] Consume events from API
  - [ ] Present the list of events
  - [ ] Allow switching between past/future events
  - [ ] Allow switching between list/grid view modes
  - [ ] Allow user to apply to an event
- [ ] Login
  - [ ] Create login form with client-side validation
  - [ ] Integrate form with API
  - [ ] Redirect user based on authentication status
- [ ] Create event
  - [ ] Create new event form with client-side validation
  - [ ] Integrate form with API
  - [ ] Redirect user to the list after creation
  - [ ] Refresh list of events upong creation

## Contributing

To start contributing to this project:

1. Clone the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'feat: add login form'`)
4. Push to the cranch (`git push origin feature/feature-name`)
5. Open a Pull Request
