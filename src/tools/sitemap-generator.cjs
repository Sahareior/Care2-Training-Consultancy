const Sitemap = require('react-router-sitemap').default;

// Define the router as used in your app
const routes = [
    {
        path: '/',
        children: [
            { path: '', element: 'MainPageL' }, // Nested route under Layout
        ],
    },
];




const generateSitemap = () => {
    new Sitemap(routes)
        .build('https://effervescent-dieffenbachia-68aee0.netlify.app') // Replace with your domain
        .save('./public/sitemap.xml'); // Save the sitemap in the public directory
};

// Call the function to generate the sitemap
generateSitemap();
