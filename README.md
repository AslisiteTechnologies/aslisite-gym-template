# Gym Website Template

A standalone, reusable gym website template. It contains only the website frontend and its editable sample content; there is no agency panel, prospect database, API server, or credential file in this repository.

## Run it

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create another version, edit `src/gym-config.js`. Update the gym name, location, text, contact details, verified services and hours, accent color, image URL, and SEO title/description. Leave details blank until you have verified them.

The page layout and styling are shared in `src/main.jsx` and `src/styles.css`; change `gym-config.js` for routine per-gym customization. Build a production copy with `npm run build`.
