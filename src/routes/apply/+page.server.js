import { fetchData } from '$lib/utils/api';

export async function load() {
  try {
    const formData = await fetchData('/api/forms?filters[slug][$eq]=sign-up&populate=form_fields');

    return {
      formData: formData?.data[0] || null,
    };
  } catch (error) {
    console.error('Error in load function:', error);
    throw error;
  }
}
