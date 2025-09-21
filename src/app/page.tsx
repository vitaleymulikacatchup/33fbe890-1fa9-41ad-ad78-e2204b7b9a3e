"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  const navbarProps = {
    logoSrc: "/images/logo.svg",
    logoAlt: "NovaSaaS",
    buttonText: "Get Started",
    navItems: [
      { name: 'Hero', id: 'hero' },
      { name: 'About', id: 'about' },
      { name: 'FAQ', id: 'faq' },
      { name: 'How to Buy', id: 'how-to-buy' },
      { name: 'Tokenomics', id: 'tokenomics' },
      { name: 'Footer', id: 'footer' }
    ],
  };

  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline {...navbarProps} />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to NovaSaaS" subtitle="Empower your business with cloud solutions" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="NovaSaaS is a transformative SaaS platform designed to streamline your business operations." />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[{ title: 'What is NovaSaaS?', content: 'NovaSaaS is a cloud solutions provider that enhances your business efficiency.' }, { title: 'How to get started?', content: 'Visit our website and sign up for a free trial.' }, { title: 'What features do we offer?', content: 'We offer a variety of tools for collaborative work, storage, and analytics.' }, { title: 'Can I cancel anytime?', content: 'Yes, you can cancel your plan at any time without any penalties.' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="Our Tokenomics" description="Detailed overview of our token distribution and usage." kpiItems={[{ value: '70%', description: 'Token Distribution'}, { value: '100,000', description: 'Total Tokens'}, { value: '20%', description: 'Reserved for Team'}, { value: '30%', description: 'Community Incentives' }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase logoSrc="/images/logo.svg" logoWidth={150} logoHeight={50} columns={[{ title: 'Useful Links', items: [{ label: 'Privacy Policy', onClick: () => { console.log("Privacy Policy"); } }, { label: 'Terms of Service', onClick: () => { console.log("Terms of Service"); } } ] }, { title: 'Company', items: [{ label: 'About Us', onClick: () => { console.log("About Us"); } }, { label: 'Contact', onClick: () => { console.log("Contact"); } } ] }, { title: 'Support', items: [{ label: 'Help Center', onClick: () => { console.log("Help Center"); } }, { label: 'FAQs', onClick: () => { console.log("FAQs"); } } ] }]} copyrightText="© 2024 NovaSaaS" onPrivacyClick={() => { console.log("Privacy Policy Clicked"); }} />
      </div>
    </SiteThemeProvider>
  );
}
