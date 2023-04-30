import React from 'react';

import Header from '@/components/layout/Header';
import Navbar from '@/components/Navbar/Navbar';
import Table from '@/components/Table/Table';

export const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Table />
    </div>
  );
};

export default Index;
