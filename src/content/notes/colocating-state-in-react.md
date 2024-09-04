---
title: Colocating State in React
tags: dev
---


Colocating state in React is a fancy term for putting state as close to where it's used as possible. In essence, it's the opposite of lifting state up.


For instance, the state of count down below is being managed in the `App` component because it's being used in `Counter` and `CountDisplay`.

_example pulled from Kent C. Dodds Lifting State Intro in React Hooks workshop_

```tsx
function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Counter count={count} setCount={setCount} />
			<CountDisplay count={count} />
		</div>
	)
}

function Counter({ count, setCount }) {
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

function CountDisplay({ count }) {
	return <div>Count: {count}</div>
}
```

If requirements changed and we only needed state in one component, we'd colocate that state to the component that needs it.

```tsx
function App() {
	return (
		<div>
			<Counter />
		</div>
	)
}

function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Increment ({count})</button>
		</div>
	)
}
```