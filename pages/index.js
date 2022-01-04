import Layout from '../components/ui/Layout';
import markdownToHtml from '../lib/markdownToHtml';
import { getAllNews, getFaq } from '../lib/api';
import Hero from '../components/revised/Hero';
import Info from '../components/revised/Info';
import Info2 from '../components/revised/Info2';
import Products from '../components/revised/Product/Products';
import Email from '../components/revised/Email';

export default function Home({ newsData, faqData }) {
  return (
    <Layout>
      <main>
        <Hero />
        <Info />
        <Info2 />
        <Products />
        <Email />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const newsData = (await getAllNews()) || [];

  let faq = await getFaq();

  const faqData =
    (await Promise.all(
      faq?.map(async question => {
        const parsed = await markdownToHtml(question.answer);
        const newQ = { ...question };
        newQ.answer = parsed;
        return newQ;
      })
    )) || [];

  return {
    props: { newsData, faqData },
  };
};
