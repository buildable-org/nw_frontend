import { fetchData } from '$lib/utils/api';

export async function load() {
  try {
    const heroData = await fetchData('/api/hero');
    const cardsData = await fetchData('/api/card-section?populate=cards');
    const roadmapData = await fetchData('/api/roadmap?populate=roadmap_steps');
    
    const formData = await fetchData('/api/forms?filters[slug][$eq]=sign-up&populate=form_fields');


    return {
      heroData,
      cardsData,
      roadmapData,
      formData: formData?.data[0] || null,
    };
  } catch (error) {
    console.error('Error in load function:', error);
    throw error;
  }
}
