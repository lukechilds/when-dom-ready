# when-dom-ready

> Check when the DOM is ready

[![Build Status](https://travis-ci.org/lukechilds/when-dom-ready.svg?branch=master)](https://travis-ci.org/lukechilds/when-dom-ready) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/when-dom-ready/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/when-dom-ready?branch=master)

Returns a Promise for cleaner usage and can also be used as pure function.

## Install

```shell
npm install --save when-dom-ready
```

## Usage

### whenDomReady()

```js
import whenDomReady from 'when-dom-ready';

whenDomReady().then(() => console.log('DOM is loaded yo!'));
```

You can still use callbacks if you want to:

```js
whenDomReady(() => console.log('DOM is loaded yo!'));
```

### whenDomReady.resume()

There is also a little helper function that will pause the execution of a Promise chain until the DOM is loaded and then pass on the last value.

This allows you to specify complex async control flow in simple readable code:

```js
fetch('/my-badass-api.json')
  .then(getSomeProcessingDoneWhileWaitingForDOM)
  .then(whenDomReady.resume())
  .then(injectDataIntoDOM);
```

## Pure usage

You can make the function pure by passing in a `document` object. This is really useful for tests and mocking environments.

For example this works in Node.js:

```js
import jsdom from 'jsdom';
import whenDomReady from 'when-dom-ready';

const doc = jsdom.jsdom('').defaultView.document;

whenDomReady(doc).then(() => console.log('DOM is loaded yo!'));
```

Again, you can use the callback version as a pure function too:

```js
whenDomReady(() => console.log('DOM is loaded yo!'), doc);
```

The helper too:

```js
//...
  .then(whenDomReady.resume(doc))
```

## License

MIT © Luke Childs
