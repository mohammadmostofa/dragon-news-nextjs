import BreackingNews from '@/components/shared/BreackingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';


const MainLayout = ({children}) => {
  return (
    <>
      <Header></Header>
      <BreackingNews></BreackingNews>
      <Navbar></Navbar>
    
      {children}
    </>
  );
};

export default MainLayout;