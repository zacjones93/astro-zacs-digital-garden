---
title: Layout and Composition Pattern
tags: dev
---


The Layout and Composition pattern is converting the props that a component receives into `React.ReactNode` instead of data.

This allows for the parent component to own the data without a lot of prop drilling and the child to be responsible for layout.

This is especially useful if your parent component is an RSC (React Server Component) and is loading data and your child component has some fancy client code it depends on.

```tsx

function App() {
  const user = await getUser()
	return (
		<>
			<Footer 
        footerMessage={`Don't have a good day–have a great day, ${user.name}`} 
      />
		</>
	)
}


function Footer({ footerMessage }: { footerMessage: string }) {
	return (
		<footer>
			<p>{footerMessage}</p>
		</footer>
	)
}
```