# iStore — Premium iPhones (Static)

A simple, responsive storefront with product cards and a dynamic product details page.

## Deploy for free

### Option A — GitHub Pages (recommended)
1. Create a new GitHub repo (public). Name it anything (e.g., `istore`).
2. Push this folder to the repo (see commands below).
3. On GitHub: Settings → Pages → Build and deployment
   - Source: Deploy from a branch
   - Branch: `main` (or `master`) / folder: `/root`
4. Wait ~1–2 minutes. Your site will be live at: `https://<username>.github.io/<repo>/`

If you see a 404, ensure paths use forward slashes `/` (fixed here) and pages are enabled.

### Option B — Netlify (drag & drop)
1. Go to https://app.netlify.com/ and sign up.
2. New site from Git → connect your GitHub repo → pick this repo → deploy.
   - Or drag the entire project folder onto Netlify Drop: https://app.netlify.com/drop
3. Netlify gives you a live URL instantly.

### Option C — Vercel (Git)
1. Go to https://vercel.com/ → New Project → Import from GitHub → select repo → deploy.

No build step required (pure HTML/CSS/JS).

## Push to GitHub (PowerShell)
Run in this folder (change username/repo):

```powershell
git init
git add .
 git commit -m "Initial commit"
 git branch -M main
 git remote add origin https://github.com/<your-username>/<your-repo>.git
 git push -u origin main
```

If `git` not found, install Git: https://git-scm.com/download/win

## Local preview (optional)
```powershell
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

## Notes
- Product details live at `product.html?id=iphone-16-pro` etc.
- Inline SVG icons used for reliability on CDNs.
- Paths use `/` for cross‑platform hosting.
