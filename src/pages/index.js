import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects.jsx";
import Clients from "@/components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KCC - Karada Construction Company is Leading Road Construction & Infrastructure Company</title>
        <meta
          name="description"
          content="Karada Construction Company (KCC) is a trusted leader in road construction and infrastructure projects, delivering high-quality and sustainable solutions."
        />
        <meta
          name="keywords"
          content="construction company, road construction, infrastructure projects, building roads, highway construction, Karada Construction Company"
        />
        <meta name="author" content="Karada Construction Company" />
        
        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:title" content="KCC - Leading Road Construction & Infrastructure Company" />
        <meta property="og:description" content="KCC specializes in road construction and infrastructure projects, ensuring quality and reliability." />
        <meta property="og:image" content="/kcc-og-image.jpg" />
        <meta property="og:url" content="https://www.kcc.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KCC - Leading Road Construction & Infrastructure Company" />
        <meta name="twitter:description" content="KCC specializes in road construction and infrastructure projects, ensuring quality and reliability." />
        <meta name="twitter:image" content="/kcc-twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kcc.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Karada Construction Company",
            "url": "https://www.kcc.com",
            "logo": "/kcc-logo.png",
            "description": "KCC is a trusted leader in road construction and infrastructure projects, delivering high-quality and sustainable solutions.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-123-456-7890",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English"]
            }
          }),
        }}
      />
    </div>
  );
}
