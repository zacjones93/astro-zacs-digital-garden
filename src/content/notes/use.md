---
title:use
tags: dev
---

`use` is a new hook in React that has a few different use-cases.

## Context

`useContext` is deprecated in favor of `use` so when we have a context that we are setting up, you'll `use` that context in a hook or component.

```tsx
const SearchParamsContext = createContext<SearchParamsTuple | null>(null)


function SearchParamsProvider({ children }: { children: React.ReactNode }) {
  // ...

  return (
		<SearchParamsContext value={searchParamsTuple}>
			{children}
		</SearchParamsContext>
	)
}

function useSearchParams() {
	const context = use(SearchParamsContext)
  if (context === null) {
    throw new Error('useSearchParams must be used within a SearchParamsProvider')
  }
	return context
}
```

## Promises

`use` can also resolve a promise that is handed to a client component from the server.


```tsx

const ServerComponent = async () => {
  const result = fetch('https://api.example.com/data')

  return <div><ClientComponent resultLoader={result} /></div>
}

const ClientComponent = ({resultLoader}: {resultLoader: Promise<any>}) => {
  const result = use(resultLoader)

  return <div>{result.data}</div>
}
```