import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
  },
  vite: {
    server: {
      host: 'localhost',
      port: 3000,
    },
  },
};
