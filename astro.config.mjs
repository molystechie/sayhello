import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://molystechie.github.io',
  base:'/sayhello'
});


/**
  site hosted on github: https://molystechie.github.io/sayhello
 */