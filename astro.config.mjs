
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import {doubleBracketPlugin} from './plugins/backlinkPlugin.mjs'
import { applyLayoutToNotesPlugin } from './plugins/noteLayoutPlugin.js';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc, doubleBracketPlugin, applyLayoutToNotesPlugin],
    // Preserves remark-gfm and remark-smartypants
    extendDefaultPlugins: true,
  },
  url: 'https://zacjones.dev',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    tailwind(), 
    mdx({
      // Applied to .mdx files only
      rehypePlugins: [rehypeAccessibleEmojis],
    })
  ]
});