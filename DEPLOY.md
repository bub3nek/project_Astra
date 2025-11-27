# How to Publish Your Website

Since this is a Next.js application, the best way to publish it is using **Vercel** (the creators of Next.js), which integrates perfectly with GitHub.

## Step 1: Push to GitHub
1.  Go to [GitHub.com](https://github.com) and sign in.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it (e.g., `driver-efficiency-presentation`) and click **Create repository**.
4.  Copy the commands under "…or push an existing repository from the command line". They will look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```
5.  Run those commands in your terminal here.

## Step 2: Deploy to Vercel (Recommended)
1.  Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account.
2.  Click **Add New...** > **Project**.
3.  You will see your new `driver-efficiency-presentation` repository. Click **Import**.
4.  Click **Deploy**.
5.  Wait a minute, and your site will be live! Vercel handles all the building and hosting for free.

## Option B: GitHub Pages (Static Hosting)
If you prefer to host directly on GitHub Pages (without Vercel), we need to make a few configuration changes first (disable image optimization and enable static export). Let me know if you prefer this method!
