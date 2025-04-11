import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import LocationSection from "../components/sections/LocationSection";
import ContactSection from "../components/sections/ContactSection";
import { siteMetadata } from "../data/siteMetadata";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}/images/og-image.jpg`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteMetadata.siteUrl} />
        <meta property="twitter:title" content={siteMetadata.title} />
        <meta
          property="twitter:description"
          content={siteMetadata.description}
        />
        <meta
          property="twitter:image"
          content={`${siteMetadata.siteUrl}/images/og-image.jpg`}
        />

        {/* Localização */}
        <meta name="geo.region" content="BR-DF" />
        <meta name="geo.placename" content="Brasília" />

        {/* Canonical */}
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Head>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
        <ContactSection />
      </Layout>
    </>
  );
}
