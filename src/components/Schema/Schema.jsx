import React from 'react';

const Schema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sahareior Sijan",
    "url": "https://sahareior.000webhostapp.com/",
    "sameAs": [
    
      "https://web.facebook.com/sahareior.sijanr",
      "https://github.com/Sahareior"
    ],
    "jobTitle": [
      "SEO Expert",
      "Social Media Marketer",
      "Web Developer"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Flex Seo",
      "url": "https://sahareior.000webhostapp.com/"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Freelancer Ruhit",
      "url": "https://www.freelancerruhit.com/"
    },
    "description": "Experienced SEO expert, social media marketer, and web developer with a passion for optimizing digital presence and driving online engagement.",
    "image": "https://sahareior.000webhostapp.com/images/profile.jpg",
    "email": "sijansahareior@gmai.com",
    "telephone": "+8801737782265",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barguna Shadar Road",
      "addressLocality": "Barguna City",
      "addressRegion": "Amtali",
      "postalCode": "8700",
      "addressCountry": "Bangladesh"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default Schema;
