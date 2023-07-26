import React from 'react';
import { Props } from '../../models/interface';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        {/* <AnalyticsWrapper /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
