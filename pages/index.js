import { Fragment } from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import Faq from '../components/Faq/Faq';
import News from '../components/News/News';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Info />
      <About />
      <WhyUs />
      <Services />
      <Products />
      <Testimonial />
      <Faq />
      <News />
      <Footer />
    </Fragment>
  );
}
