const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITE_URL || 'https://spillmoretea.com';
const BUILD_DIR = path.join(__dirname, '../out');

// Define your routes/pages here - UPDATE THESE FOR YOUR SPILL MORE TEA SITE
const routes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/posts', changefreq: 'daily', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { url: '/terms', changefreq: 'yearly', priority: '0.3' },
];

// TODO: Add dynamic route generation for tea posts/articles
// You might want to read from your CMS, API, or built files
async function getDynamicRoutes() {
  const dynamicRoutes = [];
  
  // Example: If you have a posts directory with static files
  try {
    const postsDir = path.join(__dirname, '../pages/posts');
    if (fs.existsSync(postsDir)) {
      const postFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.js'));
      postFiles.forEach(file => {
        const slug = file.replace('.js', '');
        if (slug !== 'index') {
          dynamicRoutes.push({
            url: `/posts/${slug}`,
            changefreq: 'weekly',
            priority: '0.8',
            lastmod: new Date().toISOString()
          });
        }
      });
    }
  } catch (error) {
    console.log('Could not fetch dynamic routes:', error.message);
  }
  
  return dynamicRoutes;
}

async function generateSitemap() {
  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...routes, ...dynamicRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  // Write sitemap
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${allRoutes.length} URLs!`);
  
  // Generate sitemap index if you have multiple sitemaps
  generateSitemapIndex();
}

function generateSitemapIndex() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap-index.xml'), sitemapIndex);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsPath = path.join(BUILD_DIR, 'robots.txt');
  
  const robots = `User-agent: *
Allow: /

# Important SEO files
Sitemap: ${BASE_URL}/sitemap.xml

# Block admin/private areas (uncomment if needed)
# Disallow: /admin/
# Disallow: /api/
# Disallow: /_next/

# Allow social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;

  fs.writeFileSync(robotsPath, robots);
  console.log('✅ Robots.txt generated successfully!');
}

// Run the generation
if (require.main === module) {
  generateSitemap().then(() => {
    generateRobotsTxt();
  }).catch(error => {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  });
}

module.exports = { generateSitemap, generateRobotsTxt };
