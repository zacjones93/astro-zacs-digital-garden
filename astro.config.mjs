import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import { doubleBracketPlugin } from './plugins/backlinkPlugin.mjs';

import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  url: 'https://zacjones.dev',
  markdown: {
    remarkPlugins: [remarkToc, doubleBracketPlugin]
  },
  integrations: [react(), tailwind()]
});