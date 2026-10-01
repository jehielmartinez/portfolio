import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import App from './App.tsx'
import './index.css'

// FA's CSS is bundled above so prerendered icons are styled before JS runs.
config.autoAddCss = false

// index.html is prerendered at build time (scripts/prerender.js); in dev it's empty, so render fresh.
const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
