# STMPD Project with Next.js and Strapi

This project is a web application for STMPD, built with a Next.js frontend and a Strapi backend. It serves as a starter template for creating a decoupled website where content is managed in Strapi and displayed in a Next.js application.

## Getting Started

Follow these instructions to get both the backend and frontend of the application up and running on your local machine.

### Prerequisites

Make sure you have the following software installed:

*   [Node.js](https://nodejs.org/) (v18 or newer recommended)
*   `yarn` or `npm` package manager
*   [Postman](https://www.postman.com/downloads/) (Recommended for testing the Strapi API)

### Backend Setup (Strapi)

The backend is a [Strapi](https://strapi.io/) application. Strapi is a headless CMS that allows you to manage the content of your website.

1.  **Navigate to the backend directory:**
    ```bash
    cd ../backend
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    # or
    npm install
    ```

3.  **Run the Strapi application in development mode:**
    ```bash
    yarn develop
    # or
    npm run develop
    ```

The Strapi application will be running at [http://localhost:1337](http://localhost:1337). You can access the admin panel to manage content.

### Frontend Setup (Next.js)

The frontend is a [Next.js](https://nextjs.org/) application. It's responsible for fetching content from Strapi and rendering the website.

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    # or
    npm install
    ```

3.  **Run the Next.js development server:**
    ```bash
    yarn dev
    # or
    npm run dev
    ```

The Next.js application will be running at [http://localhost:3000](http://localhost:3000).

## How It Works

This project is architected as a decoupled system, with a clear separation of concerns between the backend and the frontend.

### The Backend (Strapi)

*   **Role**: The Strapi backend is the content hub. All the text, images, and other data for the website are created and managed here.
*   **Content Types**: In the Strapi admin panel, you can define "Content Types," which are like templates for your data (e.g., a "Blog Post" content type could have fields for a title, content, and a cover image).
*   **API Endpoints**: Strapi automatically creates API endpoints for your content types. You can use **Postman** to send requests to these endpoints (e.g., `GET http://localhost:1337/api/blog-posts`) to see the JSON data that Strapi provides. This is a great way to check your API.
*   **Permissions**: Remember to set the permissions for your content types in `Settings > Roles > Public` to allow the frontend to fetch the data.

#### Advanced Queries with `qs`
To fetch exactly the data you need, you'll often need to create more complex queries. Strapi uses the `qs` library to parse complex query strings. This is very powerful for filtering, sorting, and populating relations.

The frontend is already configured to use `qs` to build these queries. Here's an example of how you might fetch a blog post by its slug and also populate the author relation:

```javascript
import qs from "qs";

const slug = "my-awesome-post";

const query = qs.stringify({
  filters: {
    slug: {
      $eq: slug,
    },
  },
  populate: {
    author: {
      populate: "*",
    },
  },
});

const url = new URL("/api/blog-posts", getStrapiURL());
url.search = query;

// Now you can fetch from this URL
const response = await fetch(url.href);
```
This will generate a URL like:
`http://localhost:1337/api/blog-posts?filters[slug][$eq]=my-awesome-post&populate[author][populate]=*`

You can learn more about the available query parameters in the [Strapi documentation](https://docs.strapi.io/dev-docs/api/rest/query-params).

### The Frontend (Next.js)

*   **Role**: The Next.js frontend is the presentation layer. Its job is to fetch the data from the Strapi API and render it as a user-facing website.
*   **Fetching Data**: The frontend uses functions in `src/lib/fetch.ts` to make HTTP requests to the Strapi API. It then uses this data to populate the pages and components.
*   **Styling**: All the styling is done in the Next.js application. This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can modify the styles by editing the CSS classes in the `.tsx` components in the `src/components` and `src/app` directories. The main stylesheet is `src/app/globals.css`.

#### Creating New Pages
To create a new page, you create a new folder inside the `src/app` directory. The name of the folder will be the URL path for the page. Inside that folder, create a `page.tsx` file. This file will be the entry point for your page.

For example, to create a `/about` page, you would create the file `src/app/about/page.tsx`.

You can then fetch data for this page from your Strapi backend and render it in your component.

