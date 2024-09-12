---
title: useDeferredValue
tags: dev
---

`useDeferredValue` is a hook that gives you more flexibility when you are dealing with async components. The hook tells React to render with the current value as well as render with the previous value. This lets React know when to render pending state

This hook is typically used for user interactions like typing in a search input that triggers a fetch request. If you have one slow component in your UI, you can pass the deferred value to it as the rest of your UI updates with the latest values.
