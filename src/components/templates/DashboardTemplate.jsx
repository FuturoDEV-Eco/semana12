// src/components/templates/DashboardTemplate/DashboardTemplate.js
import React from 'react';
import Header from '../organisms/Header';

const DashboardTemplate = ({ children }) => {
  return (
    <div className="dashboard">
      <Header />
      <main>{children}</main>
      {/* Other common dashboard elements */}
    </div>
  );
};

export default DashboardTemplate;
