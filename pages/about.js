import React from 'react';
import Layout from '../src/components/Layout';
import AboutMe from '../src/components/AboutMe';

/**
 * About page.
 */
const About = () => (
  <Layout
    title="Sasha Suslova - UXI Designer"
    description="Designer with a passion for the problem-solving approach and deep empathy for the user. I have over 3 years experience of designing IoT products, web design, analytics products and launching startups."
    keywords="designer"
  >
    <AboutMe />
  </Layout>
);

export default About;
