import { fetchData } from '$lib/utils/api';

export async function load() {
  try {
    const ideaData = await fetchData('/api/idea-list');

    return {
      ideaData: ideaData?.data || null,
    };
  } catch (error) {
    console.error('Error in load function:', error);
    throw error;
  }
}