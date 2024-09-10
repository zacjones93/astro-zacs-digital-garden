---
title: flushSync for Focus Management
tags: dev
---

`flushSync` is a 'de-optimization' in React which tells react that it should re-render immediately. This means you are telling React that you know better than it to re-render and should be used carefully.

The most common use-case for `flushSync` is for focus management. 

If you have elements on the page that are being conditionally rendered depending on some state, you can use `flushSync` to set state that will trigger a re-render and immediately focus the element that was conditionally rendered.

```tsx
// onSubmit of a form that turns into a button after submission
onSubmit={(event) => {
  event.preventDefault()
  flushSync(() => {
    setValue(inputRef.current?.value ?? '')
    setEdit(false) 
  })
  buttonRef.current?.focus()
}}
```