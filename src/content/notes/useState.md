---
title: useState
tags: dev
---

## Callback Method for useState
useState accepts a callback method for updating state that will ensure the value you pass in is the latest state. This is important if you are depending on previous state to calculate the new state.

consider the following:

```tsx
const [count, setCount] = useState(0)
const increment = () => {
  setCount(prevCount => prevCount + 1)
  setCount(prevCount => prevCount + 1)
  setCount(prevCount => prevCount + 1)
}

increment()
// count is 3
```

vs not using the callback method:

```tsx
const [count, setCount] = useState(0)
const increment = () => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}

increment()
// count is 1
```

## Return previous state in useState callback to avoid unnecessary re-renders

Say you had state that depended on query params. When those query params update, so does your state which triggers a re-render. 

There are times when the query params update but their value is the same. If you don't check for this and always return `new URLSearchParams(window.location.search)`, you get a new object which will force a re-render.

By doing a check and returning previous state, you avoid a re-render.

```tsx
setSearchParamsState(prevParams => {
  const newParams = new URLSearchParams(window.location.search)
  if(prevParams.toString() === newParams.toString()) return prevParams
  
  return newParams
})
```