import React from 'react';
import Head from 'next/head';
import '../styles/index.scss';
import NavBar from '../src/components/NavBar';
import Me from '../src/components/Me';
import NavItem from '../src/components/NavItem';
import Project from '../src/components/Project';

const menuItems = [{ to: 'portfolio', active: true }, { to: 'about', active: false }];
const projects = [
  {
    title: 'Alfa-bank - App',
    description: 'Design of user experience for 2 user jobs.',
    releaseDate: 'Jun 2018',
    direction: 'left',
    pictureUrl: '/static/alfa_1.jpg',
  },
  {
    title: 'Newstime',
    description: 'Web-site design, project management.',
    releaseDate: 'Feb 2019',
    direction: 'right',
    pictureUrl: '/static/newstime_1.jpg',
  },
  {
    title: 'Y-packs',
    description: 'Promotion strategy, product design, web-site design.',
    releaseDate: 'Apr 2019',
    direction: 'left',
    pictureUrl: '/static/ypack_1.jpg',
  },
  {
    title: 'Bionit',
    description: 'Web-site design, package design.',
    releaseDate: 'Aug 2018',
    direction: 'right',
    pictureUrl: '/static/bionit_1.jpg',
  },
];

const Index = () => (
  <>
    <Head>
      <title>Design Portfolio - Sasha Suslova</title>
      <meta name="title" content="Design Portfolio - Sasha Suslova" />
      <meta
        name="description"
        content="Hi, I'm Sasha an user experience and interface designer. Here you will find brief summary of some of my latest projects."
      />
      <meta name="keywords" content="designer" />
    </Head>
    <div className="container">
      <NavBar>
        {menuItems.map(item => (
          <NavItem key={item.to} {...item}>
            {item.to}
          </NavItem>
        ))}
      </NavBar>
      <Me />
      <h1>Projects</h1>
      {projects.map(item => (
        <Project key={item.title} {...item} />
      ))}
    </div>
  </>
);

export default Index;
