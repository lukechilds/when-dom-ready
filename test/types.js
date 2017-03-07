import test from 'ava';
import jsdom from 'jsdom';
import whenDomReady from '../';

test('whenDomReady is a function', t => {
	t.is(typeof whenDomReady, 'function');
});

test('whenDomReady returns a Promise', t => {
	t.true(whenDomReady() instanceof Promise);
});

test('whenDomReady.resume is a function', t => {
	t.is(typeof whenDomReady.resume, 'function');
});

test('whenDomReady.resume returns a function that returns a promise', t => {
	const returnValue = whenDomReady.resume();
	t.is(typeof returnValue, 'function');
	t.true(returnValue() instanceof Promise);
});

test.cb('Promise value always resolves to undefined', t => {
	t.plan(2);
	const config = {
		html: '',
		onload: window => {
			const promises = [];
			promises.push(whenDomReady(() => 'foo', window.document).then(val => t.is(val, undefined)));
			promises.push(whenDomReady(window.document).then(val => t.is(val, undefined)));
			Promise.all(promises).then(() => t.end());
		}
	};
	jsdom.env(config);
});
