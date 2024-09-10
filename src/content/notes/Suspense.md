---
title: Suspense
tags: dev
---

`Suspense` is a React primitive that allows you to handle async components in a better way.


Providing a `key` to `Suspense` or it's parent will tell React to throw away what it had before and render the fallback for that Suspense boundary. 

This is useful for when you have something like an image loading in a card that takes way longer than the rest of the data to load. You can display the fallback image and let the other data load and render while the image loads.
