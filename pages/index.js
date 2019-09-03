import React from 'react';
import Head from 'next/head';
import '../styles/index.scss';
import NavBar from '../src/components/NavBar';
import Me from '../src/components/Me';

const Index = () => (
  <>
    <Head>
      <title>Sasha Suslova Design Portfolio</title>
      <meta
        name="description"
        content="Hi, I'm Sasha an user experience and interface designer. Here you will find brief summary of some of my latest projects."
      />
      <meta name="keywords" content="designer" />
    </Head>
    <div className="container">
      <NavBar />
      <Me />
    </div>
  </>
);

export default Index;
