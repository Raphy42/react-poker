```js
const readme = sources.reduce((acc, x) => acc + buildDocumentation(x), '')
```