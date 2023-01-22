# when-dom-ready

> $(document).ready() for the 21st century

[![Build Status](https://travis-ci.org/lukechilds/when-dom-ready.svg?branch=master)](https://travis-ci.org/lukechilds/when-dom-ready)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/when-dom-ready/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/when-dom-ready?branch=master)
[![npm](https://img.shields.io/npm/v/when-dom-ready.svg)](https://www.npmjs.com/package/when-dom-ready)
[![GitHub Donate](https://badgen.net/badge/GitHub/Sponsor/D959A7?icon=github)](https://github.com/sponsors/lukechilds)
[![Bitcoin Donate](https://badgen.net/badge/Bitcoin/Donate/F19537?icon=bitcoin)](https://lu.ke/tip/bitcoin)
[![Lightning Donate](https://badgen.net/badge/Lightning/Donate/F6BC41?icon=bitcoin-lightning)](https://lu.ke/tip/lightning)

Returns a Promise for cleaner usage, provides a Promise chain helper function and can also be used as a pure function. The Promise will resolve instantly if the DOM is already ready.

## Browser Compatibility

- IE9+ (requires Promise polyfill)
- Edge *
- Firefox 29+
- Safari 8+
- Chrome 33+
- Opera 23+

## Install

```shell
npm install --save when-dom-ready
```

or for quick testing:

```html
<script src="https://unpkg.com/when-dom-ready"></script>
```

## Usage

```js
import whenDomReady from 'when-dom-ready';

whenDomReady().then(() => console.log('DOM is ready yo!'));
```

You can still use callbacks if you want to:

```js
whenDomReady(() => console.log('DOM is ready yo!'));
```

## Promise chain helper

There is also a little helper function, `whenDomReady.resume()`, that pauses the execution of a Promise chain and then resumes it with the last value once the DOM is ready.

This allows you to specify complex async control flow in simple readable code:

```js
fetch('/my-badass-api.json')
  .then(getSomeProcessingDoneWhileWaitingForDom)
  .then(whenDomReady.resume())
  .then(injectDataIntoDom);
```

## Pure usage

You can make the function pure by passing in a `document` object. This is really [useful for tests](https://github.com/lukechilds/when-dom-ready/blob/master/test/unit.js) and mocking environments.

For example this works in Node.js:

```js
const Window = require('window');
const whenDomReady = require('when-dom-ready');

const { document } = new Window();

whenDomReady(document).then(() => console.log('DOM is ready yo!'));
```

Again, you can use the callback version as a pure function too:

```js
whenDomReady(() => console.log('DOM is ready yo!'), document);
```

And of course the helper:

```js
//...
  .then(whenDomReady.resume(document))
```

## License

MIT © Luke Childs
