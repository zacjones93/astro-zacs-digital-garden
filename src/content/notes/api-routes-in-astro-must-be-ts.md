---
title: API Routes in Astro must be TS
tags: dev
---

I spent quite a long time with a working Astro app utilizing SSR that would not for the life of me build in production. 

I noticed that vercel serverless function invocations were failing so knew I needed to look at the API routes in my application.

After a while of investigating, I realized `.astro` files might not play nice with vercel (I tried netlify too) which I was using because Astro has an easy to use `Astro` global that makes redirects and such straightforward. 

Converting these API routes to `.ts` files fixed the issue.

Commit that fixed it:

- [refactor api routes to ts files](https://github.com/zacjones93/greedy-app-astro/commit/a6d578b5aa7077f53ac98525d37e45867130679c)
