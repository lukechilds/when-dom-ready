# domloaded

> Check when the DOM is loaded

[![Build Status](https://travis-ci.org/lukechilds/domloaded.svg?branch=master)](https://travis-ci.org/lukechilds/domloaded) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/domloaded/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/domloaded?branch=master)

Returns a Promise for cleaner usage and can also be used as pure function.

## Install

```shell
npm install --save domloaded
```

## Usage

### domLoaded()

```js
import domLoaded from 'domloaded';

domLoaded().then(() => console.log('DOM is loaded yo!'));
```

You can still use callbacks if you want to:

```js
domLoaded(() => console.log('DOM is loaded yo!'));
```

### domLoaded.wait()

There is also a little helper function that will pause the execution of a Promise chain until the DOM is loaded and then pass on the last value.

This allows you to specify complex async control flow in simple readable code:

```js
fetch('/my-badass-api.json')
  .then(getSomeProcessingDoneWhileWaitingForDOM)
  .then(domLoaded.wait())
  .then(injectDataIntoDOM);
```

## Pure usage

You can make the function pure by passing in a `document` object. This is really useful for tests and mocking environments.

For example this works in Node.js:

```js
import jsdom from 'jsdom';
import domLoaded from 'domloaded';

const doc = jsdom.jsdom('').defaultView.document;

domLoaded(doc).then(() => console.log('DOM is loaded yo!'));
```

Again, you can use the callback version as a pure function too:

```js
domLoaded(() => console.log('DOM is loaded yo!'), doc);
```

The helper too:

```js
//...
  .then(domLoaded.wait(doc))
```

## License

MIT © Luke Childs
