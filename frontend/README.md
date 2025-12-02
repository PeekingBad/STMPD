# Frontend for Strapi

This is a Next.js application that serves as the frontend for the Strapi backend.

## Development Workflow

To develop with this project, you need to run both the Strapi backend and the Next.js frontend concurrently.

### 1. Start the Strapi Backend

Open a new terminal and navigate to the root of your project (where `package.json` for Strapi is located).

```bash
npm run develop
```

This will start the Strapi admin panel and API server, typically accessible at `http://localhost:1337`.

### 2. Configure Public Permissions in Strapi (One-Time Setup)

For the frontend to be able to fetch data, you need to make the `article` content type publicly accessible. If you haven't done this already:

1.  Go to your Strapi admin panel (usually `http://localhost:1337/admin`).
2.  Navigate to **Settings > Users & Permissions Plugin > Roles**.
3.  Click on the **Public** role.
4.  Scroll down to **Permissions**.
5.  In the **Article** section, check the boxes for `find` and `findOne`.
6.  Click **Save**.

### 3. Start the Next.js Frontend

Open another new terminal and navigate into the `frontend` directory:

```bash
cd frontend
```

Then, run the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### Development Considerations

-   **Content Updates:** Any changes to your content (e.g., creating a new article, updating an existing one) should be done through the Strapi admin panel.
-   **Code Changes:** Any changes to the website's appearance, logic, or new features should be implemented in the Next.js code within this `frontend` directory.
-   **Previewing Changes:** Use the built-in preview feature in Strapi to see draft content changes reflected in your frontend before publishing.

### 4. Using the Preview Feature

When you are editing an article in the Strapi admin panel, you will see a "Preview" button in the top right corner of the page.

Clicking this button will open a new tab in your browser showing the draft version of the article you are currently editing. This allows you to see your changes live before publishing them.

### Understanding Frontend and Strapi Roles

It's important to understand the distinct roles of the frontend and Strapi in this setup:

-   **Strapi (Backend/CMS):** Strapi acts as a **headless Content Management System (CMS)**. Its primary role is to provide an administrative interface for you to create, manage, and store your content (like articles, authors, categories). It exposes this content through an API that the frontend consumes.
-   **Frontend (Next.js Application):** This Next.js application is the **user-facing website**. Its role is to fetch the content from the Strapi API and display it to your users. All the code that defines how your website looks, how users interact with it, and its overall structure is developed within this `frontend` directory.

**Key Takeaways:**

-   **Content Management:** You manage all your website's content (e.g., text, images for articles) exclusively within the Strapi admin panel.
-   **Frontend Development:** You develop and modify the website's design, layout, features, and code exclusively within this `frontend` project. Changes made here do not directly affect the Strapi backend's code or content structure.
-   **Integration:** The "integration" involves the frontend making requests to the Strapi API to retrieve the content you've managed in Strapi, and then rendering it according to the frontend's code.