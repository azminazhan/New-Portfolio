# How to Publish Your Project to GitHub

Since `git` is not currently detected on your system, you'll need to install it first. Follow these steps to get your project on GitHub and deployed directly.

## Prerequisite: Install Git
1. Download Git for Windows from [git-scm.com](https://git-scm.com/download/win).
2. Install it with default settings.
3. **Important**: Restart your terminal (or VS Code) after installing.

## Part 1: Uploading Your Code (Pushing)

Once Git is installed, run these commands in your terminal inside the `ai-portfolio` folder:

```bash
# 1. Initialize Git
git init

# 2. Add all files to staging
git add .

# 3. Commit your changes
git commit -m "Initial portfolio release"

# 4. Create a main branch
git branch -M main
```

Now, go to [GitHub.com](https://github.com) and create a new repository:
1. Click the **+** icon in the top right -> **New repository**.
2. Name it `ai-portfolio`.
3. Do **not** initialize with README, .gitignore, or License (you already have code).
4. Click **Create repository**.

Copy the URL shown (e.g., `https://github.com/YOUR_USERNAME/ai-portfolio.git`) and run:

```bash
# 5. Link your local repo to GitHub
git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git

# 6. Push your code
git push -u origin main
```

## Part 2: Publishing the Live Website

### Option A: Easy Deployment (Vercel/Netlify)
This is often the easiest way for React/Vite apps.
1. Go to [Vercel.com](https://vercel.com) or [Netlify.com](https://netlify.com) and sign up with GitHub.
2. Click **"Add New Project"** or **"Import from GitHub"**.
3. Select your `ai-portfolio` repository.
4. Click **Deploy**. It will automatically detect Vite and build your site.

### Option B: GitHub Pages (Manual)
If you prefer to stay entirely on GitHub:
1. In your `package.json`, add this script: `"deploy": "gh-pages -d dist"`
2. Install the helper: `npm install gh-pages --save-dev`
3. In `vite.config.js`, set base to your repo name: `base: '/ai-portfolio/',`
4. Run: `npm run build`
5. Run: `npm run deploy`

---

### Alternative: Manual Upload (No Git)
If you cannot install Git, you can manually upload files:
1. Create the repository on GitHub.
2. Click **"uploading an existing file"** link on the empty repo page.
3. Drag and drop all your project files (src, public, package.json, etc.) **EXCEPT** `node_modules`.
4. Commit changes.
*Note: This is not recommended for development but works for a one-time upload.*
