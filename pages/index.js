import Info from '../components/Info';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import Faq from '../components/Faq/Faq';
import News from '../components/News/News';
import Hero from '../components/Hero';
import Layout from '../components/ui/Layout';
import axios from 'axios';
import markdownToHtml from '../lib/markdownToHtml';

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:1337/news/');
  const newsData = res.data;

  const res2 = await axios.get('http://localhost:1337/faqs/');
  const faqData = await Promise.all(
    res2.data.map(async question => {
      const parsed = await markdownToHtml(question.answer);
      const newQ = { ...question };
      newQ.answer = parsed;
      return newQ;
    })
  );

  return {
    props: { newsData, faqData },
  };
};

export default function Home({ newsData, faqData }) {
  console.log(faqData);
  return (
    <Layout>
      <Hero />
      <Info />
      <AboutUs />
      <WhyUs />
      <Products />
      <Testimonial />
      <News data={newsData} />
      <Faq data={faqData} />
    </Layout>
  );
}
