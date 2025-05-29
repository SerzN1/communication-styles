# GitHub Pages Deployment Steps

1. **Ensure your `package.json` has the correct homepage:**
   ```json
   "homepage": "https://<your-github-username>.github.io/<repo-name>"
   ```

2. **Install gh-pages if you haven't:**
   ```
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Update your router's basename:**
   ```jsx
   <BrowserRouter basename="/<repo-name>">
     {/* ... */}
   </BrowserRouter>
   ```

5. **Commit and push all changes to your main branch:**
   ```
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push
   ```

6. **Deploy to GitHub Pages:**
   ```
   npm run deploy
   ```

7. **Go to your repository's Settings > Pages and ensure the source is set to the `gh-pages` branch.**

8. **Access your site at:**
   ```
   https://<your-github-username>.github.io/<repo-name>
   ```

**Note:**  
- Replace `<your-github-username>` and `<repo-name>` with your actual GitHub username and repository name.
- If you change the repo name or username, update the homepage and basename accordingly.
