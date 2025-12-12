# Next.js & Strapi Starter for a Headless CMS

This project is a frontend application built with Next.js, React, Tailwind CSS, and TypeScript, designed to work with a Strapi backend as a headless CMS

## Project Overview

This is a starter template for building a website with a decoupled frontend and backend. The frontend is a Next.js application, and the backend is powered by Strapi (CMS). This architecture allows for a flexible and scalable solution where content is managed in Strapi and consumed by the Next.js frontend.

### Key Features:

- **Frontend (This Repository):**

  - Built with [Next.js](https://nextjs.org/): A React framework for production.
  - Styled with [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
  - Written in [TypeScript](https://www.typescriptlang.org/): For static type checking.
  - Includes a dark mode feature using `next-themes`.
  - UI components from `@headlessui/react` and `@heroicons/react`.

- **Backend (Separate Strapi Project):**
  - [Strapi](https://strapi.io/): A leading open-source headless CMS.
  - Provides a user-friendly interface to manage content.
  - Exposes a customizable API that the Next.js frontend consumes.

## Getting Started

To get this project up and running, you will need to have both the Next.js frontend and the Strapi backend running.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn
- A running Strapi instance (either locally or on a server)

### 1. Setting up the Strapi Backend

If you don't have a Strapi project, you can create one by following the [Strapi Quick Start Guide](https://docs.strapi.io/dev-docs/quick-start).

Once your Strapi project is set up:

1.  **Create your Content-Types:** In the Strapi admin panel, create the necessary `Content-Types` (e.g., `Article`, `Page`, `Hero-Section`). The data structures in `frontend/src/app/page.tsx` can be used as a reference for the fields you need.
2.  **Set Permissions:** Go to `Settings` > `Roles` > `Public` and enable the `find` and `findOne` permissions for your Content-Types so that the Next.js frontend can fetch the data.
3.  **Get the API URL:** Your Strapi API will be available at `http://localhost:1337` by default if you are running it locally.

### 2. Setting up the Next.js Frontend

1.  **Clone this repository:**

    ```bash
    git clone https://github.com/PeekingBad/STMPD
    cd /frontend/
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create an environment file:**
    Create a `.env` file in the `frontend` directory by copying the example file:

    ```bash
    cp .env.example .env
    ```

    You will need to create the `.env.example` file if it does not exist. A simple example would be:

    ```
    STRAPI_API_URL=http://localhost:1337
    ```

4.  **Configure the environment variables:**
    Open the `.env` file and set the `STRAPI_API_URL` to the URL of your Strapi backend.

    ```
    STRAPI_API_URL=http://your-strapi-backend-url
    ```

    For local development, this will likely be `http://localhost:1337`.

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The frontend will be available at `http://localhost:3000`.

## Hosting

### Backend (Strapi)

You can host your Strapi backend on various platforms. Here are a few options:

- **Strapi Cloud:** The official managed hosting platform for Strapi.
- **Heroku:** A popular platform for deploying Node.js applications.
- **AWS, Google Cloud, Azure:** For more advanced configurations.

### Frontend (Next.js)

The Next.js frontend can be deployed to any platform that supports Node.js. [Vercel](https://vercel.com/), the creators of Next.js, is a highly recommended option for its seamless integration.

To deploy on Vercel:

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the repository on Vercel.
3.  Vercel will automatically detect that it's a Next.js project.
4.  **Set the environment variable:** In the Vercel project settings, add the `STRAPI_API_URL` environment variable and point it to the URL of your hosted Strapi backend.
5.  Deploy!

## License

This project is licensed under the MIT License.
