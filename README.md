# domloaded

> Check when the DOM is loaded

[![Build Status](https://travis-ci.org/lukechilds/domloaded.svg?branch=master)](https://travis-ci.org/lukechilds/domloaded) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/domloaded/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/domloaded?branch=master)

Returns a Promise for cleaner usage and can also be used as pure function.

## Install

```shell
npm install --save domloaded
```

## Usage

```js
import domLoaded from 'domloaded';

domLoaded().then(() => console.log('DOM is loaded yo!'));
```

You can still use callbacks if you want to:

```js
domLoaded(() => console.log('DOM is loaded yo!'));
```

## License

MIT © Luke Childs
