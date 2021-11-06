import Info from '../components/Info';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import Faq from '../components/Faq/Faq';
import News from '../components/News/News';
import Layout from '../components/ui/Layout';
import markdownToHtml from '../lib/markdownToHtml';
import { getAllNews, getFaq } from '../lib/api';

export default function Home({ newsData, faqData }) {
  return (
    <Layout>
      <main>
        <AboutUs />
        <Info />
        <WhyUs />
        <Products />
        <Testimonial />
        <News data={newsData} />
        <Faq data={faqData} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const newsData = await getAllNews();

  let faq = await getFaq();

  const faqData = await Promise.all(
    faq.map(async question => {
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
