# Paradise Nursery

A React front-end shopping application for browsing and purchasing houseplants. Browse beautiful plants organized by category, add them to your cart, and manage your order — all in a clean, responsive UI.

## Features

- 🌿 **3 plant categories** with 6 unique plants each (18 total)
- 🛒 **Redux-powered shopping cart** (add, remove, adjust quantities)
- 🔄 **Dynamic cart badge** updates in real time
- 📱 **Responsive design** for desktop and mobile
- 🗺️ **3 pages**: Landing, Product Listing, Shopping Cart

## Tech Stack

- React 18 (functional components + hooks)
- React Router v6
- Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)
- Vite

## Project Structure

```
src/
├── App.jsx                    # Root component, Router, Redux Provider
├── App.css                    # Landing page styles & global overrides
├── data/
│   └── plants.js              # Plant data (id, name, price, thumbnail, category)
├── redux/
│   ├── CartSlice.jsx          # Redux slice (addToCart, increaseQuantity, decreaseQuantity, removeFromCart)
│   └── store.js               # Redux store configuration
└── components/
    ├── AboutUs.jsx             # Company description component
    ├── Navbar.jsx              # Shared header/nav with cart badge
    ├── ProductList.jsx         # Product listing page (route: /plants)
    └── CartItem.jsx            # Shopping cart page (route: /cart)
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or bun

### Install & Run

```bash
# 1. Clone the repo
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to GitHub Pages

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Set the base path in `vite.config.ts`

```ts
export default defineConfig({
  base: "/<YOUR_REPO_NAME>/",
  plugins: [react()],
});
```

### 3. Add deploy scripts to `package.json`

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Deploy

```bash
npm run deploy
```

Your app will be live at:  
`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

> **Note:** Make sure your repository is public and GitHub Pages is enabled in the repo settings (Settings → Pages → Source: `gh-pages` branch).

## License

MIT
