##### Adds support style as strings instead of object declaration in react components

## For what
To quickly preview changes without creating objects and copy the style as it is from browsers devtool

```jsx
function Component() {
    return <div style="border-color:red;height:100px"/>
}
```
instead of this
```jsx
function Component() {
    return <div style={{ borderColor: 'red', height: '100px'}} />
}
```

## Install

```bash
yarn add babel-plugin-react-style-string
```

```bash
npm install babel-plugin-react-style-string
```

babel.config.js or .babelrc
```js
module.exports = { plugins: ['babel-plugin-react-style-string'] };
```

[NextJS integration](https://nextjs.org/docs/advanced-features/customizing-babel-config)