# Meet Jethwa — Portfolio

A two-part project:

- **frontend/** — React app (built with Vite) that renders the portfolio site.
- **backend/** — Express API with one route, `POST /api/contact`, that receives
  messages from the contact form and saves them to `backend/data/messages.json`.

## Design

The visual identity is built around your background as a data analyst: a
grid-paper background echoes spreadsheet cells, the hero stats are styled as
"active cell" KPI cards, and monospace type is used only for data (numbers,
dates, tags) to separate it visually from prose. Fonts: **Fraunces** (display),
**Inter** (body), **JetBrains Mono** (data/labels).

All page content (name, experience, skills, projects, etc.) lives in one
place: `frontend/src/data/resumeData.js`. Edit that file to update the site —
no need to touch any component.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

### 1. Start the backend

```bash
cd backend
npm install
npm run dev
```

This runs the API at `http://localhost:4000`. Health check: `GET /api/health`.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

This runs the site at `http://localhost:5173`. Open it in your browser —
the contact form will POST to your local backend.

## Building for production

```bash
cd frontend
npm run build
```

This outputs static files to `frontend/dist/`, which you can deploy to any
static host (Vercel, Netlify, GitHub Pages, etc.). Deploy `backend/` separately
to a Node host (Render, Railway, Fly.io, etc.), then set `VITE_API_URL` in the
frontend's environment to your deployed backend's URL before building.

## Wiring up real email delivery

Right now contact form messages are written to `backend/data/messages.json`.
To have them emailed to you instead (or as well), install `nodemailer` (or use
a transactional email API like Resend or SendGrid), add your credentials to a
`.env` file in `backend/` (already gitignored), and send the email inside
`backend/routes/contact.js` where the comment marks the spot.

## Customizing

- **Content:** `frontend/src/data/resumeData.js`
- **Colors, fonts, spacing:** CSS custom properties at the top of
  `frontend/src/styles/index.css`
- **Sections:** each section is its own component in `frontend/src/components/`
"# Portfolio-Website" 
