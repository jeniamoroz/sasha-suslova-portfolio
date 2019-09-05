import React from 'react';
import Me from '../src/components/Me';
import Layout from '../src/components/Layout';
import Projects from '../src/components/Projects';

const projects = [
  {
    title: 'Alfa-bank - App',
    description: 'Design of user experience for 2 user jobs.',
    releaseDate: 'Jun 2018',
    direction: 'left',
    pictureUrl: '/static/alfa_1.jpg',
    moreUrl: '#',
  },
  {
    title: 'Newstime',
    description: 'Web-site design, project management.',
    releaseDate: 'Feb 2019',
    direction: 'right',
    pictureUrl: '/static/newstime_1.jpg',
    moreUrl: '#',
  },
  {
    title: 'Y-packs',
    description: 'Promotion strategy, product design, web-site design.',
    releaseDate: 'Apr 2019',
    direction: 'left',
    pictureUrl: '/static/ypack_1.jpg',
    moreUrl: '#',
  },
  {
    title: 'Bionit',
    description: 'Web-site design, package design.',
    releaseDate: 'Aug 2018',
    direction: 'right',
    pictureUrl: '/static/bionit_1.jpg',
    moreUrl: '#',
  },
];

const Portfolio = () => (
  <Layout
    title="Design Portfolio - Sasha Suslova"
    description="Hi, I'm Sasha a user experience designer. Here you will find a brief summary of some of my latest projects."
    keywords="designer"
  >
    <Me />
    <Projects projects={projects} />
  </Layout>
);

export default Portfolio;
