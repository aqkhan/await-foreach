
# Await inside forEach

A better forEach loop for your javascript applications with await capability. 

# Install
```
npm install [--save] await-foreach

// OR

npm i [-S] await-foreach
```

# Usage

For ECMA < ES6

```
const forEach = require('await-foreach')

forEach(arr, async(item) => {
    await doSomething(item)
})

// To await the entire loop

await forEach(arr, async(item) => {
    await doSomething(item)
})

```

For ECMA > ES6

```
import forEach from 'await-foreach'

forEach(arr, async(item) => {
    await doSomething(item)
})

// To await the entire loop

await forEach(arr, async(item) => {
    await doSomething(item)
})

```
