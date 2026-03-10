// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-white selection:text-black">
      {/* Global Grain/Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999] pointer-events-none opacity-[0.03]"></div>

      <Sidebar />
      <Header />

      <main className="flex-1 lg:pl-64 pt-20 lg:pt-0 relative">
        {children}
      </main>

      <div className="lg:pl-64 border-t border-border/30">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;