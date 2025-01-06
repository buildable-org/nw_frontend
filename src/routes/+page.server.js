import { fetchData } from '$lib/utils/api';

export async function load() {
  try {
    const heroData = await fetchData('/api/hero');
    const cardsData = await fetchData('/api/card-section?populate=cards');
    const roadmapData = await fetchData('/api/roadmap?populate=roadmap_steps');
    const ctaData = await fetchData('/api/cta-section');

    return {
      heroData,
      cardsData,
      roadmapData,
      ctaData,
    };
  } catch (error) {
    console.error('Error in load function:', error);
    throw error;
  }
}
