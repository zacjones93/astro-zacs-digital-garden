---
title: Refs in React
tags: dev
---

Refs are a way to access DOM nodes or React elements created by React.

There are two ways to create a ref:
- ref callback on a DOM node
- useRef hook

This first example isn't used as much.

```tsx
// example from Kent C. Dodds React Hooks workshop
<div
  className="tilt-root"
  ref={(tiltNode: HTMLVanillaTiltElement | null) => {
    if (tiltNode) {
      VanillaTilt.init(tiltNode, vanillaTiltOptions)
    }
    return () => {
      tiltNode?.vanillaTilt?.destroy()
    }
  }}
>
  <div className="tilt-child">{children}</div>
</div>
```


`useRef` is used more often.