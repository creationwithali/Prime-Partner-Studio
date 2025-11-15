This `deploy-clean` snapshot contains only the frontend source required to build and deploy the Next.js app.

How to use

1. Clone the repository and check out the `deploy-clean` branch:

```powershell
git clone https://github.com/creationwithali/Prime-Partner-Studio.git
git checkout deploy-clean
```

2. Install dependencies and build:

```powershell
cd PPS/frontend
npm ci
npm run build
npm start
```

3. Environment variables

Create a `.env.local` in `PPS/frontend` with at least:

```
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<a-secret>
```

4. Notes

- This branch intentionally omits `node_modules` and build artifacts to keep the branch small.
- If you need the full project history, use the `main` branch.
