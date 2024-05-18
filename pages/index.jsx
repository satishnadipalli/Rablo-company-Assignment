import React, { useEffect } from 'react';
import Link from 'next/link';
// import { postHandler } from './api/users/users';
import RootLayout from '@/components/Layout';
import GlobalProvider from '@/redux/Provider';
import AllTodos from '@/components/AllTodos';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
const Home = () => {

  return (
    <GlobalProvider>
        <RootLayout>
          <div>
            <NavBar/>
            <AllTodos/>
            <Footer/>
          </div>
        </RootLayout>
    </GlobalProvider>
  );
};

export default Home;
