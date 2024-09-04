---
title: Callback Method for useState
tags: dev
---


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
