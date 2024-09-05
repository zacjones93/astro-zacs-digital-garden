---
title: useReducer
tags: dev
---


## useReducer with initializer function

Today I learned that `useReducer` can take 3 arguments:

- reducer function
- initial state
- initializer function

If your initializer function needs data, you can pass it the initial state as an argument. Then if you don't want the reducer function to re-initialize on every render, don't invoke the function.

```tsx
const [state, dispatch] = useReducer(gameStateReducer, null, getInitialGameState)
//vs
const [state, dispatch] = useReducer(gameStateReducer, getInitialGameState())
```
