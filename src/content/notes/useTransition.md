---
title: useTransition
tags: dev
---

`useTransition` is a hook that allows you to manage transitions in your application. You will often times pair this with `Suspense` and wrap `startTransition` around `setState` calls that trigger async transitions in your application.

Things like form actions will be triggered during a transition.

It returns a tuple with two values: `isPending` and `startTransition`.

- `isPending` is a boolean that indicates whether a transition is pending.
- `startTransition` is a function that you can call to start a transition.
