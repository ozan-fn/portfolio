# Feature-Based Laravel Template

This Laravel template uses **feature-based architecture** for clean, modular, and scalable development.

---

## Project Overview

- Each feature has its own **Controllers, Models, Requests, Services, Routes**.  
- Web and API routes are **auto-loaded** via `RouteServiceProvider`.  
- Frontend pages are organized by feature under `resources/js/Features/`.  
- Uses **Breeze + React + Tailwind + Inertia** for SPA pages.  
- Default `routes/` folder is removed.

---

## Installation / How to Use

### Step 1: Clone the Template

```bash
git clone https://github.com/rifatxtra/feature-based-laravel my-project
cd my-project
```

### Step 2: Install PHP Dependencies

```bash
composer install
```

### Step 3: Install Node Dependencies

```bash
npm install
```
### Step 4: Create .env File

```bash
cp .env.example .env
php artisan key:generate
```
### Step 5: Run Migrations (Optional)

```bash
php artisan migrate
```

### Step 6: Start the Development Server

```bash
php artisan serve
npm run dev
```

## Adding New Features

1.Create a feature folder inside app/Features/:
```bash
app/Features/FeatureName/
 ├── Controllers/
 ├── Models/
 ├── Requests/
 ├── Services/
 ├── routes.php
 └── api.php
 ```

2.Create frontend pages in:
```bash
resources/js/Features/FeatureName/
```

3.Define web routes in routes.php and API routes in api.php.
These are auto-loaded via RouteServiceProvider.

4.Create Controllers extending App\Http\Controllers\Controller.

5.Optionally create Requests and Services for validation and business logic.

## Using Inertia Pages

Frontend pages live in:

resources/js/Features/FeatureName/PageName.jsx

In the controller:

```bash
return Inertia::render('FeatureName/PageName', [
    'title' => 'My Page',
]);
```

Routes automatically map to this page.

## Notes

No routes/ folder is needed — all routes are in features.

Web and API routes are separated.

Middleware, Jobs, Mailables are kept global (not per feature).

Fully compatible with Laravel route caching:

## php artisan route:cache


# What We Changed from Default Laravel

## 🧩 Feature-Based Architecture
- Converted Laravel to **feature-based structure**.  
- Removed default `routes/` folder.  
- Added `app/Features/` for Controllers, Models, Requests, Services, and feature-specific routes.  
- Frontend pages moved to `resources/js/Features/` instead of `Pages`.

---

## 🛣️ Routing
- All web and API routes are **auto-loaded** via `RouteServiceProvider`.  
- No need to manually update `bootstrap/app.php`.  
- Web routes use `'web'` middleware, API routes use `'api'` prefix.

---

## 🎨 Frontend
- Pages folder renamed from `Pages` → `Features`.  
- Fully compatible with **Inertia + React + Tailwind**.  
- Each feature can contain multiple pages and components.

---

## ⚙️ Global Resources
- Middleware, Jobs, and Mailables remain **global**.  
- Feature folders contain only **feature-specific logic**.  
- Shared resources remain untouched.

---

## 🚀 Scalability
- Each feature is **modular** (backend + frontend).  
- Easy to add new features without touching unrelated code.  
- Supports converting features into **reusable packages**.
