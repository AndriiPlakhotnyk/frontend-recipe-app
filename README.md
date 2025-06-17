# 🥗 Recipe Book Frontend

A simple recipe book frontend built with **Next.js**, using **Zustand** for state management, **styled-components** for styling, and **axios** for data fetching.

---

## ⚙️ Installation

1. **Clone the repository and navigate to the frontend folder:**
   ```bash
   git clone git@github.com:AndriiPlakhotnyk/frontend-recipe-app.git
   cd frontend
   ```
2. **Install dependencies:**
   npm install

# or

yarn install

## 📦 **Environment Variables**
Create a .env.local file in the root of the frontend folder with the following content:

**Base URL of the localhost**
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3030
```

## 🚀 Running the Application
**Development mode:**
   npm run dev

# or

yarn dev

**Build for production:**
   npm run build

# or

yarn build

**Start production server:**
   npm start

# or

yarn start

## ⚙️ Required Configuration: next.config.js
Make sure to include the following next.config.js in your project root:

/** @type {import('next').NextConfig} \*/
const nextConfig = {
reactStrictMode: true,
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'your_host_name',
pathname: '/images/**',
},
],
},
};

module.exports = nextConfig;
Replace 'your_host_name' with the actual image host domain

## 📁 Project Structure
app/ – App Router pages and components

components/ – Reusable UI components

store/ – Zustand state stores

service/ – – utility functions and API service modules for data fetching and business logic

public/ – Static assets

.env.local – Environment config

## 🧑‍💻 Author
Plakhotnyk Andrii
