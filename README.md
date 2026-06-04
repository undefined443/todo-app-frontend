# Todo App - Frontend

React frontend for a todo application with full CRUD support.

## Tech Stack

- **React 19** — UI framework
- **Zustand** — state management
- **Tailwind CSS v4** — styling
- **Axios** — HTTP client
- **Vite** — build tool

## Prerequisites

Backend API must be running. The default endpoint is `http://localhost:5000`.

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_BASE_URL` | `http://localhost:5000` | Backend API base URL |

Copy `.env.example` to `.env` and adjust as needed. For local overrides, use `.env.local` (not committed to git).

## Getting Started

```bash
pnpm install
pnpm dev
```

Other commands:

```bash
pnpm build    # production build
pnpm preview  # preview production build
pnpm lint     # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx    # create todo form
│   ├── TodoItem.jsx    # single todo item
│   └── TodoList.jsx    # todo list
├── services/
│   └── api.js          # API client (axios)
├── store/
│   └── todoStore.js    # Zustand store
├── App.jsx
├── main.jsx
└── index.css
```

## API

Communicates with a REST API at `http://localhost:5000/api/todos`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | fetch all todos |
| POST | `/api/todos` | create a todo |
| PUT | `/api/todos/:id` | update a todo |
| DELETE | `/api/todos/:id` | delete a todo |
