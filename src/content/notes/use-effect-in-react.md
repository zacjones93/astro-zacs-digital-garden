---
title: useEffect in React
tags: dev
---


## Dependency Array
Use primitive values in a dependency array. If you use something like an object, you'll run into referential equality issues. For instance, the two objects below are different. This becomes an issue because if you have an initial value of an object and react creates that initial value again, even though the values are the same, the object is different and React triggers a re-render.

```tsx
const options1 = {
  max: 10,
  speed: 10,
  glare: true,
  'max-glare': 1,
}

const options2 = {
  max: 10,
  speed: 10,
  glare: true,
  'max-glare': 1,
}
Object.is(options1, options2) // false
```