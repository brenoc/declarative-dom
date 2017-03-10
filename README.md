# Declarative DOM

> Is mini experimental library to declarative build UIs

## How

```js
import d from 'declarative-dom'

function MyComponent({ text }) {
  const handleClick = () => { console.log(text) }

  return d(
    'div', { id: 'my-component', onClick: handleClick },
      Message({ text })
  )
}

function Message({ text }) {
  return d(
    'span', { style: 'color: red;' },
      text
  )
}

document.body.appendChild(MyComponent({ text: 'Hello World!' }))
```