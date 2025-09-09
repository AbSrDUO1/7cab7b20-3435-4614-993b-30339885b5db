"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <NavbarLayoutFloatingInline
        navItems={[{ name: '#hero', id: 'hero' }, { name: '#about', id: 'about' }, { name: '#how-to-buy', id: 'how-to-buy' }, { name: '#tokenomics', id: 'tokenomics' }, { name: '#footer', id: 'footer' }]}
        logoSrc="/images/logo.svg"
        buttonText="Buy Xeven"
        onButtonClick={() => {}}
        className="your-navbar-class"
        buttonClassName="your-button-class"
        buttonBgClassName="your-button-bg-class"
        navItemClassName="your-navitem-class"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to Xeven" subtitle="Explore our innovative solutions" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="At Xeven, we deliver cutting-edge solutions designed for the future." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Our tokenomics is designed to support sustainable growth and create value for stakeholders." cardItems={[{ id: 1, title: 'Total Supply', description: '100 Million' }, { id: 2, title: 'Circulating Supply', description: '80 Million' }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          copyrightText="© 2023 Xeven. All rights reserved."
          columns={[{ title: 'About', items: [{ label: 'Privacy Policy', onClick: () => {} }] }, { title: 'Support', items: [{ label: 'Contact', onClick: () => {} }] }]}
          onPrivacyClick={() => {}}
          className="your-footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}
