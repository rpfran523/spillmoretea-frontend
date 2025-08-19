# Spill More Tea - Static Tea Blog

A beautifully designed, SEO-optimized static tea blog built with Next.js 14 and comprehensive deployment configurations.

## 🚀 Quick Launch

### Local Development

1. **Install dependencies:**
   ```bash
   npm ci
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the built site locally:**
   ```bash
   npm run preview
   ```

### Environment Variables

Set `SITE_URL` for correct sitemap generation:

```bash
# For development
SITE_URL=http://localhost:3000 npm run build

# For production
SITE_URL=https://your-domain.com npm run build
```

## 📦 Project Structure

```
spillmoretea-frontend/
├── components/          # React components (SEO, etc.)
├── pages/              # Next.js pages
├── public/             # Static assets
├── scripts/            # Build scripts (sitemap generation)
├── out/               # Generated static files (gitignored)
└── deploy configs     # Platform-specific deployment files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build and export static site to `/out`
- `npm run build:prod` - Production build with optimizations
- `npm run preview` - Serve built site from `/out` for testing
- `npm run export` - Export Next.js app to static files
- `npm run sitemap:generate` - Generate sitemap.xml and robots.txt

**Note:** This project uses static export mode. `npm run start` is available for compatibility but production hosting should serve files from the `/out` directory (no Node.js server required).

## 🌐 Deployment Options

Choose your preferred hosting platform:

### Azure Static Web Apps (Primary)

This project is configured for Azure Static Web Apps with AI integration:

1. **Create an Azure Static Web App** in the Azure Portal
2. **Connect your GitHub repository** during creation
3. **Set required application settings** in Azure Portal → Static Web App → Configuration:
   - `AZURE_OPENAI_ENDPOINT` = `https://spillmoretea.openai.azure.com/` (replace with your endpoint)
   - `AZURE_OPENAI_KEY` = Your Azure OpenAI API key (Key1 from Azure Portal)
   - `AZURE_OPENAI_DEPLOYMENT` = Your model deployment name (e.g., `gpt-4o-mini`)
   - `AZURE_OPENAI_API_VERSION` = `2024-02-15-preview` (optional, has default)
4. **Add the API token secret** to GitHub repository secrets:
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Add secret: `AZURE_STATIC_WEB_APPS_API_TOKEN` with value from Azure

**Build Configuration:**
- Build command: `npm run build` (CI runs this automatically)
- Publish directory: `out`
- API path: `/api/chat`

**Local Testing After Deploy:**
```javascript
// Test in browser console after deployment
fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [{ role: "user", content: "Say hi!" }]
  })
}).then(r => r.json()).then(console.log)
```

## 🌐 Alternative Deployment Options

### Netlify (Alternative)

1. **Connect your repository** to Netlify
2. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Environment variables:**
   - `SITE_URL`: `https://your-site.netlify.app`
   - `NODE_ENV`: `production`

The included `netlify.toml` will handle the configuration automatically.

### Render Static Site (Alternative)

1. **Create a new Static Site** on Render
2. **Connect your repository**
3. **Render will automatically detect** the `render.yaml` configuration:
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `out`
4. **Update the SITE_URL** in `render.yaml` to match your domain

### GitHub Pages (Alternative)

1. **Enable GitHub Pages** for your repository:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
2. **Set repository variable** (optional):
   - Go to Settings → Secrets and variables → Actions
   - Add variable: `SITE_URL` with your GitHub Pages URL
3. **Push to main branch** - the workflow will deploy automatically

The `.github/workflows/deploy.yml` handles the entire deployment process.

### Any Static Host (Alternative)

Since this generates a standard static site in `/out`, you can deploy to:
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server

Just run `npm run build` and upload the `/out` directory contents.

## 🔍 SEO Features

This site includes comprehensive SEO optimization:

- ✅ **Meta tags** with Open Graph and Twitter Cards
- ✅ **Automatic sitemap generation** (`/sitemap.xml`)
- ✅ **Robots.txt** with proper directives
- ✅ **Structured data** (JSON-LD) for search engines
- ✅ **Performance optimized** static export
- ✅ **Security headers** via platform configurations

## 🛠 Technical Details

- **Framework:** Next.js 14 with static export
- **Styling:** Inline styles (easily replaceable with CSS framework)
- **SEO:** Custom components with comprehensive meta tag support
- **Build:** Automated sitemap/robots.txt generation post-export
- **Deployment:** Multiple platform configs included

## 📝 Adding Content

### New Pages

1. Create a new file in `/pages/` (e.g., `/pages/about.js`)
2. Update the routes array in `/scripts/generate-sitemap.js`
3. Use the `SEOHead` component for proper meta tags:

```jsx
import SEOHead from '../components/SEO/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead 
        title="About - Spill More Tea"
        description="Learn about our tea journey..."
      />
      {/* Your content */}
    </>
  );
}
```

### Blog Posts

Add new pages in `/pages/posts/` and they'll be automatically detected for sitemap generation.

## 🚨 Troubleshooting

### Build Issues

- Ensure all imports are static (no dynamic requires)
- Check that images use `unoptimized: true` in next.config.js
- Verify no server-side only features are used

### Deployment Issues

- Check build logs for specific error messages
- Verify environment variables are set correctly
- Ensure SITE_URL matches your actual domain

### Local Preview

If `npm run preview` fails, install serve globally:
```bash
npm install -g serve
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 🍵 and ❤️ for tea lovers worldwide!

