import { fetchData } from '$lib/utils/api';

export async function load() {
  try {
    const faqData = await fetchData('/api/faq?populate=*');

    return {
      faqData: faqData?.data || [],
    };
  } catch (error) {
    console.error('Error in load function:', error);
    throw error;
  }
}
