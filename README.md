# when-dom-ready

> $(document).ready() for the 21st century

[![Build Status](https://travis-ci.org/lukechilds/when-dom-ready.svg?branch=master)](https://travis-ci.org/lukechilds/when-dom-ready) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/when-dom-ready/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/when-dom-ready?branch=master)

Returns a Promise for cleaner usage, provides a Promise chain helper function and can also be used as a pure function.

## Install

```shell
npm install --save when-dom-ready
```

## Usage

### whenDomReady()

```js
import whenDomReady from 'when-dom-ready';

whenDomReady().then(() => console.log('DOM is ready yo!'));
```

You can still use callbacks if you want to:

```js
whenDomReady(() => console.log('DOM is ready yo!'));
```

### whenDomReady.resume()

There is also a little helper function that will pause the execution of a Promise chain and then resume with the last value once the DOM is ready.

This allows you to specify complex async control flow in simple readable code:

```js
fetch('/my-badass-api.json')
  .then(getSomeProcessingDoneWhileWaitingForDom)
  .then(whenDomReady.resume())
  .then(injectDataIntoDom);
```

## Pure usage

You can make the function pure by passing in a `document` object. This is really useful for tests and mocking environments.

For example this works in Node.js:

```js
import jsdom from 'jsdom';
import whenDomReady from 'when-dom-ready';

const doc = jsdom.jsdom('').defaultView.document;

whenDomReady(doc).then(() => console.log('DOM is ready yo!'));
```

Again, you can use the callback version as a pure function too:

```js
whenDomReady(() => console.log('DOM is ready yo!'), doc);
```

And of course the helper:

```js
//...
  .then(whenDomReady.resume(doc))
```

## License

MIT © Luke Childs
