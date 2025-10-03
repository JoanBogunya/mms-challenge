# MediaMarktSaturn Tech Challenge

This project is a technical challenge for **MediaMarktSaturn** developed by **Joan Bogunyà**.

It is a React application using TypeScript, Apollo Client, GraphQL, Styled Components, and Vitest for testing.  
The app demonstrates searching and viewing GitHub issues with pagination and detail views.

---

## How to run the application

### 1. **Clone the repository**

```bash
git clone <your-repo-url>
cd mms-challenge
```

---

### 2. **Install dependencies**

```bash
npm install
```

---

### 3. **Set up environment variables**

Create a `.env` file in the root directory with the following content:

```
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

- You need a [GitHub personal access token](https://github.com/settings/tokens) with `public_repo` access.
- This is required for the GitHub GraphQL API.

---

### 4. **Run the app**

```bash
npm run dev
```

- The app will be available at [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

---

### 5. **Run tests**

```bash
npm run test
```

- Runs all unit tests using Vitest.

---

## Tech Stack

- **React** + **TypeScript**
- **Apollo Client** (GraphQL)
- **Styled Components**
- **React Router**
- **Vitest** + **Testing Library** (unit tests)

---

## Project Structure

```
src/
  components/      # Reusable UI components
  config/          # Theme and constants
  features/        # Feature modules
  graphql/         # Apollo client setup
  routes/          # App routing
  main.tsx         # App entry point
```

---

## Notes

- While accessibility is a priority in production code, due to time constraints for this challenge, some accessibility best practices (such as full keyboard navigation, ARIA attributes, and screen reader support) could not be fully implemented.
- Absolute pathing has also not been implemented due to time constraints.
- This project is for evaluation purposes only.

---
