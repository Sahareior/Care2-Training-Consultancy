const Sitemap = require('react-router-sitemap').default;

// Define the router as used in your app
const routes = [
    { path: '/', lastmod: new Date().toISOString() },
    { path: '/more', lastmod: new Date().toISOString() },
    { path: '/terms', lastmod: new Date().toISOString() },
    { path: '/privacy', lastmod: new Date().toISOString() },
];




const generateSitemap = () => {
    new Sitemap(routes)
        .build('https://care2.netlify.app') // Replace with your domain
        .save('./public/sitemap.xml'); // Save the sitemap in the public directory
};

// Call the function to generate the sitemap
generateSitemap();
