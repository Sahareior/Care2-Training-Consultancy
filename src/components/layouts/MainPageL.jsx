import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const LazyHero = React.lazy(() => import('../WebBody/HomePage/Hero/Hero'));
const LazyFeatures = React.lazy(() => import('../WebBody/Features/Features'));
const LazyServices = React.lazy(() => import('../WebBody/HomePage/Services/Services'));
const LazyAbout = React.lazy(() => import('../WebBody/HomePage/AboutUs/About'));
const LazyTestimoni = React.lazy(() => import('../WebBody/Testimoni/Testimoni'));
const LazyQuestions = React.lazy(() => import('../WebBody/HomePage/questions/Questions'));
const LazyContact = React.lazy(() => import('../WebBody/Contact/Contact'));
const LazyStarsCanvas = React.lazy(() => import('../Canvas/Stars'));

const MainPageL = () => {
  return (
    <div className="">
      <Helmet>
        <title>Care2 Consultancy | Excellence in Skills Development & Traininge</title>
        <meta name="description" content="Empowering individuals and organizations with tailored training solutions to unlock potential and achieve success. Partner with Care2 for your growth journey" />
        <link rel="canonical" href="https://care2.netlify.app/" />
        <link rel="preload" as="image" href="/path/to/critical-image.jpg" />
        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Care2 Training Consultancy",
      url: "https://your-website-url.com",
      logo: "https://your-website-url.com/images/logo.png",
      description: "Care2 Training Consultancy is committed to empowering individuals and organizations with tailored training programs, expert guidance, and knowledge to help you achieve your goals with confidence.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1234567890",
        contactType: "Customer Support",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/Care2",
        "https://www.twitter.com/Care2",
        "https://www.linkedin.com/company/Care2",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Training St.",
        addressLocality: "CityName",
        addressRegion: "StateName",
        postalCode: "12345",
        addressCountry: "CountryName",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://your-website-url.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    })}
  </script>

      </Helmet>

      <Suspense fallback={<div>Loading Hero...</div>}>
        <LazyHero />
      </Suspense>
      
      <Suspense fallback={<div>Loading Features...</div>}>
        <LazyFeatures />
      </Suspense>

      <Suspense fallback={<div>Loading Services...</div>}>
        <LazyServices />
      </Suspense>

      <Suspense fallback={<div>Loading About...</div>}>
        <LazyAbout />
      </Suspense>

      <Suspense fallback={<div>Loading Testimoni...</div>}>
        <LazyTestimoni />
      </Suspense>

      <div className="relative z-0">
        <Suspense fallback={<div>Loading Contact...</div>}>
          <LazyContact />
        </Suspense>

        <Suspense fallback={<div>Loading Stars...</div>}>
          <LazyStarsCanvas />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading Questions...</div>}>
        <LazyQuestions />
      </Suspense>
    </div>
  );
};

export default MainPageL;
