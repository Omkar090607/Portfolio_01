# Omkar Awaze — Portfolio

React + Vite + Tailwind + Framer Motion portfolio.

```bash
npm install
npm run dev      # local dev
npm run build    # production build
```

## Contact form (EmailJS)
The contact form sends submissions through EmailJS. In the EmailJS dashboard, set
the template's **To Email** to `omkarawaze1915@gmail.com` (as a fixed address, not
a template variable). Use `{{from_name}}`, `{{user_email}}`, `{{subject}}`, and
`{{message}}` in the template body as needed.

Set these values in `.env` for local development:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

For GitHub Pages, add the same three values as repository Actions secrets so the
deployment build can include them. The form reports a configuration error instead
of appearing to send when any setting is missing.

Contact: omkarawaze1915@gmail.com · [LinkedIn](https://www.linkedin.com/in/omkar-awaze-6322103b1/) · [GitHub](https://github.com/Omkar090607)

## Deploy to GitHub Pages
1. Push this project to a GitHub repo (branch `main`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Add secrets `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` under **Settings → Secrets and variables → Actions** for contact form delivery.
4. Every push to `main` rebuilds and publishes the site.
