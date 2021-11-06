import axios from 'axios';

export const fetchApi = async route => {
  const res = await axios.get(process.env.NEXT_PUBLIC_STRAPI_API_URL + route);
  const data = res.data;
  return data;
};

export const getAllNews = async () => {
  const allNews = await fetchApi('/news');
  return allNews;
};

export const getSingleNews = async slug => {
  const singleNews = await fetchApi('/news/' + slug);
  return singleNews;
};

export const getFaq = async () => {
  const faq = await fetchApi('/faqs');
  return faq;
};
